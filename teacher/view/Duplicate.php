<?php
      session_start();
            
      include 'conn.php';
      include 'random.php';
      include 'conn.php';
      $db =$ques;

      $user = $_SESSION['username'];
      $eee="";

      if(isset($_POST['done'])){
      $mam = $_POST['dcode'];
      $cooode = $_POST['ccode'];
      
      if($conn->select_db($mam)=== false){
        $eee = "Please enter a valid code.";
       
      }else{
       // echo '<script type="text/javascript">'.'console.log("Database exist");</script>';
        // Create database
        $sql = "CREATE DATABASE $cooode"; 
        if ($conn->query($sql) === TRUE) {
          echo '<script type="text/javascript">' .
          'console.log("Database created successfully");</script>';
        } else {
          echo '<script type="text/javascript">' .
          'console.log(""Error creating database: "");</script>'. $conn->error;
          
        }
       
        $_SESSION['decode'] = $mam;
        $_SESSION['cccode'] = $cooode;
        
       echo '<script type="text/javascript">' .'window.location = "Dcode.php"' . '</script>';
      }
    }
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Duplicate Game</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/Duplicate.css?v=<?php echo time(); ?>">
  </head>
  <body>
    <div class="Main container">
        <!-----CONTENT IN CONTAINER-->
        <div class="Box containermt-5 p-0">
            <!---NAVIGATION BAR START-->
          <?php 

include '../includes/navbar.php';?>
 <!----NAVIGATION BAR END-->
            <form method='POST' >
            <!----CONTENT START------->
            <div class="blocks container">
            <h1>Enter the code of the game to be duplicated: </h1>
            
            <div class="code_edit container">
            <label style="color:white"><?=$eee?></label><br>
                <input type="text"class="code" name="dcode"></input>
            </div>
             <br>
            
            <div class="butt container">
                  <a href="Main_menu.php" type="button" class="button">
                    Back
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                  </a>
                <button type="submit" name='done' class="button">
                  Proceed
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </button>
                <input type="hidden" name='ccode' value= <?php echo $code?> ></input>
            </div> 
        </div>
    </div>
  </div>
    </from>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../js/EditCode.js"></script>
  </body>
</html>