<?php
          session_start();
          $code = $_SESSION['Create'];
          $user1 =$_SESSION['teach'];
          $numrow = $_SESSION['numrow'];
          include "conn.php";
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Add Question</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../../css/teacher/Create.css">
    <link rel="stylesheet" href="../../css/teacher/common.css">
  </head>
  <body>
     <!----MAIN CONTAINER-->
    <div class="Main container ">
      <!-----CONTENT IN CONTAINER-->
        <div class="Box container  mt-5 p-0">
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
          <form method="POST" action="">
          <!----NAVIGATION BAR END-->
          <!----CONTENT START------->
          <div class="blocks container">
            
          <div class="form-floating m-2">
            <textarea class="form-control" name='question' placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px"></textarea>
            <label for="floatingTextarea2"><?php echo $numrow;?>. </label>
          </div>
          <div class="container m-2">
            <div class="row">
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="A"name="flexRadioDefault" id="flexRadioDefault11" >
                A.
                <input class="answer"type="text"id="ans1" name="A">
              </input>
              </div>
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="B" name="flexRadioDefault" id="flexRadioDefault12" >
                B.
                <input class="answer"type="text"id="ans2" name="B">
              </input>
              </div>
            </div>
            <div class="row ">
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="C" name="flexRadioDefault" id="flexRadioDefault13">
                C.
                <input class="answer"type="text"id="ans3" name="C">
              </input>
              </div>
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="D" name="flexRadioDefault" id="flexRadioDefault14"  >
                D.
                <input class="answer"type="text"id="ans4" name="D">
              </input>
              </div>
          </div>
          </div>
          <!---RADIOT BUTTON ENDS-->
          <div class="container d-flex justify-content-end">
          <a href="AQuestionTable.php?code=<?=$code?>" type="button" class="button">
            Cancel
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </a>
          <button type="submit" name='done' class="button">
                  Save
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </button>
          </div>
        </div>
      </div>
    </div>
    <?php
          if(isset($_POST['done'])){
            

            $Question=$_POST['question'];
            if($Question == NULL ){
              echo '<script type="text/javascript">'.'alert("Please enter a question.");</script>';
            }
            else{
     
            $A=$_POST['A'];
            $B=$_POST['B'];
            $C=$_POST['C'];
            $D=$_POST['D'];
            $ans=$_POST['flexRadioDefault'];
            
            $insert = mysqli_query ($conn,"INSERT INTO quiz_question(gamecode, question, A,B,C,D,answer)
            VALUES('$code','$Question','$A','$B','$C','$D','$ans')");

          echo '<script type="text/javascript">' .'window.location = "AQuestionTable.php"' . '</script>';
         }
        }
   ?> 
  </form>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../js/teacher/Create.js"></script>
  </body>
</html>