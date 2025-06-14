document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('customForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the form data to your server
            // For demo purposes, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            
            // In a real implementation, you would use fetch() or similar to submit the form
            // Example:
            // const formData = new FormData(contactForm);
            // fetch('your-form-handler-endpoint', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Thank you for your message!');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('There was an error submitting your form. Please try again.');
            // });
        });
    }
});