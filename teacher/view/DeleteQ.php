<?php
    session_start();
    $code = $_GET['code'];
    $user = $_SESSION['username'];
    include "conn.php";  
    $id = $_GET['ID'];
    $sql = mysqli_query($conn, "DELETE FROM  quiz_question WHERE  ID='$id'"); 
    
    echo '<script type="text/javascript">' . 'window.location = "QuestionTable.php"'.'</script>';

?>