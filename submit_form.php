<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form fields and sanitize the data
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Validate the email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Here you would typically send an email or store the data in a database

        // For demonstration purposes, we'll just show a success message
        echo "Thank you for your message, $name! We'll get back to you at $email.";
    } else {
        // Invalid email, show an error message
        echo "Invalid email address. Please try again.";
    }
}
?>