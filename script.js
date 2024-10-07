document.getElementById('toggle-language').addEventListener('click', function() {
    // Toggle visibility of French and English sections
    const frElements = document.querySelectorAll('.lang-fr');
    const enElements = document.querySelectorAll('.lang-en');

    frElements.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });

    enElements.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });

    // Change button text based on current language
    this.textContent = this.textContent === 'English' ? 'Français' : 'English';

    // Change the developer title
    const frDevTitle = document.querySelector('header p.lang-fr');
    const enDevTitle = document.querySelector('header p.lang-en');
    if (frDevTitle && enDevTitle) {
        frDevTitle.style.display = frDevTitle.style.display === 'none' ? 'block' : 'none';
        enDevTitle.style.display = enDevTitle.style.display === 'none' ? 'block' : 'none';
    }
});


// Add an event listener for the 'submit' event on the form with id 'contact-form'
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Use EmailJS to send the form data
    // 'this' refers to the form element
    emailjs.sendForm('service_a3l9l1x', 'template_8gg5c5y', this)
        .then(function(response) {
            // This function runs if the email is sent successfully
            console.log('SUCCESS!', response.status, response.text);
            // Show a success message to the user
            alert('Message sent successfully!');
            // Reset the form fields after successful submission
            document.getElementById('contact-form').reset();
        }, function(error) {
            // This function runs if there's an error in sending the email
            console.log('FAILED...', error);
            // Show an error message to the user
            alert('Failed to send message. Please try again.');
        });
  });
  
