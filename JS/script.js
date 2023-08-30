// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the form element
    const form = document.querySelector('form');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the values from form fields using their IDs
        const fullName = form.querySelector('#fname').value;
        const birthDate = form.querySelector('#birthday').value;
        const gender = form.querySelector('input[name="fav_language"]:checked').value;
        const message = form.querySelector('#w3review').value;

        // Check if any required field is empty
        if (fullName === '' || birthDate === '' || gender === null || message === '') {
            alert('Please fill in all required fields.');
            return; // Stop form submission
        }

        // Update the message-output elements with the values
        document.querySelector('#output-nama').textContent = fullName;
        document.querySelector('#output-tanggal').textContent = birthDate;
        document.querySelector('#output-jenis-kelamin').textContent = gender;
        document.querySelector('#output-pesan').textContent = message;
    });
});
