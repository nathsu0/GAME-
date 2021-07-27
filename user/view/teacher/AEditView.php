<?php
       session_start();
       $user1 =$_SESSION['teach'];
       $id = $_SESSION['userid'];
       include 'conn.php';

?>

<!doctype html>
<html lang="en">
  <head>
    <title>Quiz Codes</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../../css/teacher/EditView.css">
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
          <h2>Quiz Codes</h2>
          <label>Please select a row to edit.</label>
          <br>
          <form method = 'post' action = ''>
 <div class="table-responsive">
          <table class="table">
            <thead>
              <tr class="no-hover">
                <th scope="col">Code</th>
                <th scope="col">Game Name</th>
                <th scope="col">Subject</th>
                <th></th>
              </tr>
            </thead>
            <tbody class="hoverTable">
            <?php
            $result = mysqli_query($conn,"SELECT * from quiz WHERE userid='$id' ORDER BY gamename");
            while($row=mysqli_fetch_assoc($result)){
              ?>
              <tr>
                  <td name="code"><a href="AEditTable.php?code=<?php echo $row["gamecode"];?>" >
                  <?php  echo $row["gamecode"];?> </td></a>
                  <td name="gn"><a href="AEditTable.php?code=<?php echo $row["gamecode"];?>" >
                  <div style="height:100%;width:100%"><?php  echo $row["gamename"];?></td></div></a>
                  <td name="sub"><a href="AEditTable.php?code=<?php echo $row["gamecode"];?>" >
                  <div style="height:100%;width:100%"><?php  echo $row["gamesubject"];?> </td></div></a>
                  <td name="del"><a href="ADelete.php?code=<?php echo $row["gamecode"];?>" type="button" class="btn btn-success" 
                  onclick="return confirm('Are you sure?');">DELETE </a></td>
                  
            </a>
              </tr>
              
              <?php 
            }?>
            </tbody>
          </table>
          </div>
          <div class="container d-flex justify-content-end">
            <a href="AMain_menu.php?teach=<?=$user1?>&id=<?=$id?>" type="button" class="button me-2">
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
    <script src="../../js/teacher/EditView.js"></script>
  </body>
</html>