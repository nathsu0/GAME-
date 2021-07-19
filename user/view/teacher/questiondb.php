<?php
    include 'conn.php';
    //we create the database with the following command;
    $sql = "CREATE DATABASE IF NOT EXISTS question";
    if ($conn->query($sql) === FALSE){
    return true;
    }

    $tanong = "CREATE TABLE IF NOT EXISTS question.tanong(
        ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, CODE MEDIUMTEXT, USER MEDIUMTEXT, SUBJ VARCHAR(30),
        GAMENAME VARCHAR(60) )";
    if ($conn->query($tanong) === FALSE){
    echo "Table not created: ".$conn->error;
    }
    ?>
?>