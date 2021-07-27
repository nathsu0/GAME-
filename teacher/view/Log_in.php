
<?php
    include 'accounts.php';
       session_start();
       include 'conn.php';
    $mysqli = $quiz;
    if(isset($_POST['submit'])){
        $username=$_POST['username'];
        $password=($_POST['password']);
        
    $result =mysqli_query($mysqli,"SELECT * from accounts where username = '$username' and passwords='$password'");
        
    if(mysqli_num_rows($result)>0){
             $_SESSION['username'] = $username;
               header("location:Main_menu.php");
        }else{
        echo"<script>alert('Incorrect username and/or password.')</script>";
    }
}
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Log in</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---Sign in CSS -->
    <link rel="stylesheet" href="../css/Sign_in.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../css/common.css">
</head>
  <body>
      <!----MAIN CONTAINER-->
    <div class="Main container-lg align-items-sm-center">
        <!-----SIGN IN CONTAINER-->
        <form class="form-container-style" method ="POST" action='Log_in.php'>
            <div class="blocks form-group container mt-5">
                <h1 class="display-4 text-center">Log in</h1>
                <!------USER INPUT START-->
                    <!----USERNAME-->
                <div class="Username input-group">
                    <span class="input-group-text" ><img src="../img/person-circle.svg"></span>
                    <input type="text" name='username' class="form-control" placeholder="Username" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                    <!-----PASSWORD-->
                <div class="Password input-group">
                    <span class="input-group-text" ><img src="../img/lock-fill.svg"></span>
                    <input type="password"  name='password'class="form-control" placeholder="Password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <!--USER INPUT END-->
                <!-------BUTTON-------->
                <div class = "button d-flex justify-content-center">
                        <button type="submit" name="submit" class="button">
                            Log in
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </button>
                </div>
            </div>
        </form>
      </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <!--Sign in JS-->
    <script src="../js/Sign_in.js"></script>
</body>
</html>
<?php   
		?>
