<?php
       session_start();
       $user = $_SESSION['username'];
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
                    <button type="button" class="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Create Questions
                      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Warning</h5>
                            <button type="button" class="btn-close btn-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            You can't Log out while making a questions
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a href="Create.php" type="button" class="btn border border-warning bg-warning text-dark">Create Questions</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div class="row col-sm-8 mt-4 ms-1">
                    <a href ="EditView.php" type="button" class="button">Edit Question
                      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </a>
                    </div>
                    <div class="row col-sm-8 mt-4 ms-1">
                    <a href="ViewScore.php" type="button" class="button">View Score of Students
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