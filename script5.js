// script5.js - For page5.html (Final Surprise)

// Add confetti-like animation effect
window.addEventListener('load', () => {
    const hearts = document.querySelectorAll('.heart');

    hearts.forEach((heart, index) => {
        // Random floating animation
        setInterval(() => {
            const randomY = Math.random() * 20 - 10;
            const randomX = Math.random() * 20 - 10;
            heart.style.transform = `translate(${randomX}px, ${randomY}px) scale(${1 + Math.random() * 0.3})`;
        }, 2000 + index * 200);
    });
});

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createSparkle(e.pageX, e.pageY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    sparkle.style.zIndex = '9999';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add CSS for sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: translateY(0) scale(0);
        }
        50% {
            transform: translateY(-20px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-40px) scale(0);
        }
    }
`;
document.head.appendChild(style);
