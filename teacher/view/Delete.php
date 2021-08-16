<?php
    include "conn.php";
    session_start();
    $code = $_GET['code'];
    $aw = mysqli_query($conn,"SELECT * from quiz WHERE gamecode='$code'");

    $sql = mysqli_query($conn, "DELETE FROM  quiz WHERE  gamecode='$code'"); 
    $del = mysqli_query($conn, "DELETE FROM  quiz_question WHERE  gamecode='$code'"); 
    $row = mysqli_fetch_assoc($aw);
    $tw = $row['ID'];
    $nye = mysqli_query($conn,"DELETE FROM quiz_attemp where quiz_id = '$tw'");

    echo '<script type="text/javascript">' .'window.location = "EditView.php"' . '</script>';

?>