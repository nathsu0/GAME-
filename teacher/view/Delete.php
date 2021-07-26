<?php
    include "conn.php";
    $code = $_GET['code'];
    
    $result = mysqli_query($conn, "DROP DATABASE $code");
    $new = $ques;
    $sql = mysqli_query($new, "DELETE FROM tanong WHERE CODE = '$code'"); 
    echo '<script type="text/javascript">' .'window.location = "EditView.php"' . '</script>';

?>