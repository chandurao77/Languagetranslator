<?php
$servername = "localhost";
$username = "user";
$password = "";

// Create connection
$conn = mysqli_connect("localhost", "root", "", "test");
$user = $_GET['email']
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$username = $_POST('email')
$password = $_POST('password')

echo "$echo, $password"
?>