
<?php
       session_start();
       include "database.php";
        $teach = $_GET['teach'];
        $error = '';
       if(isset($_POST['submit'])){
        $username=$teach;
        $password=($_POST['password']);
        
    $result =mysqli_query($conn,"SELECT * from user where username = '$username' and passwords='$password'");
        $i =  mysqli_fetch_assoc($result);
    if(mysqli_num_rows($result)>0){
             $_SESSION['username'] = $username;
             $_SESSION['teachlink']="../../user/view/table.php";
             $id= $i['ID'];
             echo '<script type="text/javascript">' .'window.location = "Main_menu.php?id='.$id.'"' . '</script>';
         
        }else{
        $error ='Incorrect password.';
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
    <style>
    .label {
  color: white;
  padding: 8px;
  font-family: Arial;
}
        </style>
</head>
  <body>
      <!----MAIN CONTAINER-->
    <div class="Main align-items-sm-center">
        <!-----SIGN IN CONTAINER-->
        <form class="form-container-style" method ="POST" action=''>
            <div class="blocks form-group container mt-5">
                <h1 class="display-4 text-center">Log in</h1>
                <!------USER INPUT START-->
                    <!----USERNAME-->
                <div class="Username input-group">
                    <span class="input-group-text" ><img src="../img/person-circle.svg"></span>
                    <input disabled type="text" name='username' class="form-control" placeholder="<?=$teach;?>" 
                    aria-label="Sizing example input"  id="txt_1" onkeyup='saveValue(this);'
                    aria-describedby="inputGroup-sizing-default" >
                </div>
                <span class="label" ><?=$error?></span>
                    <!-----PASSWORD-->
                <div class="Password input-group">
                    <span class="input-group-text" ><img src="../img/lock-fill.svg"></span>
                    <input type="password"  id = "password"name='password'class="form-control">
                    <span class="input-group-text"id="eye" style ="--icon: url(../img/eye-fill.svg);"></span>
                    
                </div>
<script type="text/javascript">
        document.getElementById("txt_1").value = getSavedValue("txt_1");   
        function saveValue(e){
            var id = e.id;  
            localStorage.setItem(id);}
        function getSavedValue  (v){
            if (!localStorage.getItem(v)) {
                return "";
            }
            return localStorage.getItem(v);
        }
</script>
                
                <!--USER INPUT END-->
                <!-------BUTTON-------->
                <div class = "container ">
                <div class="row d-flex justify-content-center">
                <div class="col-sm">
                <a href="../../user/view/table.php"type="submit" name="add" class="button">
                            Back
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </a>
                </div>
                <div class="col-sm">
                <button type="submit" name="submit" class="button">
                            Log in
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </button>
                        </div>
                       
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
