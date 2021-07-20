<?php
   session_start();
   include 'conn.php';
   if(isset($_POST['done'])){
    $code = $_POST['code'];
    
    if($conn->select_db($code)=== false){
    echo '<script type="text/javascript">'.'alert("Please enter a valid code.");</script>';
     
    }else{
      $_SESSION['code']=$code;
     echo '<script type="text/javascript">' .'window.location = "Start.php?code='.$code.'"' . '</script>';
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
    <link rel="stylesheet" href="../css/Code.css?v=<?php echo time(); ?>">
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
            <h1>Enter a code</h1>
            <div class="code_edit container"> 
                <input type="text" name ='code'></input>
            </div> 
            <div class="container d-flex justify-content-end">
              <button type="submit" name="done" class="button btn-bubble1">Submit</button>
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
    <script src="../js/Code.js"></script>
    <script src="../includes/background.js"></script>
  </body>
</html>