// JavaScript can be added here to add interactivity

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Example: You can add form validation or submission handling here
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Example: Basic validation (you can extend this)
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // Example: Sending data to a server (you would need server-side code for this)
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Message sent!');
        form.reset();
    });
});
