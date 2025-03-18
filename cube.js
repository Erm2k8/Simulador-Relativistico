import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js';

export function createCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
        new THREE.MeshPhongMaterial({ color: 0xff0000 }), // Frente
        new THREE.MeshPhongMaterial({ color: 0x00ff00 }), // Trás
        new THREE.MeshPhongMaterial({ color: 0x0000ff }), // Topo
        new THREE.MeshPhongMaterial({ color: 0xffff00 }), // Base
        new THREE.MeshPhongMaterial({ color: 0x00ffff }), // Esquerda
        new THREE.MeshPhongMaterial({ color: 0xff00ff })  // Direita
    ];

    const cube = new THREE.Mesh(geometry, materials);
    return cube;
}