<?php
session_start();

// retrieve data from ajax request
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

// connects to database
$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
}

// chooses table based on $upperCard value and $difficulty and gets the number of rows
$sql = "SELECT * FROM `1-" . $upperCard . "Lv" . $difficulty . "`";
$result = $conn->query($sql);
$randUpperBound = $result->num_rows;

// random row number from table
$rowNum = rand(1, $randUpperBound);
$sql = "SELECT * FROM `1-" . $upperCard . "Lv" . $difficulty . "` WHERE `rowNo` = " . $rowNum;
$problem = $conn->query($sql);
$row = $problem->fetch_assoc();

// echoes json with card data
echo json_encode( array( "card1"=>$row["card1"], "card2"=>$row["card2"], "card3"=>$row["card3"], "card4"=>$row["card4"]));
?>
