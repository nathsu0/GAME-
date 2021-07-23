<?php
       session_start();
       $user = $_SESSION['username'];
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
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/ViewScore.css?v=<?php echo time(); ?>">
  </head>
  <body>
     <!----MAIN CONTAINER-->
    <div class="Main container">
      <!-----CONTENT IN CONTAINER-->
        <div class="Box containermt-5 p-0">
         <!---NAVIGATION BAR START-->
         <?php 

include '../includes/navbar.php'

;?>
 <!----NAVIGATION BAR END-->
          <!----CONTENT START------->
          <div class="blocks container">
          <h2>Quiz Codes</h2>
          <form method = 'post' action = ''>
          <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Game Name</th>
                <th scope="col">Subject</th>
              </tr>
            </thead>
            <tbody class="hoverTable">
            <?php
            $result = mysqli_query($ques,"SELECT * from tanong WHERE USER='$user'ORDER BY GAMENAME");
            while($row=mysqli_fetch_assoc($result)){
              ?>
              <tr>
                  <td name="code"><a href="View.php?code=<?php echo $row["CODE"];?>"  class="row-link">
                  <div style="height:100%;width:100%"><?php  echo $row["CODE"];?>  </td></div></a>
                  <td name="gn"><a href="View.php?code=<?php echo $row["CODE"];?>" class="row-link">
                  <div style="height:100%;width:100%"><?php  echo $row["GAMENAME"];?> </td></div></a>
                  <td name="sub"><a href="View.php?code=<?php echo $row["CODE"];?>"  class="row-link">
                  <?php  echo $row["SUBJ"];?> </td></div></a>
              
            
              </tr>
              
              <?php 
            }?>
            </tbody>
          </table>
     
          <div class="container d-flex justify-content-end">
            <a href="Main_menu.php" type="button" class="button me-2">
              Main menu
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
    <script src="../js/ViewScore.js"></script>
  </body>
</html>