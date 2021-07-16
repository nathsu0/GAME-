<?php
       session_start();
       $user = $_SESSION['username'];
       $conn = mysqli_connect('localhost','root','','question');

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
    <link rel="stylesheet" href="../css/EditView.css">
  </head>
  <body>
     <!----MAIN CONTAINER-->
    <div class="Main container">
      <!-----CONTENT IN CONTAINER-->
        <div class="Box container mt-5 p-0">
          <!---NAVIGATION BAR START-->
          <?php 

include '../includes/navbar.php';
?>
 <!----NAVIGATION BAR END-->
          <!----CONTENT START------->
          <div class="blocks container">
          <h2>Quiz Codes</h2>
          <label>Please select a row to edit.</label>
          <br>
          <form method = 'post' action = ''>
          <style style="text/css">
            .hoverTable{
            width:100%; 
            border-collapse:collapse; 
          }
          .hoverTable td{ 
            padding:7px;  
            border-top: 2px solid #999;
            border-bottom: 2px solid #999;
          }
          /* Define the hover highlight color for the table row */
            .hoverTable tr:hover {
                  background-color: rgba(0, 255, 0, 0.2);;
            }
        </style>

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
            $result = mysqli_query($conn,"SELECT * from tanong WHERE USER='$user'");
            while($row=mysqli_fetch_assoc($result)){
              ?>
              <tr>
                  <td name="code"><a href="EditTable.php?code=<?php echo $row["CODE"];?>" >
                  <?php  echo $row["CODE"];?> </td></a>
                  <td name="gn"><a href="EditTable.php?code=<?php echo $row["CODE"];?>" >
                  <div style="height:150%;width:100%"><?php  echo $row["GAMENAME"];?></td></div></a>
                  <td name="sub"><a href="EditTable.php?code=<?php echo $row["CODE"];?>" >
                  <div style="height:150%;width:100%"><?php  echo $row["SUBJ"];?> </td></div></a>
                  <td name="del"><a href="Delete.php?code=<?php echo $row["CODE"];?>" type="button" class="btn btn-success" 
                  onclick="return confirm('Are you sure?');">DELETE </a></td>
                  
            </a>
              </tr>
              
              <?php 
            }?>
            </tbody>
          </table>
          <br>
          <div class="container d-flex justify-content-end">
            <a href="Main_menu.php" type="button" class="button me-2">
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
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../js/EditView.js"></script>
  </body>
</html>