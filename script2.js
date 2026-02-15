// script2.js - For page2.html (UPDATED LOGIC)

function handleYes() {
    // Show the YES modal with custom message (will proceed)
    document.getElementById('yesModal').style.display = 'block';
}

function handleNo() {
    // Show the NO modal with go back button (doesn't proceed)
    document.getElementById('noModal').style.display = 'block';
}

function continueToNext() {
    // Proceed to page 3 (gallery) after YES
    window.location.href = 'page3.html';
}

function goBack() {
    // Close the NO modal and go back
    document.getElementById('noModal').style.display = 'none';
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const yesModal = document.getElementById('yesModal');
    const noModal = document.getElementById('noModal');

    if (event.target == yesModal) {
        yesModal.style.display = 'none';
    }
    if (event.target == noModal) {
        noModal.style.display = 'none';
    }
}
