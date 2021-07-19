<?php
    session_start();
    $code=$_SESSION['code'];
    $con1=new mysqli('localhost','root','',$code) or die($con1->error);
?>