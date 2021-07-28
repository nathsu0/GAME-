<?php
  session_start();
  include 'conn.php';
  $player=$_SESSION['player'];
  if(isset($_POST['boy'])){
    $pic = "../img/Boy.png";
    $_SESSION['pic'] = $pic;
    echo '<script type="text/javascript">' .'window.location = "carousel.html"' . '</script>';
  }
  elseif(isset($_POST['girl'])){
    $pic = "../img/Girl.png";
    $_SESSION['pic'] = $pic;
    echo '<script type="text/javascript">' .'window.location = "carousel.html"' . '</script>';
  }

?>

<!doctype html>
<html lang="en">
  <head>
    <title>Pick your Avatar</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/Avatar.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../includes/common.css">
  </head>
  <body>
    <form method="POST" action="">
    <div class="Main container">
      <!-----CONTENT IN CONTAINER-->
   
        <!-----CONTENT IN CONTAINER-->
        <div class="Box container">
            <!----CONTENT START------->
          <div class="blocks container mt-3 p-0">
            <div class="row d-flex justify-content-center">
            <div class="col-sm-6">
              <div class="character"><br>
                <img src="../img/ABoy.png">
                <div class="card-body"><br>
                  <p>Choose your avatar </p>
                  <div class="container d-flex justify-content-center">
                    <button  type="submit" name="boy" class="button btn-bubble1">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="character"><br>
                <img src="../img/AGirl.png">
                <div class="card-body"><br>
                  <p>Choose your avatar</p>
                  <div class="container d-flex justify-content-center">
                  <button type="submit" name="girl"  class="button btn-bubble1">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
</form>
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
    <script src="../js/Avatar.js"></script>
    <script src="../includes/background.js"></script>
  </body>
</html>