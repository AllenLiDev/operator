<?php
session_start();

$hard = $_GET['hard'];
$name = $_GET['name'];
$scores = $_GET['scores'];
$date = $_GET['date'];
if ($hard) {
    $upperCard = 13;
} else {
    $upperCard = 9;
}
// $upperCard = 9;
// $name = 'ABC';
// $scores = 123;
// $date = 123456789012345;

$servername = "localhost";
$username = "headhuntar";
$password = "Group21rocks"; 
$db = "headhunt_operator";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
}

// $sql = "INSERT INTO `TimeAttackScores1-9`(`name`, `scores`, `dateKey`) VALUES ('abc', 123, 123)";
// $sql = "INSERT INTO `TimeAttackScores1-" . $upperCard . "`(`name`, `scores`, `dateKey`) VALUES ('BOB', 123, 123456789012345)";
$sql = "INSERT INTO `TimeAttackScores1-" . $upperCard . "`(`name`, `scores`, `dateKey`) VALUES ('$name', $scores, $date)";
$conn->query($sql);
$conn->close();