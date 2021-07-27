<?php
      
    session_start();
    $id = $_SESSION['userid'];
    $user1 =$_SESSION['teach'];
    $decode = $_SESSION['duplicate'];
    $code = $_SESSION['cccode'];
    include 'conn.php';
    $find = mysqli_query ($conn,"SELECT * FROM quiz_question WHERE gamecode='$decode'");
    $look =mysqli_query ($conn,"SELECT * FROM quiz WHERE gamecode='$decode'");
    $ddd = mysqli_fetch_assoc($look);

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
    while($row1=mysqli_fetch_assoc($look)){
      $newname = $row1['gamename'].'copy';
      $subk = $row1['gamesubject'];
      $sql1 = mysqli_query($conn,"INSERT into quiz (userid, gamename, gamecode, gamesubject)
      VALUES ('$id','$newname','$code','$newname','$subk')");
    }

?>
<!doctype html>
<html lang="en">
  <head>
    <title>Duplicate <?php echo $name; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../../css/teacher/DuplicateCode.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../../css/teacher/common.css">
  </head> 
  <body>
  <form method='post' >
    <div class="Main container">
        <!-----CONTENT IN CONTAINER-->
        <div class="Box container mt-5 p-0">
            <!---NAVIGATION BAR START-->
            <link rel="stylesheet" href="../css/common.css">
<nav class="top navbar navbar-expand-lg navbar-light bg-light bg-transparent text-dark">
  <div class="container-fluid my-1">
    <label class="navbar-brand"></label>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item me-3">
          Admin
          <img src="../../img/teacher/person-fill.svg">
        </li>
        <li class="nav-item">
          <a href="../table.php">Home
            <img src="../../img/teacher/box-arrow-right.svg">
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 <!----NAVIGATION BAR END-->
            <!----CONTENT START------->
            <div class="blocks container">
             
            <h1>Copy this code</h1>
            <div class="code container">
                <label><?php echo $code; ?></label>
            </div> <br><br>
            <div class="container">
                <a href="AMain_menu.php?teach=<?=$user1?>&id=<?=$id?>" type="button" class="button me-3 mt-5"
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
    <script src="../../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../js/teacher/Duplicate.js"></script>
  </body>
</html>