// Simple JavaScript for quality selection
document.querySelectorAll('.quality-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons in this quality selector
        this.parentElement.querySelectorAll('.quality-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add active class to clicked button
        this.classList.add('active');
    });
});

// Search functionality would go here (would require backend integration)
document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value;
    alert(Searching for: ${query}\n(Backend integration required));
});