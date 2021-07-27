<?php
    $conn = new mysqli ('localhost', 'root', '') or die($conn->error);
    $quiz = new mysqli ('localhost', 'root', '','quiz') or die($conn->error);
    $ques = new mysqli ('localhost', 'root', '','question') or die($conn->error);
?>