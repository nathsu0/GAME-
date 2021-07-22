<?php
    include "Aconn.php";
    $t1= 'teacher1';
    $p1='teacher1';
    $t2= 'teacher2';
    $p2='teacher2';
    $t3= 'teacher3';
    $p3='teacher3';
    //we create the database with the following command;
    $sql = "CREATE DATABASE IF NOT EXISTS quiz";
    if ($conn1->query($sql) === FALSE){
    return true;
    }

    $tanong = "CREATE TABLE IF NOT EXISTS quiz.accounts(
        ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, username MEDIUMTEXT, passwords VARCHAR(30))";
    if ($conn1->query($tanong) === FALSE){
    echo "Table not created: ".$conn1->error;
    }

        $mysqli = new mysqli('localhost','root','','quiz');
        


    $resulta =mysqli_query($mysqli,"SELECT * from accounts where username = '$t1' and passwords='$p1'");
    if(mysqli_num_rows($resulta)>0){
            echo '<script type="text/javascript">'.'console.log("error");</script>';
    }else{
        $result1 =mysqli_query($mysqli,"INSERT into accounts(username, passwords)
        VALUES('teacher1', 'teacher1')");
    }
    $resultb =mysqli_query($mysqli,"SELECT * from accounts where username = '$t2' and passwords='$p2'");
    if(mysqli_num_rows($resultb)>0){
            echo '<script type="text/javascript">'.'console.log("error");</script>';
    }else{
        $result2 =mysqli_query($mysqli,"INSERT into accounts(username, passwords)
        VALUES('teacher2', 'teacher2')");
    }
    $resultc =mysqli_query($mysqli,"SELECT * from accounts where username = '$t3' and passwords='$p3'");
    if(mysqli_num_rows($resultc)>0){
            echo '<script type="text/javascript">'.'console.log("error");</script>';
    }else{
        $result3 =mysqli_query($mysqli,"INSERT into accounts(username, passwords)
        VALUES('teacher3', 'teacher3')");
    }


    ?>