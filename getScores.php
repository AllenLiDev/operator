<?php
session_start();

// retrieve data from ajax request

$servername = "localhost";
$username = "headhuntar";
$password = "Group21rocks"; 
$db = "headhunt_operator";

// connects to database
$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
}

$time9sql = "SELECT * FROM `TimeAttackScores1-9` ORDER BY `score` ASC LIMIT 5";
$time13sql = "SELECT * FROM `TimeAttackScores1-13` ORDER BY `score` ASC LIMIT 5";

$namesEasy = array();
$scoresEasy = array();
$namesHard = array();
$scoresHard = array();

$time9 = $conn->query($time9sql);
$time13 = $conn->query($time13sql);

while ($row = $time9->fetch_assoc()) {
    global $namesEasy;
    global $scoresEasy;
    array_push($namesEasy, $row["name"]);
    array_push($scoresEasy, $row["score"]);
}

while ($row13 = $time13->fetch_assoc()) {
    global $namesHard;
    global $scoresHard;
    array_push($namesHard, $row13["name"]);
    array_push($scoresHard, $row13["score"]);
}

echo json_encode(array("namesEasy"=>$namesEasy,
                        "scoresEasy"=>$scoresEasy,
                        "namesHard"=>$namesHard,
                        "scoresHard"=>$scoresHard));
?>