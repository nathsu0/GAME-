<?php
  include "codeconn.php";
  $result = mysqli_query($con1,"SELECT * from quiz ORDER BY RAND()");
  $qcount=  mysqli_num_rows($result);
  $count =1;
?>

<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bubble Popper</title>
    <link rel="stylesheet" href="../css/style.css"/>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
  function radioget(getValue){
    var awit = getValue;
     $.ajax({
                    type: "POST",
                    url: 'upload.php',
                    data: { awit : awit},
                    success: function(data){
                    }
                });
    console.log(awit);
  }

</script>

</head>
<body>
 <?php
    while ($row = mysqli_fetch_assoc($result)){
 ?>

  <div id = "questionModal<?php echo $count;?>" class="modal">
          <div class="modal-content" >
            <textarea id = "question<?php echo $count;?>" disabled><?php echo $count;?>. <?php echo $row['Question']; $_SESSION['Question'.$count]=$row['Question']; ?></textarea>
        </div>
       
   <form method="POST">
        <div class="choice">
          <input type="radio" id="answer1<?php echo $count;?>" name="choices<?php echo $count; ?>" value="D" onchange="radioget($(this).val())">
          <label for="answer1<?php echo $count;?>">A. <?php echo $row['A']; $_SESSION['A'.$count]=$row['A'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer2<?php echo $count;?>" name="choices<?php echo $count; ?>" value="C" onchange="radioget($(this).val())">
          <label for="answer2<?php echo $count;?>">B. <?php echo $row['B']; $_SESSION['B'.$count]=$row['B'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer3<?php echo $count;?>" name="choices<?php echo $count;?>" value="B" onchange="radioget($(this).val())">
          <label for="answer3<?php echo $count;?>">C. <?php echo $row['C'];  $_SESSION['C'.$count]=$row['C'];?></label>
          </div>
          <div class="choice">
          <input type="radio" id="answer4<?php echo $count;?>" name="choices<?php echo $count;?>" value="A" onchange="radioget($(this).val())">
          <label for="answer4<?php echo $count;?>">D. <?php echo $row['D']; $_SESSION['D'.$count]=$row['D'];?></label>
        </div>
      
    </form>
          <div class="choice-button">
          <button type="button" id="submitButton<?php echo $count;?>" class="button btn-bubble<?php echo $count;?>">Submit</button>
        </div>
      </div>
</div>



<div id="gameOverModal" class="modal4" >
  <div class="modal-content">
        <label id = "name">Total Scores : 50</label>
        <div class="gameover-button">
        <button id="restartButton" class="button btn-bubble1">Restart Game</button>
        <button id="exitButton" class="button btn-bubble1">Exit Game</button>
        </div>
  </div>
</div> 

<?php
$feed = TRUE;
if($_SESSION['answer']==$row['Answer']){
$feed = TRUE;
echo '<script type="text/javascript">' .
'console.log("tama naman");</script>';
}else{
  $feed = FALSE;
  echo '<script type="text/javascript">' .
'console.log("mali");</script>';
}
?>

<?php
$count++;
    }
?>

    <canvas id="canvas1"></canvas>
    <script type="text/javascript">var qcount = "<?= $qcount?>";var awit = "<?= $feed?>"</script>
    <script type="text/javascript" src="../js/gamewithquestion.js"></script>


 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/jquery-ui.js" type="text/javascript"></script>
<link href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/themes/blitzer/jquery-ui.css"
    rel="stylesheet" type="text/css" />
   
</body>
</html>