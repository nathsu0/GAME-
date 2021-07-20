<?php
  include 'codeconn.php';
  $count=1;
  $player=$_SESSION['player'];
  $result = mysqli_query($con1,'SELECT * from scores ORDER BY SCORE desc');
 
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Leaderboards</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/Score.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../includes/common.css">
  </head>
  <body>
     <!----MAIN CONTAINER-->
    <div class="Main container ">
      <!-----CONTENT IN CONTAINER-->
        <div class="Box container mt-5 p-0">
          <!----CONTENT START------->
          <div class="blocks container">
          <div class="container">
            <div class="row">
                <div class="col-md-4">
            <h1>Leaderboards</h1>
        </div>
             </div>
          <table class="table table-hover" style="background-color:rgba(255,248,220,.85)">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              <?php while ( $row=mysqli_fetch_assoc($result)) {

                if($row['NAMES']=="$player"){
                  ?>
                  <tr style="background-color:rgba(100,149,237,0.8)">
                  <?php
                }else{
                  ?>
                  <tr>
                  <?php
                }
                
              ?>
              
                
                <th scope="row"><?=$count?></th>
                <td>  <img src="<?=$row['Avatar'];?>">&nbsp;&nbsp;&nbsp;
                <?= $row['NAMES'];?></td>
                <td><?=$row['SCORE']?></td>
              </tr>
              <?php
              $count++;
              }
              ?>
           
            </tbody>
          </table>
          <div class="container d-flex justify-content-end">
            <a href="Code.php" type="button" class="button btn-bubble1">Exit</a>
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
    <script src="../js/Score.js"></script>
    <script src="../includes/background.js"></script>
  </body>
</html>