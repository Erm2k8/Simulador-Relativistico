// background.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js';

export function createStars(scene, numStars) {
    const stars = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < numStars; i++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;

        positions.push(x, y, z);
    }

    stars.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.5 });

    const starField = new THREE.Points(stars, material);
    scene.add(starField);

    return starField;
}

export function animateStars(starField, velocity = 1) {
    starField.rotation.y += 0.001 * velocity;
}
