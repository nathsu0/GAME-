<?php
    session_start();
    $count=$_SESSION['count'];
    $player=$_SESSION['player'];
    if(isset($_POST['awit'])){
        $awit = $_POST['awit'];
    $result="UPDATE SET scores N.$count='$awit' WHERE NAMES='$player'";
    if ($conn->query($sql) === TRUE) {
        echo '<script type="text/javascript">'.
        'console.log("Insert your form record successfully");</script>';
        
      } 
    
    $_SESSION['answer'] = $awit;
    }
?>
