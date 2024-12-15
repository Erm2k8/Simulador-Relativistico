import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js';
import { createStars, animateStars } from './background.js';
import { createCube } from './cube.js';
import { rotateObject } from './rotate_object.js';

const allowCameraRotation = document.getElementById('allow-rotate-camera');

const c = 299_792_458 // m/s

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cube = createCube();
cube.rotation.x += 2;
cube.rotation.z += 2;
scene.add(cube);

const stars = createStars(scene, 500);

let shouldRotate = false; 

function animate() {
    let velocity = document.getElementById('velocityInput').value;

    requestAnimationFrame(animate);
    animateStars(stars, velocity);

    // Condição para rotacionar o cubo
    if (shouldRotate) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    let lengthFactor = Math.sqrt(1 - ((velocity / 100 * c) ** 2) / (c ** 2));

    cube.scale.x = 1 * lengthFactor;

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});

let mouseDown = false;

window.addEventListener('mousedown', (event) => {
    console.log('mousedown');
});

allowCameraRotation.addEventListener('change', () => {
    if (allowCameraRotation.checked) {
        shouldRotate = true; 
    } else {
        shouldRotate = false; 
        cube.rotation.x = 2; 
        cube.rotation.y = 0;
        cube.rotation.z = 2;
    }
});

animate();
