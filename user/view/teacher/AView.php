<?php
       session_start();
       $user1 =$_SESSION['teach'];
       $qid=$_GET['qid'];
       include 'conn.php';
       $count=1;

?>
<!doctype html>
<html lang="en">
<form method='post'>
  <head>
    <title>Student's Score</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../../css/teacher/View.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../../css/teacher/common.css">
  </head>
  <body>
     <!----MAIN CONTAINER-->
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
          <h1>Leaderboards</h1>
          <div class="table-responsive">
          <table class="table">
            <thead>
              <tr class="no-hover">
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody class="hoverTable">
            <?php
            $result = mysqli_query($conn,"SELECT * from quiz_attemp WHERE quiz_id = '$qid' ");
            while($row=mysqli_fetch_assoc($result)){ 
              ?>
              <tr>
                  <td name="ID"  class="row-link"><?php  echo $count;?> </a></td>
                  <td name="name" class="row-link"><?php  echo $row["userid"];?></a></td>
                  <td name="score" class="row-link"><?php  echo $row["score"];?> </a></td>
            </a>
              </tr>
              
              <?php 
              $count++;
            }?>
            </tbody>
          </table>
          </div>
          <div class="container d-flex justify-content-end">
            <a href="AViewscore.php" type="button" class="button me-2">
              Back
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
    <script src="../../js/teacher/View.js"></script>
  </body>
</html>