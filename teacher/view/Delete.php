<?php
    include "conn.php";
    $code = $_GET['code'];
    
    $result = mysqli_query($conn, "DROP DATABASE $code");
    $new = new mysqli ('localhost', 'root', '', 'question');
    $sql = mysqli_query($new, "DELETE FROM tanong WHERE CODE = '$code'"); 
    echo"<script>alert('Game Deleted!')</script>";
    echo '<script type="text/javascript">' .'window.location = "EditView.php"' . '</script>';

?>