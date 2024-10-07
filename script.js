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


// script.js

document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("8HRqXxpchv2ROza4w");

    // Fonction pour envoyer le formulaire
    function sendForm(event) {
        event.preventDefault();
        const form = event.target;

        // Récupérer les valeurs du formulaire
        const userName = form.querySelector('input[name="user_name"]').value;
        const userEmail = form.querySelector('input[name="user_email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        // Préparer les paramètres pour EmailJS
        const templateParams = {
            from_name: userName,
            from_email: userEmail,
            message: message
        };

        // Envoyer l'email via EmailJS
        emailjs.send('service_a3l9l1x', 'template_8gg5c5y', templateParams)
            .then(function (response) {
                alert('Message envoyé avec succès !');
                form.reset();
            }, function (error) {
                alert('Échec de l\'envoi du message. Veuillez réessayer plus tard.');
                console.error('EmailJS Error:', error);
            });
    }

    // Attacher l'événement submit aux deux formulaires
    const forms = document.querySelectorAll('#contact-form-fr, #contact-form-en');
    forms.forEach(form => {
        form.addEventListener('submit', sendForm);
    });
});

