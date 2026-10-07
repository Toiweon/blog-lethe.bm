// LETHЕ — blog simple
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegación suave
    document.querySelectorAll('.nav a').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Hover en posts
    document.querySelectorAll('.post').forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(74, 48, 79, 0.05)';
        });
        post.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
    
});
