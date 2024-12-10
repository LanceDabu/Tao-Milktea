<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = htmlspecialchars($_POST['full_name']);
    $address = htmlspecialchars($_POST['address']);
    $contactNumber = htmlspecialchars($_POST['contact_number']);

    // Add your database saving logic here

    echo "<h1>Thank you, $fullName! Your order has been placed.</h1>";
    echo "<a href='index.html'>Return to Home</a>";
}
?>
