function rotateObject(object) {
    let mouseDown = false;
    let lastTouchX = 0;
    let lastTouchY = 0;

    // Eventos para mouse (desktop)
    document.addEventListener('mousedown', (event) => {
        mouseDown = true;
    });

    document.addEventListener('mouseup', (event) => {
        mouseDown = false;
    });

    document.addEventListener('mousemove', (event) => {
        if (mouseDown) {
            object.rotation.y += event.movementX * 0.01;
            object.rotation.x += event.movementY * 0.01;
        }
    });

    document.addEventListener('touchstart', (event) => {
        mouseDown = true;
        if (event.touches.length == 1) {
            lastTouchX = event.touches[0].clientX;
            lastTouchY = event.touches[0].clientY;
        }
    });

    document.addEventListener('touchend', () => {
        mouseDown = false;
    });

    document.addEventListener('touchmove', (event) => {
        if (mouseDown && event.touches.length == 1) {
            const deltaX = event.touches[0].clientX - lastTouchX;
            const deltaY = event.touches[0].clientY - lastTouchY;

            object.rotation.y += deltaX * 0.005;
            object.rotation.x += deltaY * 0.005;

            lastTouchX = event.touches[0].clientX;
            lastTouchY = event.touches[0].clientY;
        }
    });
}

export { rotateObject };