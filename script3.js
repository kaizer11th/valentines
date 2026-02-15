// script3.js - For page3.html (Gallery)

function goToLetter() {
    // Redirect to letter page
    window.location.href = 'page4.html';
}

// Add smooth entrance animations
window.addEventListener('load', () => {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
