document.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to background
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        document.querySelector('.ai-background').style.transform = 
            `translate(${moveX}px, ${moveY}px)`;
    });
}); 