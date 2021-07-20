<?php
  include "codeconn.php";
  $qcount=$_SESSION['qcount'];
  $player=$_SESSION['player'];
  $pic = $_SESSION['pic'];
  $count=1;
  $tscore = $_GET['total'];
  $int =(int)$tscore;
  $res=mysqli_query($con1,"SELECT * FROM scores WHERE NAMES='$player'");
  if(mysqli_num_rows($res)==0){
  $resu= mysqli_query($con1,"INSERT INTO scores(NAMES) VALUES('$player')");
  $result = mysqli_query($con1,"UPDATE scores SET SCORE='$int', Avatar='$pic' WHERE NAMES='$player'");
  }
?>
<!doctype html>
<html lang="en">
  <head>
  <script >//vaaaar

      var a1 = sessionStorage.getItem("a1");
      var a2 = sessionStorage.getItem("a2");
      var a3 = sessionStorage.getItem("a3");
      var a4 = sessionStorage.getItem("a4");
      var a5 = sessionStorage.getItem("a5");
      var a6 = sessionStorage.getItem("a6");
      var a7 = sessionStorage.getItem("a7");
      var a8 = sessionStorage.getItem("a8");
      var a9 = sessionStorage.getItem("a9");
      var a10 = sessionStorage.getItem("a10");

  </script>
    <title>Track Question</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/QA.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../includes/common.css">
  </head>
  <body>
     <!----MAIN CONTAINER-->
    <div class="Main container">
      <!-----CONTENT IN CONTAINER-->
        <div class="Box container p-0">
          <!----CONTENT START------->
          <div class="blocks container ">


            <div class="content">
        <h4>SCORE: <?=$tscore?></h4>
        <?php 

        while($count<=$qcount && $_GET['A'.$count]!= 'undefined'){
           
            if($_GET['NA'.$count]=='1'){
        ?>
           <div class="card-correct">
              <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <strong>Question <?=$count?>: </strong> <?=$_SESSION['Question'.$count];?>
                <br>
                <strong>Choices : </strong> 
                <br> A. <?=$_SESSION['A'.$count];?>
                <br> B. <?=$_SESSION['B'.$count];?>
                <br> C. <?=$_SESSION['C'.$count];?>
                <br> D. <?=$_SESSION['D'.$count];?><br>
                <strong>Your answer : </strong> <?= $_GET['A'.$count];?>
                <br>
              </div>
            </div>
        <?php
            }else{
        ?>
            <div class="card-wrong">
              <div class="card-body ">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
                <strong>Question <?=$count?>: </strong> <?=$_SESSION['Question'.$count];?>
                <br>
                <strong>Choices : </strong> 
                <br> A. <?=$_SESSION['A'.$count];?>
                <br> B. <?=$_SESSION['B'.$count];?>
                <br> C. <?=$_SESSION['C'.$count];?>
                <br> D. <?=$_SESSION['D'.$count];?><br>
                <strong>Your answer : </strong> <?= $_GET['A'.$count];?>
                <br>
                <strong>Correct Answer : </strong> <?=$_SESSION['answer'.$count]?>
              </div>
            </div>
            <?php
        } 
          $count++;
    } 
?>

            <div class="container d-flex justify-content-end">
              <a href="Score.php" type="button" class="button btn-bubble1">Close</a>
          </div> 
        </div>
      </div>  
      </div>
    </div>  

    <canvas></canvas>
 
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript"src="../js/QA.js"></script>
    <script src="../includes/background.js"></script>
  </body>
</html>