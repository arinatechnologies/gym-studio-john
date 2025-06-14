// Service card interaction effects
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    // Add click event to each card's button
    const button = card.querySelector('.learn-more-btn');
    
    button.addEventListener('click', function() {
      // In a real implementation, this would navigate to service details
      console.log('Learn more clicked for: ' + card.querySelector('h3').textContent);
    });
    
    // Optional: Add keyboard accessibility
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        button.click();
      }
    });
  });
});