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

$sql = "SELECT * FROM `1-" . $upperCard . "Lv" . $difficulty . "`";
$result = $conn->query($sql);
$randUpperBound = $result->num_rows;

$rowNum = rand(1, $randUpperBound);
$sql = "SELECT * FROM `1-" . $upperCard . "Lv" . $difficulty . "` WHERE `rowNo` = " . $rowNum;
$problem = $conn->query($sql);
$row = $problem->fetch_assoc();

echo json_encode( array( "card1"=>$row["card1"], "card2"=>$row["card2"], "card3"=>$row["card3"], "card4"=>$row["card4"]));
?>
