// script.js - For index.html (UPDATED LOGIC)

function handleYes() {
    // Show the modal with custom text (doesn't proceed)
    document.getElementById('yesModal').style.display = 'block';
}

function handleNo() {
    // Proceed to page 2
    window.location.href = 'page2.html';
}

function closeModal() {
    // Close the modal and go back
    document.getElementById('yesModal').style.display = 'none';
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('yesModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
