<?php
// Login handler (draft).
//
// Expects a POST with `email` and `password`, and checks them against a `users`
// table with these columns (this repo does not ship a schema or a registration
// handler yet, so this is the assumed layout):
//
//   CREATE TABLE users (
//     id            INT AUTO_INCREMENT PRIMARY KEY,
//     email         VARCHAR(255) NOT NULL UNIQUE,
//     password_hash VARCHAR(255) NOT NULL   -- from password_hash(), never plain text
//   );
//
// Database settings come from environment variables; the defaults match a
// local MySQL development setup (database "test").
//   DB_DSN   e.g. mysql:host=localhost;dbname=test;charset=utf8mb4
//   DB_USER  default: root
//   DB_PASS  default: (empty)
//
// NOTE: login.html is not connected to this file yet (its form has no
// action/method and uses a `username` field instead of `email`).

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Method not allowed');
}

$email    = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if ($email === '' || $password === '') {
    http_response_code(400);
    exit('Email and password are required');
}

try {
    $pdo = new PDO(
        getenv('DB_DSN') ?: 'mysql:host=localhost;dbname=test;charset=utf8mb4',
        getenv('DB_USER') !== false ? getenv('DB_USER') : 'root',
        getenv('DB_PASS') !== false ? getenv('DB_PASS') : '',
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $stmt = $pdo->prepare('SELECT password_hash FROM users WHERE email = ?');
    $stmt->execute([$email]);
    $hash = $stmt->fetchColumn();
} catch (Throwable $e) {
    // Log the real reason server-side; never show connection details to the user.
    error_log('login_check.php: ' . $e->getMessage());
    http_response_code(500);
    exit('Login is temporarily unavailable');
}

// Same message for "no such user" and "wrong password" so accounts can't be probed.
if ($hash === false || !password_verify($password, $hash)) {
    http_response_code(401);
    exit('Invalid email or password');
}

session_start();
session_regenerate_id(true);
$_SESSION['email'] = $email;

header('Location: Welcome.php');
exit;
