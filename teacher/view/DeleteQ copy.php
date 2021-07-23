<?php
    session_start();
    $code = $_GET['code'];
    $conncode =new mysqli ('localhost', 'root', '',$code) or die($conn->error);
    $id = $_GET['ID'];
    $sql = mysqli_query($conncode, "DELETE FROM  quiz WHERE  id='$id'"); 
    
    echo '<script type="text/javascript">' . 'window.location = "EditTable.php?code='.$code.'"'.'</script>';

?>