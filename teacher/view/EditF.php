
<?php
          session_start();
          $user = $_SESSION['username'];
          $code = $_GET['code'];
          include 'conn.php';
          $id = $_GET['ID'];
          $num = $_GET['num'];
          $result = mysqli_query($conn,"SELECT * FROM quiz_question WHERE id='$id'");
          $row = mysqli_fetch_assoc($result);
?><!doctype html>
<html lang="en">
  <head>
    <title>Edit Question <?php echo $num?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/Create.css">
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
<form method="post" action="">
          <!----CONTENT START------->
          <div class="blocks container">
          <div class="form-floating m-2">
            <input class="form-control" name="question" value="<?php echo $row["question"];?>" id="floatingTextarea2" style="height: 100px"></input>
            <label for="floatingTextarea2"><?php echo $num;?>. </label>
          </div>
          <div class="container m-2">
            <div class="row">
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="A"name="flexRadioDefault" id="flexRadioDefault11" <?php if ($row['answer']=="A"){echo "checked";}?>>
               
                <input class="answer"type="text"id="ans1" name="A" value="<?php echo $row['A'];?>">
              </input>
              </div>
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="B" name="flexRadioDefault" id="flexRadioDefault12" <?php if ($row['answer']=="B"){echo "checked";}?>>
                
                <input class="answer"type="text"id="ans2" name="B"  value="<?php echo $row['B'];?>">
              </input>
              </div>
            </div>
            <div class="row ">
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="C" name="flexRadioDefault" id="flexRadioDefault13"<?php if ($row['answer']=="C"){echo "checked";}?>>
                
                <input class="answer"type="text"id="ans3" name="C"  value="<?php echo $row['C'];?>">
              </input>
              </div>
              <div class="form-check col-sm">
                <input class="form-check-input" type="radio" value="D" name="flexRadioDefault" id="flexRadioDefault14" <?php if ($row['answer']=="D"){echo "checked";}?>>
                
                <input class="answer"type="text"id="ans4" name="D" value="<?php echo $row['D'];?>">
              </input>
              </div>
          </div>
          </div>
          <!---RADIOT BUTTON ENDS-->
          <div class="container d-flex justify-content-end">
          <button type="submit" name='done' class="button">
                  Save
                  <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </button>
          <a href="QuestionTable.php?code=<?=$code?>" type="button" class="button">
            Cancel
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </a>
          </div>
        </div>
      </div>
      <?php
    if(isset($_POST['done'])){
    
    
    $result1= "UPDATE quiz_question SET question='" . $_POST['question']."', A='". $_POST['A'] ."', 
    B='". $_POST['B'] ."', C='". $_POST['C'] ."', D='". $_POST['D'] ."', answer='".$_POST['flexRadioDefault']."' WHERE ID='$id'";
    if($conn->query($result1)===TRUE){
      $_POST['edoc']=$code;
      echo '<script type="text/javascript">' .
      'console.log("Q1 updated successfully");</script>';
      echo '<script type="text/javascript">' . 'window.location = "QuestionTable.php"'.'</script>';

    }else{
      echo '<script type="text/javascript">' .
      'console.log("FAILED!");</script>';
    }
  }
?>
</form>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script src="../js/Create.js"></script>
  </body>
</html>