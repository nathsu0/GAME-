<?php
    session_start();
    $id = $_SESSION['userid'];
    $user =$_SESSION['username'];
    $decode = $_SESSION['duplicate'];
    $code = $_SESSION['cccode'];
    include 'conn.php';
    $find = mysqli_query ($conn,"SELECT * FROM quiz_question WHERE gamecode='$decode'");
 

    while($row=mysqli_fetch_assoc($find)){
      $q = $row['question'];
      $a = $row['A'];
      $b = $row['B'];
      $c = $row['C'];
      $d = $row['D'];
      $ans= $row['answer'];
      $sql = mysqli_query($conn,"INSERT into quiz_question(gamecode, question, A, B, C, D, answer)
      VALUES ('$code','$q','$a','$b','$c','$d','$ans')");
    };

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
                <a href="Main_menu.php?id=<?=$id?>" type="button" class="button me-3 mt-5"
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