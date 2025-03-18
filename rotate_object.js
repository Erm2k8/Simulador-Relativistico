export function setupCameraRotation(camera, allowCameraRotationCheckbox) {
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    // Função para rotacionar a câmera
    function rotateCamera(event) {
        if (!allowCameraRotationCheckbox.checked) return; // Sai se o checkbox não estiver ativo

        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;

        camera.rotation.y += deltaX * 0.005;
        camera.rotation.x += deltaY * 0.005;

        previousMousePosition.x = event.clientX;
        previousMousePosition.y = event.clientY;
    }

    // Eventos de mouse
    document.addEventListener('mousedown', (event) => {
        if (allowCameraRotationCheckbox.checked) {
            isDragging = true;
            previousMousePosition.x = event.clientX;
            previousMousePosition.y = event.clientY;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging && allowCameraRotationCheckbox.checked) {
            rotateCamera(event);
        }
    });

    // Eventos de toque
    document.addEventListener('touchstart', (event) => {
        if (allowCameraRotationCheckbox.checked && event.touches.length === 1) {
            isDragging = true;
            previousMousePosition.x = event.touches[0].clientX;
            previousMousePosition.y = event.touches[0].clientY;
        }
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });

    document.addEventListener('touchmove', (event) => {
        if (isDragging && allowCameraRotationCheckbox.checked && event.touches.length === 1) {
            rotateCamera(event.touches[0]);
        }
    });
}