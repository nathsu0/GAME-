<?php
  session_start();
  $count=1;
  $qcount = $_SESSION['qcount'];
?>
<!doctype html>

<html lang="en">
  <head>
    <title>Score</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/QA.css">
    <link rel="stylesheet" href="../includes/common.css">
  </head>
  <body>
     <!----MAIN CONTAINER-->
    <div class="Main container">
      <!-----CONTENT IN CONTAINER-->
        <div class="Box container mt-5 p-0">
          <!----CONTENT START------->
          <div class="blocks container">
            <h1>Question And Answer</h1>
            <?php while ($count <= $qcount){
                ?>
            <div class="card">
              <div class="card-body">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
                
                <strong>Question : </strong> <?php echo $_SESSION['Question'.$count];?>
                <br>
                <strong>Choices : </strong> 
                <br>
                <strong>A. </strong> <?php echo $_SESSION['A'.$count];?>
                <br>
                <strong>B. </strong> <?php echo $_SESSION['B'.$count];?>
                <br>
                <strong>C. </strong> <?php echo $_SESSION['C'.$count];?>
                <br>
                <strong>D. </strong> <?php echo $_SESSION['D'.$count];?>
                <br>
                <strong>Your response : </strong> <?php echo $_SESSION['answer'.$count];?>
                <br>
                <strong>Correct Answer : </strong> <?php echo $_SESSION["correct".$count];?>
              </div>
            </div>
            <?php
            $count++;
            }
            ?>
            <div class="container d-flex justify-content-end">
              <a href="Score.html" type="button" class="button btn-bubble1">Close</a>
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
    <script src="../js/QA.js"></script>
    <script src="../includes/background.js"></script>
  </body>
</html>