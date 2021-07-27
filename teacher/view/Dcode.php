<?php
      
    session_start();
    $user= $_SESSION['username'];
    $decode = $_SESSION['decode'];
    $code = $_SESSION['cccode'];
    include 'conn.php';
    include 'conncode.php';
    $tables = $conn->query( "SHOW TABLES FROM $decode" ) or die( $conn->error );

    while( $table = $tables->fetch_array() ): $TABLE = $table[0];
        // Copy table and contents in destination database
        $conn->query( "CREATE TABLE $code.$TABLE LIKE $decode.$TABLE" ) or die( $conn->error );
        $conn->query( "INSERT INTO $code.$TABLE SELECT * FROM $decode.$TABLE" ) or die( $conn->error );

    endwhile;
    $newconn = $conncode;
    $del = mysqli_query($newconn, "DELETE FROM scores");
    include 'questiondb.php';
 
    $result6 = mysqli_query($ques,"SELECT * FROM tanong WHERE CODE='$decode'");
    $row6 = mysqli_fetch_assoc($result6);
    $subj = $row6['SUBJ'];
    $name = $row6['GAMENAME'] ." copy";
    $result =mysqli_query($ques,"INSERT into tanong(CODE ,  USER, SUBJ, GAMENAME)
    VALUES('$code','$user','$subj','$name')");
      
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Duplicate <?php echo $name; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/DuplicateCode.css?v=<?php echo time(); ?>">
  </head> 
  <body>
  <form method='post' >
    <div class="Main container">
        <!-----CONTENT IN CONTAINER-->
        <div class="Box container mt-5 p-0">
            <!---NAVIGATION BAR START-->
          <?php 

include '../includes/navbar.php';
?>
 <!----NAVIGATION BAR END-->
            <!----CONTENT START------->
            <div class="blocks container">
             
            <h1>Copy this code</h1>
            <div class="code container">
                <label><?php echo $code; ?></label>
            </div> <br><br>
            <div class="container">
                <a href="Main_menu.php" type="button" class="button me-3 mt-5"
                >Done
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </a>
            </div> 
        </div>
    </div>
  </div>
    </form>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../js/Duplicate.js"></script>
  </body>
</html>