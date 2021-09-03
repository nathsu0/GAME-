<?php 
include 'teacher/conn.php';
    $sql = "CREATE DATABASE IF NOT EXISTS GAME"; 
    if ($conn1->query($sql) === TRUE) {
    echo '<script type="text/javascript">' .
    'console.log("Database created successfully");</script>';
    } else {
    echo '<script type="text/javascript">' .
    'console.log("Error creating database");</script>'. $conn1->error;
    }

    

    $user = "CREATE TABLE IF NOT EXISTS user(
        ID INT AUTO_INCREMENT, 
        username VARCHAR(30), 
        passwords VARCHAR(30), 
        roles VARCHAR(30),
        PRIMARY KEY(ID)
        )";
if ($conn->query($user) === FALSE){
    echo "Table not created: ".$conn->error;
    }


    $t1= 'teacher1';
    $resulta =mysqli_query($conn,"SELECT * from user where username = '$t1' and passwords='$t1'");
    if(mysqli_num_rows($resulta)>0){
            echo '<script type="text/javascript">'.'console.log("error");</script>';
    }else{
        $result1 =mysqli_query($conn,"INSERT into user(username, passwords)
        VALUES('teacher1', 'teacher1')");
    }

    $quiz = "CREATE TABLE IF NOT EXISTS quiz(
        ID INT AUTO_INCREMENT, 
        userid VARCHAR(15), 
        gamename MEDIUMTEXT,
        gamecode VARCHAR(15),
        gamesubject MEDIUMTEXT,
        PRIMARY KEY(ID)
        )";

    $quiz_question = "CREATE TABLE IF NOT EXISTS quiz_question(
        ID INT AUTO_INCREMENT, 
        gamecode VARCHAR(15), 
        question MEDIUMTEXT,
        A MEDIUMTEXT,
        B MEDIUMTEXT,
        C MEDIUMTEXT,
        D MEDIUMTEXT,
        answer VARCHAR(3),
        PRIMARY KEY(ID)
        )";

    $quiz_attemp = "CREATE TABLE IF NOT EXISTS quiz_attemp(
        ID INT AUTO_INCREMENT, 
        userid VARCHAR(15), 
        quiz_id VARCHAR(15),
        score int(4),
        avatar VARCHAR(60),
        PRIMARY KEY(ID)
        )";
    
    $quiz_attemp_data = "CREATE TABLE IF NOT EXISTS quiz_attemp_data(
        ID INT AUTO_INCREMENT, 
        userid VARCHAR(15), 
        quiz_attemp_id VARCHAR(15),
        question_id VARCHAR(15),
        answer VARCHAR(15),
        remark VARCHAR(15),
        PRIMARY KEY(ID)
        )";


    if ($conn->query($quiz) === FALSE){
        echo "Table not created: ".$conn->error;
        }

        if ($conn->query($quiz_question ) === FALSE){
            echo "Table not created: ".$conn->error;
            }
                if ($conn->query($quiz_attemp ) === FALSE){
                    echo "Table not created: ".$conn->error;
                    }

                    if ($conn->query($quiz_attemp_data) === FALSE){
                        echo "Table not created: ".$conn->error;
                        }

?>