<?php
    if(isset($_POST['awit'])){
    $awit = $_POST['awit'];
    $_SESSION['answer'] = $awit
    echo '<script type="text/javascript">' .
    'console.log("AWIT"'$awit');</script>';
    echo "AWIT SER:  ".$awit;
    }
?>
