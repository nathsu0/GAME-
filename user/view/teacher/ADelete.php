<?php
    include "conn.php";
    session_start();
    $code = $_GET['code'];
    $user1 =$_SESSION['teach'];
    
    $sql = mysqli_query($conn, "DELETE FROM  quiz WHERE  gamecode='$code'"); 
    $del = mysqli_query($conn, "DELETE FROM  quiz_question WHERE  gamecode='$code'"); 
    echo '<script type="text/javascript">' .'window.location = "AEditView.php"' . '</script>';

?>