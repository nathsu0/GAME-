<?php
    include 'teacher/accounts.php';
    $usere="";
    $pww="";
    if(isset($_POST['submit'])){
    $tea = $_POST['username'];
    $pw = $_POST['password'];
    $Cpw = $_POST['confirm'];
    $resultd =mysqli_query($mysqli,"SELECT * from accounts where username = '$tea'");
    if(mysqli_num_rows($resultd)>0 ){
       $usere = "Username already taken.";
    }
    if($Cpw != $pw){
        $pww ="Passwords do not match.";
    }
    else{
        $resultdo =mysqli_query($mysqli,"INSERT into accounts(username, passwords)
        VALUES('$tea', '$pw')");
         echo '<script type="text/javascript">'.'alert("Registered successfully.");</script>';
         echo '<script type="text/javascript">' . 'window.location = "table.php"'.'</script>';
    }
}

?>
<!doctype html>
<html lang="en">
  <head>
    <title>Admin</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---Sign in CSS -->
    <link rel="stylesheet" href="../css/register.css">
    <link rel="stylesheet" href="../css/teacher/common.css">
</head>
  <body>
    <!----MAIN CONTAINER-->
    <div class="Main container-lg align-items-sm-center">
        <!-----SIGN IN CONTAINER-->
        <form class="form-container-style" method ="POST" action=''>
            <div class="blocks form-group container mt-5">
                <h1 class="display-4 text-center">Register</h1>
                <!------USER INPUT START-->
                    <!----USERNAME-->
                    <label><?=$usere?></label>
                <div class="Username input-group">
                    <span class="input-group-text" ><img src="../img/teacher/person-circle.svg"></span>
                    
                    <input type="text" name='username' class="form-control" placeholder="Username" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                    <!-----PASSWORD-->
                    <label><?=$pww?></label>
                <div class="Password input-group">
                    <span class="input-group-text" ><img src="../img/teacher/lock-fill.svg"></span>
                    <input type="password"  name='password'class="form-control" placeholder="Password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="Password input-group">
                    <span class="input-group-text" ><img src="../img/teacher/lock-fill.svg"></span>
                    <input type="password"  name='confirm'class="form-control" placeholder="Confirm Password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                
                <!--USER INPUT END-->
                <!-------BUTTON-------->
                <div class = "button d-flex justify-content-center mb-2">
                        <button type="submit" name="submit" class="button">
                            Register
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
    <script src="../js/register.js"></script>
</body>
</html>