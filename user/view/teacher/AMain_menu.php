<?php
       session_start();
       $user1 =   $_GET['teach'];
       $id = $_GET['id'];
       $_SESSION['teach'] = $user1;
       $_SESSION['username'] = $user1;
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
    <link rel="stylesheet" href="../../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!--Main menu CSS-->
    <link rel="stylesheet" href="../../css/teacher/Main_menu.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../../css/teacher/common.css">
</head>
  <body>
       <!----MAIN CONTAINER-->
    <div class="Main container">
        <!-----CONTENT IN CONTAINER-->    
      <form method='post'>
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
                <div class="blocks container">
                
                <div class="row col-sm-8 mt-4 ms-1">
                    <a href ="ACreate.php" type="button" class="button">Create Question
                      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </a>
                    </div>
                    <div class="row col-sm-8 mt-4 ms-1">
                    <a href ="AEditView.php?" type="button" class="button">Edit Question
                      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </a>
                    </div>
                    <div class="row col-sm-8 mt-4 ms-1">
                    <a href="AViewscore.php?" type="button" class="button">View Score of Students
                      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </a>
                    </div>
                    <div class="row col-sm-8 mt-4 ms-1">
                    <a href="ADuplicate.php?" type="button" class="button">Duplicate Game
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
    <script src="../../js/teacher/Main_menu.js"></script>
</body>
</html>