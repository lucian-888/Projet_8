// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialiser EmailJS une seule fois
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
            user_name: userName,
            user_email: userEmail,
            message: message
        };

        // Envoyer l'email via EmailJS avec les bons paramètres
        emailjs.send('service_a3l9l1x', 'template_8gg5c5y', templateParams)
            .then(function (response) {
                // Détecter la langue du formulaire pour personnaliser le message d'alerte
                const isFrench = form.id === 'contact-form-fr';
                alert(isFrench ? 'Message envoyé avec succès !' : 'Message sent successfully!');
                form.reset();
            }, function (error) {
                const isFrench = form.id === 'contact-form-fr';
                alert(isFrench ? 'Échec de l\'envoi du message. Veuillez réessayer plus tard.' : 'Failed to send message. Please try again later.');
                console.error('EmailJS Error:', error);
            });
    }

    // Attacher l'événement submit aux deux formulaires
    const forms = document.querySelectorAll('#contact-form-fr, #contact-form-en');
    forms.forEach(form => {
        form.addEventListener('submit', sendForm);
    });

    // Gestion du changement de langue
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
    });
});
