import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js';

export function createCube() {
    const geometry = new THREE.BoxGeometry();
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Front
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Back
        new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Top
        new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Bottom
        new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Left
        new THREE.MeshBasicMaterial({ color: 0xff00ff })  // Right
    ];

    const cube = new THREE.Mesh(geometry, materials);

    return cube;
}
