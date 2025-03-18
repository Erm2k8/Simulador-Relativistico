import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js';
import { createStars, animateStars } from './background.js';
import { createCube } from './cube.js';
import { setupCameraRotation } from './rotate_object.js';

const allowCameraRotation = document.getElementById('allow-rotate-camera');
const velocityInput = document.getElementById('velocityInput');
const value = document.getElementById('value');

const c = 299_792_458; // Velocidade da luz em m/s

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, // Campo de visão
    window.innerWidth / window.innerHeight, // Proporção da tela
    0.1, // Plano de recorte próximo
    1000 // Plano de recorte distante
);
camera.position.z = 5; // Aproximar a câmera

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cubo inferior (fixo)
const fixedCube = createCube();
fixedCube.position.y = -1; // Posiciona o cubo abaixo
fixedCube.material.forEach(mat => mat.color.set(0x888888)); // Cor cinza para diferenciar
scene.add(fixedCube);

const stars = createStars(scene, 500);

// Adicionar iluminação
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Fila de cubos em movimento
const movingCubes = [];
const cubeSpeed = 0.05; // Velocidade de movimento dos cubos
const initialCubeSpacing = 3; // Espaçamento inicial entre os cubos
const maxCubes = 5; // Número máximo de cubos na fila
let lastCubePosition = -5; // Posição inicial do primeiro cubo

// Função para criar um novo cubo em movimento
function createMovingCube() {
    const cube = createCube();
    cube.position.y = 1; // Posiciona o cubo acima
    cube.position.x = lastCubePosition - initialCubeSpacing; // Posiciona atrás do último cubo
    lastCubePosition = cube.position.x; // Atualiza a posição do último cubo
    scene.add(cube);
    movingCubes.push(cube);
}

// Efeito de rotação e deformação de Terrell-Penrose
function applyTerrellPenroseEffect(object, velocity) {
    const beta = velocity / 100; // Velocidade normalizada (porcentagem de c)
    const gamma = 1 / Math.sqrt(1 - beta ** 2); // Fator de Lorentz

    // Simula a rotação relativística
    object.rotation.y += 0.01 * gamma; // Rotação constante em Y
    object.rotation.x += 0.005 * gamma; // Rotação constante em X

    // Simula a deformação (escala no eixo X)
    object.scale.x = 1 / gamma; // Comprime no eixo X
    object.scale.y = 1; // Mantém a escala no eixo Y
    object.scale.z = 1; // Mantém a escala no eixo Z
}

// Loop de animação
function animate() {
    requestAnimationFrame(animate);

    const velocity = parseFloat(velocityInput.value);
    value.textContent = velocity.toFixed(2); // Atualiza o valor exibido

    // Move todos os cubos na fila
    for (let i = 0; i < movingCubes.length; i++) {
        const cube = movingCubes[i];
        cube.position.x += cubeSpeed;

        // Aplica o efeito de Terrell-Penrose
        applyTerrellPenroseEffect(cube, velocity);

        // Remove o cubo quando ele sai da tela
        if (cube.position.x > 5) {
            scene.remove(cube);
            movingCubes.splice(i, 1);
            i--; // Ajusta o índice após remover o cubo
        }
    }

    // Adiciona um novo cubo à fila se necessário
    if (movingCubes.length < maxCubes) {
        createMovingCube();
    }

    // Anima as estrelas
    animateStars(stars, velocity);

    // Renderiza a cena
    renderer.render(scene, camera);
}

// Lidar com redimensionamento da janela
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});

// Configura a rotação da câmera
setupCameraRotation(camera, allowCameraRotation);

// Cria os cubos iniciais
for (let i = 0; i < maxCubes; i++) {
    createMovingCube();
}

animate();