import keys from "/keys/keys.js";
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm(keys.service, keys.template, this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...'),error;
            });
    });
}