
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
