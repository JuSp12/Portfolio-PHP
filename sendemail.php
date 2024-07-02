<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

require __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

// Ładuj zmienne środowiskowe z pliku .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$name = $_POST['fullName'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = $_ENV['SMTP_USERNAME'];;
    $mail->Password = $_ENV['SMTP_PASSWORD'];

    $mail->setFrom($email, $name);
    $mail->addAddress('spital.justyna@gmail.com', 'Justyna');

    $mail->Subject = 'New contact form';
    $mail->Body = "Email: $email\nMessage: $message";

    $mail->send();

    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
