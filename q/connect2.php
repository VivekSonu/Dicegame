<?php
 $winner = $_POST['winner'];
 $p1     = $_POST['p1'];
 $p2     = $_POST['p2'];
 $conn = new mysqli('localhost' , 'root','','dicegame');
 if($conn->connect_error){
     echo "$conn->connect_error";
     die("Connection Failed :  ". $conn->connect_error);
 } else {
     $stmt = $conn->prepare("insert into data(player1, player2, Winner) values(?, ?, ?)");
     $stmt->bind_param("sss", $p1 , $p2 , $winner);
     $execval = $stmt->execute();
     echo $execval;
     echo "registration successfull";
     $stmt->close();
     $conn->close();
 }

?>