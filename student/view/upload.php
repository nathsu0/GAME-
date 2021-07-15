<?php
    if(isset($_POST['awit'])){
    $awit = $_POST['awit'];
    $_SESSION['answer'] = $awit
    echo '<script type="text/javascript">' .
    'console.log('$awit');</script>';
    echo $awit;
    }
?>
