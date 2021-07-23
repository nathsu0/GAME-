<?php
    include "Aconn.php";
    $t1= 'teacher1';
    $p1='teacher1';
    $t2= 'teacher2';
    $p2='teacher2';
    $t3= 'teacher3';
    $p3='teacher3';
    $sql = "CREATE DATABASE IF NOT EXISTS quiz";
    if ($conn->query($sql) === FALSE){
    return true;
    }

    $tanong = "CREATE TABLE IF NOT EXISTS quiz.accounts(
        ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, username MEDIUMTEXT, passwords VARCHAR(30))";
    if ($conn->query($tanong) === FALSE){
    echo "Table not created: ".$conn->error;
    }

        include "Aquizconn.php";
        


    $resulta =mysqli_query($quiz,"SELECT * from accounts where username = '$t1' and passwords='$p1'");
    if(mysqli_num_rows($resulta)>0){
            echo '<script type="text/javascript">'.'console.log("error");</script>';
    }else{
        $result1 =mysqli_query($quiz,"INSERT into accounts(username, passwords)
        VALUES('teacher1', 'teacher1')");
    }
    $resultb =mysqli_query($quiz,"SELECT * from accounts where username = '$t2' and passwords='$p2'");
    if(mysqli_num_rows($resultb)>0){
            echo '<script type="text/javascript">'.'console.log("error");</script>';
    }else{
        $result2 =mysqli_query($quiz,"INSERT into accounts(username, passwords)
        VALUES('teacher2', 'teacher2')");
    }
    $resultc =mysqli_query($quiz,"SELECT * from accounts where username = '$t3' and passwords='$p3'");
    if(mysqli_num_rows($resultc)>0){
            echo '<script type="text/javascript">'.'console.log("error");</script>';
    }else{
        $result3 =mysqli_query($quiz,"INSERT into accounts(username, passwords)
        VALUES('teacher3', 'teacher3')");
    }


    ?>