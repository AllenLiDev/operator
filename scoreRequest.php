<?php
session_start();


$difficulty = $_GET['difficulty'];
$hard = $_GET['hard'];
if ($hard) {
    $upperCard = 13;
} else {
    $upperCard = 9;
}

$servername = "localhost";
$username = "headhuntar";
$password = "Group21rocks"; 
$db = "headhunt_operator"; 
$conn = new mysqli($servername, $username, $password, $db);
if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
}
$sql = "SELECT name, score
    FROM TimeAttackScores`1-" . $upperCard . "`
    ORDER BY score DESC
    LIMIT 5";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc()){
    printf ("%s (%s)\n", $row["name"], $row["score"]);
}
?>