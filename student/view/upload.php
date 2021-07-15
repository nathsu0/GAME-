<?php
    session_start();
    if(isset($_POST['awit'])){
    $awit = $_POST['awit'];
    $_SESSION['answer'] = $awit;
        echo $awit;
    }
?>
