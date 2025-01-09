document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to (1 month from now)
    const countDownDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(interval);
            document.querySelector('.countdown-container').innerHTML = `
                <div class="reveal-message">
                    <h2 class="glowing-text">The Future Is Here</h2>
                    <p>Introducing our revolutionary AI technology...</p>
                </div>
            `;
        }
    }

    // Update the countdown every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
});

// Handle form submission
document.getElementById('notify-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    // Add your email collection logic here
    alert('Thank you for your interest! We\'ll notify you when we launch.');
}); 