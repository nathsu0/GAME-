<?php
       session_start();
       $user = $_SESSION['username'];
      $id = $_GET['id'];
      $_SESSION['userid'] = $id;
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Welcome!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!--Main menu CSS-->
    <link rel="stylesheet" href="../css/Main_menu.css?v=<?php echo time(); ?>">
</head>
  <body>
       <!----MAIN CONTAINER-->
    <div class="Main container">
        <!-----CONTENT IN CONTAINER-->    
      <form method='post' action='Main_menu.php'>
      <div class="Box container mt-5 p-0">
         <!---NAVIGATION BAR START-->
          <?php 

          include '../includes/navbar.php'
         
          ;?>
           <!----NAVIGATION BAR END-->
                <div class="blocks container">
                    <div class="row col-sm-8 ms-1">
                    <!-- Button trigger modal -->
                    <div class="row col-sm-8 mt-4 ms-1">
                    <a href ="Create.php" type="button" class="button">Create Question
                      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </a>
                    </div>
                    <div class="row col-sm-8 mt-4 ms-1">
                    <a href ="EditView.php" type="button" class="button">Edit Question
                      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </a>
                    </div>
                    <div class="row col-sm-8 mt-4 ms-1">
                    <a href="Viewscore.php" type="button" class="button">View Score of Students
                      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </a>
                    </div>
                    <div class="row col-sm-8 mt-4 ms-1">
                    <a href="Duplicate.php" type="button" class="button">Duplicate Game
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
    <script src="../js/Main_menu.js"></script>
</body>
</html>