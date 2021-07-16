<?php
    include 'codeconn.php';
    $alert="";
    if(isset($_POST['submit'])){
      $player=$_POST['player'];
      $resu=mysqli_query($con1,"SELECT * FROM scores WHERE NAMES='$player'");
      if($player == NULL){
        $alert = 'Enter your name';
      } elseif(mysqli_num_rows($resu)>0){
        $alert = 'Username already taken.';
      }
      else{
        $_SESSION['player']=$player;
        $result= mysqli_query($con1,"INSERT INTO scores(NAMES) VALUES('$player')");
        echo '<script type="text/javascript">' .'window.location = "Avatar.php"' . '</script>';
      }
    }
    
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Game Code</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/Start.css">
    <link rel="stylesheet" href="../includes/common.css">
  </head>
  <body>
    <div class="Main container">
      <!-----CONTENT IN CONTAINER-->
    <form method='post' action = ''>
        <!-----CONTENT IN CONTAINER-->
        <div class="Box container">
            <!----CONTENT START------->
          <div class="blocks container mt-5 p-0">
            <div class="username form-floating ">
                <input type="text" name="player" class="form-control" id="floatingInput" placeholder="Username"></input>
                <label for="floatingInput">Username</label></div>
                <div class="usn d-flex justify-content-center"><label><?php echo $alert;?></label></div>
            <div class="container d-flex justify-content-center">
              <button type="submit" name="submit" class="button btn-bubble1">Enter</button>
            </div>
          </div> 
        </div>
    </div>
  </div>
  </div>
    <canvas></canvas>
    </form>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../js/Start.js"></script>
    <script src="../includes/background.js"></script>
  </body>
</html>