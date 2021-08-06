<?php
    session_start();
    $code = $_GET['code'];
    include 'conn.php';
    $id = $_GET['ID'];
    $sql = mysqli_query($conn, "DELETE FROM  quiz_question WHERE  ID='$id'"); 
    
    echo '<script type="text/javascript">' . 'window.location = "EditTable.php?code='.$code.'"'.'</script>';

?>