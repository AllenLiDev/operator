<?php
session_start();
?>

        <?php
        // $set = $_GET['set'];
        $set = "easy";
        if ($set == "easy") {
            $upperCard = 9;
        } else {
            $upperCard = 13;
        }
        // $difficulty = $_GET['difficulty'];
        $difficulty = 5;
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
        // $sql = "SELECT * FROM `1-9Lv1` WHERE `rowNo` = 5";
        // $sql = "SELECT * FROM `1-9Lv" . $difficulty . "` WHERE `rowNo` = 5";
        $sql = "SELECT * FROM `1-" . $upperCard . "Lv" . $difficulty . "` WHERE `rowNo` = " . $rowNum;
        $problem = $conn->query($sql);
        $row = $problem->fetch_assoc();
        // echo $set;
        // echo $difficulty;
        // echo $rowNum;
        // echo $row["rowNo"];
        // echo $row["card1"];
        // echo $row["card2"];
        // echo $row["card3"];
        // echo $row["card4"];
        echo json_encode( array( "card1"=>$row["card1"], "card2"=>$row["card2"], "card3"=>$row["card3"], "card4"=>$row["card4"]));
        ?>
