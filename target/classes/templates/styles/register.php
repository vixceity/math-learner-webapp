<?php
session_start();

$host = "localhost";
$user = "root";
$pass = "";
$db = "project";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$hashed = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $email, $hashed);

if ($stmt->execute()) {
    $_SESSION['username'] = $username;
    header("Location: home.php");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$conn->close();
?>
