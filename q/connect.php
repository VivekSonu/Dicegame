<?php
 $player1 = $_POST['player1'];
 $player2 = $_POST['player2'];
 //$id = $_POST['id'];
 $conn = new mysqli('localhost' , 'root','','dicegame');
 if($conn->connect_error){
     echo "$conn->connect_error";
     die("Connection Failed :  ". $conn->connect_error);
 } else {
     $stmt = $conn->prepare("insert into data(player1, player2) values(?, ?)");
     $stmt->bind_param("ss", $player1, $player2);
     $execval = $stmt->execute();
     echo $execval;
     echo "registration successfull";
     $stmt->close();
     $conn->close();
 }

?>