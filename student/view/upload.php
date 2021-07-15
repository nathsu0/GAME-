<?php
    if(isset($_POST['answer'])){
    $awit = $_POST['answer'];
    $_SESSION['answer'] = $awit
    echo '<script type="text/javascript">' .
    'console.log("AWIT"'$awit');</script>';
    echo "AWIT SER:  ".$awit;
    }
?>
