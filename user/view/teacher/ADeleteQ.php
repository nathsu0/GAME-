<?php
    session_start();
    $code = $_GET['code'];
    $user1 =$_SESSION['teach'];
    include "conn.php";  
    $id = $_GET['ID'];
    $sql = mysqli_query($conn, "DELETE FROM  quiz_question WHERE  ID='$id'"); 
    
    echo '<script type="text/javascript">' . 'window.location = "AQuestionTable.php"'.'</script>';

?>