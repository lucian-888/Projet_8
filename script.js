document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS
    emailjs.init("8HRqXxpchv2ROza4w");

    // Function to send the form
    function sendForm(event) {
        event.preventDefault();
        const form = event.target;

        // Get form values
        const userName = form.querySelector('input[name="user_name"]').value.trim();
        const userEmail = form.querySelector('input[name="user_email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        // Prepare EmailJS parameters
        const templateParams = {
            user_name: userName,
            user_email: userEmail,
            message: message
        };

        // Check if all required fields have values
        if (userName && userEmail && message) {
            // Send the email via EmailJS
            emailjs.send('service_a3l9l1x', 'template_8gg5c5y', templateParams)
                .then(function (response) {
                    const isFrench = form.id === 'contact-form-fr';
                    alert(isFrench ? 'Message envoyé avec succès !' : 'Message sent successfully!');
                    form.reset(); // Clear form after successful submission
                }, function (error) {
                    const isFrench = form.id === 'contact-form-fr';
                    alert(isFrench ? 'Échec de l\'envoi du message. Veuillez réessayer plus tard.' : 'Failed to send message. Please try again later.');
                    console.error('EmailJS Error:', error);
                });
        } else {
            alert('Please fill in all fields before submitting.');
        }
    }

    // Attach the submit event to both forms
    const forms = document.querySelectorAll('#contact-form-fr, #contact-form-en');
    forms.forEach(form => {
        form.addEventListener('submit', sendForm);
    });

    // Language toggle functionality
    document.getElementById('toggle-language').addEventListener('click', function() {
        const frElements = document.querySelectorAll('.lang-fr');
        const enElements = document.querySelectorAll('.lang-en');

        frElements.forEach(element => {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        });

        enElements.forEach(element => {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        });

        // Toggle button text
        this.textContent = this.textContent === 'English' ? 'Français' : 'English';
    });
});

function setActiveLink(clickedLink) {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.header nav ul li a');

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove("active"));
    
    // Add active class to clicked link
    clickedLink.classList.add("active");
}

// Add this event listener to each navigation link
document.querySelectorAll('.header nav ul li a').forEach(link => {
    link.addEventListener("click", function(event) {
        setActiveLink(this);
    });
});
