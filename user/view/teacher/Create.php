<?php
          session_start();
          include 'random.php';
          include 'conn.php';
          //$user = $_SESSION['username'];
          $user = $_SESSION['username'];

?>
<!doctype html>
<html lang="en">
  <head>
    <title>Create Quiz</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../../css/teacher/Create.css">
    <link rel="stylesheet" href="../../css/teacher/common.css">
  </head>
  <body>
     <!----MAIN CONTAINER-->
    <div class="Main container ">
      <!-----CONTENT IN CONTAINER-->
        <div class="Box container  mt-5 p-0">
          <!---NAVIGATION BAR START-->
          <?php 

 include '../../includes/teacher/navbar.php'




?>
          <form method="POST" action="">
          <!----NAVIGATION BAR END-->
          <!----CONTENT START------->
          <div class="blocks container">
            <div class="container">
              <div class="row">
                <div class="list col-sm-5 col-md-6">
                <label>Enter a game name:</lable>
                <input class="game" type="text" id="name" name='name'></input>
                </div>
                <div class="Name col-sm-5 col-md-6">
                  <label for="subjects">Choose a subject:</label>
                  <select name="subjects" id="sub">
                    <option value="None">None</option default>
                    <option value="Math">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                    <option value="Filipino">Filipino</option>
                    <option value="AP">Araling Panlipunan</option>
                    <option value="Social Science">Social Science</option>
                    <option value="Computer">Computer</option>
                    <option value="Christian Living">Christian Living</option>
                    <option value="Technology and Livelihood Education">Technology and Livelihood Education</option>
                    <option value="Physical Education">Physical Education</option>
                    <option value="Music">Musics</option>
                    <option value="Arts">Arts</option>
                    <option value="Physical Education and Health">Physical Education and Health</option>
                    <option value="Robotics">Robotics</option>
                    <option value="MAPEH">MAPEH</option>
                    <option value="General">General</option>


                  </select>
                 </div>
              </div>
            </div>
          <div class="form-floating m-2">
            <textarea class="form-control" name='question' placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px"></textarea>
            <label for="floatingTextarea2">1.</label>
          </div>
          <div class="container m-2">
            <div class="row">
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="A"name="flexRadioDefault" id="flexRadioDefault11" >
                A.)
                <input class="answer"type="text"id="ans1" name="A">
              </input>
              </div>
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="B" name="flexRadioDefault" id="flexRadioDefault12" >
                B.)
                <input class="answer"type="text"id="ans2" name="B">
              </input>
              </div>
            </div>
            <div class="row ">
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="C" name="flexRadioDefault" id="flexRadioDefault13">
                C.)
                <input class="answer"type="text"id="ans3" name="C">
              </input>
              </div>
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="D" name="flexRadioDefault" id="flexRadioDefault14"  >
                D.)
                <input class="answer"type="text"id="ans4" name="D">
              </input>
              </div>
          </div>
          </div>
          <!---RADIOT BUTTON ENDS-->
          <div class="container d-flex justify-content-end">
          <a href="Main_menu.php" type="button" class="button">
            Cancel
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </a>
          <button type="submit" name='done' class="button">
                  Save
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </button>
                <input  type="hidden"name="ccode" value="<?php echo $code; ?>"></input>
          </div>
        </div>
      </div>
    </div>
    <?php
          if(isset($_POST['done'])){
            
            $mamama = $_POST['ccode'];

            $Question=$_POST['question'];
            if($Question == NULL ){
              echo '<script type="text/javascript">'.'alert("Please enter a question.");</script>';
            }
            else{

            $_SESSION['CreateCode'] = $mamama;
            // Create database
            $sql = "CREATE DATABASE $mamama"; 
            if ($conn->query($sql) === TRUE) {
             echo '<script type="text/javascript">' .
             'console.log("Database created successfully");</script>';
           } else {
             echo '<script type="text/javascript">' .
             'console.log("Error creating database");</script>'. $conn->error;
           }
           // CONNECT DB FOR TABLES
           $mysqli= new mysqli ('localhost', 'root' , '', $mamama);  
           // CREATE TABLES
            $sql = "CREATE TABLE quiz (
              id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
              Question MEDIUMTEXT NOT NULL,
              A MEDIUMTEXT , B MEDIUMTEXT ,
              C MEDIUMTEXT , D MEDIUMTEXT ,
              Answer VARCHAR(50)
              )";
            if ($mysqli->query($sql) === TRUE) {
              echo '<script type="text/javascript">' .
            'console.log("Table quiz created successfully");</script>';
            } else {
              echo '<script type="text/javascript">' .
            'console.log("Error creating table: ");</script>'. $mysqli->error;
            }
            $sql = "CREATE TABLE SCORES (
              id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
              NAMES MEDIUMTEXT, Avatar VARCHAR(255),
              SCORE int(6) 
              )";
            if ($mysqli->query($sql) === TRUE) {
              echo '<script type="text/javascript">' .
            'console.log("Table SCORES created successfully");</script>';
            } else {
              echo '<script type="text/javascript">' .
            'console.log("Error creating table SCORES ");</script>'. $mysqli->error;
            }
         
          
          
            $A=$_POST['A'];
            $B=$_POST['B'];
            $C=$_POST['C'];
            $D=$_POST['D'];
            $ans=$_POST['flexRadioDefault'];
            
            
          $result =mysqli_query($mysqli,"INSERT into quiz(Question,	A,	B,	C,	D, Answer)
          VALUES('$Question', '$A','$B','$C','$D', '$ans')");
          
          include 'questiondb.php';
         $subject=$_POST['subjects'];
         $_SESSION['SUBJECTname']=$subject;
         $name = $_POST['name'];
         $_SESSION['GAMENAME']=$name;
         include 'questiondb.php';
            $ques= mysqli_connect ('localhost', 'root' , '', 'question');  
            $result =mysqli_query($ques,"INSERT into tanong(CODE ,  USER, SUBJ, GAMENAME)
            VALUES('$mamama','$user','$subject','$name')");
          
         echo '<script type="text/javascript">' . 'window.location = "QuestionTable.php"'.'</script>';
         }
        }
   ?> 
  </form>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../js/teacher/Create.js"></script>
  </body>
</html>