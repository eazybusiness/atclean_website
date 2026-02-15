<?php
/**
 * Contact form endpoint for AT Clean website.
 * Receives form fields and sends them via email to info@atclean.de.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

// Configuration
$recipient = 'info@atclean.de';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Methode nicht erlaubt.']);
    exit;
}

// Basic rate limiting
$rateLimitFile = sys_get_temp_dir() . '/atclean_contact_' . md5($_SERVER['REMOTE_ADDR'] ?? 'unknown');
if (file_exists($rateLimitFile) && (time() - filemtime($rateLimitFile)) < 30) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Bitte warten Sie 30 Sekunden zwischen Anfragen.']);
    exit;
}
touch($rateLimitFile);

// Sanitize input
$name = trim(strip_tags($_POST['name'] ?? ''));
$email = trim(strip_tags($_POST['email'] ?? ''));
$phone = trim(strip_tags($_POST['phone'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

// Validate
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.']);
    exit;
}

// Build email
$emailSubject = "Kontaktanfrage von {$name}";

// Reason: IONOS shared hosting rejects custom From headers; omit From and -f flag
$headers = "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body = "Neue Kontaktanfrage über die Website\r\n";
$body .= "====================================\r\n\r\n";
$body .= "Name: {$name}\r\n";
$body .= "E-Mail: {$email}\r\n";
$body .= "Telefon: " . ($phone ?: 'nicht angegeben') . "\r\n\r\n";
$body .= "Nachricht:\r\n{$message}\r\n\r\n";
$body .= "---\r\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unbekannt') . "\r\n";
$body .= "Datum: " . date('d.m.Y H:i:s') . "\r\n";

$sent = mail($recipient, $emailSubject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Ihre Nachricht wurde erfolgreich gesendet.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.']);
}
