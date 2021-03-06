<?php
          session_start();
          include 'conn.php';
          $id = $_SESSION['userid'];
          $user = $_SESSION['username'];
          $code = $_SESSION['CreateCode'];
          $result = mysqli_query($conn,"SELECT * from quiz_question where gamecode='$code' ORDER BY ID");
          $numrow =  mysqli_num_rows($result);
          $res = mysqli_query($conn,"SELECT * from quiz where gamecode='$code'");
          $row6=mysqli_fetch_assoc($res);
?>

<!doctype html>
<html lang="en">
  <head>
    <title><?=$row6['gamename'];?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/QuestionTable.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../css/common.css">
  </head>
  <body>
     <!----MAIN CONTAINER-->
    <div class="Main container ">
      <!-----CONTENT IN CONTAINER-->
        <div class="Box container  mt-5 p-0">
          <!---NAVIGATION BAR START-->
          <?php 

include '../includes/navbar copy.php';

?>
<form method='POST'>
          <!----CONTENT START------->
          <div class="blocks container"> <br>
            <div class="container">
              <div class="row">
                <div class="list col-sm-5 col-md-6">
                 
                <label>Enter a game name:</label>
                  <input class="game" type="text" name="name" id="name" value="<?php echo $row6['gamename'];?>">
                    </input>
                  </div>
                  <div class="Name col-sm-5 col-md-6">
          <label for="subjects">Choose a subject:</label>
          <select name="subjects" id="subjects">
            <option value="None" <?php if($row6['gamesubject'] == "None"){echo "selected";}?>>None</option>
            <option value="Mathematics"<?php if($row6['gamesubject'] == "Mathematics"){echo "selected";}?>>Mathematics</option>
            <option value="Science"<?php if($row6['gamesubject'] == "Science"){echo "selected";}?>>Science</option>
            <option value="English"<?php if($row6['gamesubject'] == "English"){echo "selected";}?>>English</option>
            <option value="Filipino"<?php if($row6['gamesubject'] == "Filipino"){echo "selected";}?>>Filipino</option>
            <option value="Araling Panlipunan"<?php if($row6['gamesubject'] == "Araling Panlipunan"){echo "selected";}?>>Araling Panlipunan</option>
            <option value="Social Science"<?php if($row6['gamesubject'] == "Social Science"){echo "selected";}?>>Social Science</option>
            <option value="Computer"<?php if($row6['gamesubject'] == "Computer"){echo "selected";}?>>Computer</option>
            <option value="Christian Living"<?php if($row6['gamesubject'] == "Christian Living"){echo "selected";}?>>Christian Living</option>
            <option value="Technology and Livelihood Education"<?php if($row6['gamesubject'] == "Technology and Livelihood Education"){echo "selected";}?>>Technology and Livelihood Education</option>
            <option value="Physical Education" <?php if($row6['gamesubject'] == "Physical Education"){echo "selected";}?>>Physical Education</option>
            <option value="Music"<?php if($row6['gamesubject'] == "Music"){echo "selected";}?>>Musics</option>
            <option value="Arts"<?php if($row6['gamesubject'] == "Arts"){echo "selected";}?>>Arts</option>
            <option value="Physical Education and Health"<?php if($row6['gamesubject'] == "Physical Education and Health"){echo "selected";}?>>Physical Education and Health</option>
            <option value="Robotics"<?php if($row6['gamesubject'] == "Robotics"){echo "selected";}?>>Robotics</option>
            <option value="MAPEH"<?php if($row6['gamesubject'] == "MAPEH"){echo "selected";}?>>MAPEH</option>
            <option value="General"<?php if($row6['gamesubject'] == "General"){echo "selected";}?>>General</option>
          </select>
                 </div>
              </div>
              
                <div class="items mt-1">
                    <label for="number">Total number of items : </label><label> <?php echo $numrow;?></label>
                    </div>
         <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Question</th>
                    <th scope="col">Option 1</th>
                    <th scope="col">Option 2</th>
                    <th scope="col">Option 3</th>
                    <th scope="col">Option 4</th>
                    <th scope="col">Answer</th>
                    <th scope="col" >Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                <?php
                $count = 1;
            while($row=mysqli_fetch_assoc($result)){
              ?>
                  <tr>
                    <th scope="row"><?php echo $count;?></th>
                    <td><?php echo $row['question'];?></td>
                    <td><?php echo $row['A']; ?></td>
                    <td><?php echo $row['B']; ?></td>
                    <td><?php echo $row['C']; ?></td>
                    <td><?php echo $row['D']; ?></td>
                    <td><?php 
                    $rem = $row['answer'];
                    echo $row[$rem] ; ?></td>
                    <td name="del"><a href="EditF.php?ID=<?php echo $row["ID"];?>&num=<?php echo $count;?>&code=<?php echo $code;?>" type="button" class="btn btn-success" >EDIT </a>
            <a href="DeleteQ.php?ID=<?php echo $row["ID"];?>&code=<?php echo $code;?>" type="button" class="btn btn-danger"
                  onclick="return confirm('Are you sure?');">DELETE </a></td>
                  </tr>
                      
              <?php 
            $count++;
            }?>
                </tbody>
              </table>
        </div>
          <!---RADIOT BUTTON ENDS-->
          <div class="but container">
          <button type="done" name='add' class="button">
                  Add Question
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </button>
                <button type="done" name='done' class="button">
                  Save
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </button>
          </div>
        </div>
      </div>
    </div>
    <?php
      if(isset($_POST['add'])){
        $result1= "UPDATE quiz SET gamesubject='" . $_POST['subjects']."', gamename='". $_POST['name'] ."' WHERE gamecode='$code'";
        if($conn->query($result1)===TRUE){
               echo '<script type="text/javascript">' .
               'console.log("nays");</script>';
             }

        if($numrow >=10){
          echo"<script>alert('You already exceed the number of items!')</script>";
        }
        else{
          $_SESSION['numrow']=$numrow+1;
          $_SESSION['Create']=$code;
          echo '<script type="text/javascript">' . 'window.location = "Add.php"'.'</script>';
        }
      }

      if(isset($_POST['done'])){
        $result1= "UPDATE quiz SET gamesubject='" . $_POST['subjects']."', gamename='". $_POST['name'] ."' WHERE gamecode='$code'";
   
        if($numrow <1){
          echo"<script>alert('Enter atleast 1 question! ')</script>";
        } else{
        if($conn->query($result1)===TRUE){
          echo '<script type="text/javascript">' .
          'console.log("Q1 updated successfully");</script>';
          echo '<script type="text/javascript">' . 'window.location = "CreateCode.php"'.'</script>';
    
        }else{
          echo '<script type="text/javascript">' .
          'console.log("FAILED!");</script>';
}      }}
    ?>
          </form>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../js/QuestionTable.js"></script>
  </body>
</html>