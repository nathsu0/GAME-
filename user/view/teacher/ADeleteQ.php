<?php
    session_start();
    $code = $_GET['code'];
    $user1 =$_SESSION['teach'];
    include "Aconncode.php";  
    $id = $_GET['ID'];
    $sql = mysqli_query($codeconn, "DELETE FROM  quiz WHERE  id='$id'"); 
    
    echo '<script type="text/javascript">' . 'window.location = "AQuestionTable.php"'.'</script>';

?>