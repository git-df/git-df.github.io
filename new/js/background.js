function createCircle() {
    let circleMinSize = 400;
    let circleMaxSize = 600;
    let circleSpeed = 0.7;

    const circle = document.createElement('div');
    circle.classList.add('circle');

    const size = Math.floor(Math.random() * (circleMaxSize-circleMinSize)) + circleMinSize;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    circle.style.filter = `brightness(${Math.floor(Math.random() * 50) + 40}%)`;

    circle.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    circle.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;

    document.body.appendChild(circle);

    const speedX = (Math.random() * 2 - 1) * circleSpeed;
    const speedY = (Math.random() * 2 - 1) * circleSpeed;

    function animate() {
        const currentLeft = parseFloat(circle.style.left);
        const currentTop = parseFloat(circle.style.top);

        let newLeft = currentLeft + speedX;
        let newTop = currentTop + speedY;

        if (newLeft < -size) newLeft = window.innerWidth;
        if (newLeft > window.innerWidth) newLeft = -size;
        if (newTop < -size) newTop = window.innerHeight;
        if (newTop > window.innerHeight) newTop = -size;

        circle.style.left = `${newLeft}px`;
        circle.style.top = `${newTop}px`;

        requestAnimationFrame(animate);
    }
    animate();
}

for (let i = 0; i < 10; i++) {
    createCircle();
}