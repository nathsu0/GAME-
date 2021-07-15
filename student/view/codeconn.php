<?php
    session_start();
    $code=$_SESSION['code'];
    $conn=new mysqli('localhost','root','',$code);
?>