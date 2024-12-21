function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation for empty fields
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        return false;
    }

    // Email validation (simple format check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    // If validation passes
    alert('Form submitted successfully!');
    return true; // You can add further processing here like AJAX to send the form data
}