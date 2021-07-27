<?php
    include "Aconn.php";
    session_start();
    $code = $_GET['code'];
    $user1 =$_SESSION['teach'];
    
    $result = mysqli_query($conn, "DROP DATABASE $code");
    $sql = mysqli_query($ques, "DELETE FROM tanong WHERE CODE = '$code'"); 
    echo '<script type="text/javascript">' .'window.location = "AEditView.php"' . '</script>';

?>