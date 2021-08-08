<?php
 session_start();
  include "conn.php";
  $code=$_SESSION['code'];
  $result = mysqli_query($conn,"SELECT * from quiz_question WHERE gamecode ='$code' ORDER BY RAND()");
  $qcount=  mysqli_num_rows($result);
  $count =1;
  
$player=$_SESSION['player'];
$_SESSION['count']=$count;
$_SESSION['qcount']=$qcount;
?>

<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bubble Popper</title>
    <link rel="stylesheet" href="../css/style.css"/>



</head>
<body>
 <?php
    while ($row = mysqli_fetch_assoc($result)){
      $_SESSION['answer'.$count]=$row['answer'];
 ?>
  <div id = "questionModal<?php echo $count;?>" class="modal">
          <div class="modal-content" >
            <textarea id = "question<?php echo $count;?>" disabled><?php echo $count;?>.) <?php echo $row['question']; $_SESSION['question'.$count]=$row['question']; ?></textarea>
        </div>
   
        <div class="choice">
          <input type="radio" id="answer1<?php echo $count;?>" name="choices<?php echo $count; $_SESSION['A'.$count]=$row['A'];?>" value="<?php echo $row['A'];?>">
          <label for="answer1<?php echo $count;?>"><?php echo $row['A'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer2<?php echo $count;?>" name="choices<?php echo $count; $_SESSION['B'.$count]=$row['B'];?>" value="<?php echo $row['B'];?>">
          <label for="answer2<?php echo $count;?>"><?php echo $row['B'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer3<?php echo $count;?>" name="choices<?php echo $count; $_SESSION['C'.$count]=$row['C'];?>" value="<?php echo $row['C'];?>">
          <label for="answer3<?php echo $count;?>"><?php echo $row['C'];?></label>
          </div>
          <div class="choice">
          <input type="radio" id="answer4<?php echo $count;?>" name="choices<?php echo $count; $_SESSION['D'.$count]=$row['D'];?>" value="<?php echo $row['D'];?>">
          <label for="answer4<?php echo $count;?>"><?php echo $row['D'];?></label>
          <input type="hidden" id="rans<?php echo $count;?>" value ="<?php $rem =$row['answer'];
          echo $row[$rem];?>"></input>
        </div>
          <div class="choice-button">
          <button id="submitButton<?php echo $count;?>" class="button btn-bubble1">Submit</button>
        </div>
      </div>
</div>


<div id="instructionModal" class="modal3" style="display: none;">
  <div class="modal-contentw">
    <span class="close">
      <ul >
        <li>The players will have five (5) life points every game.</li>
        <li>The players should pop the bubbles orderly to move to the next level.</li>
        <li>Every wrong pop of bubbles, the life points will decrease by one (1). </li>
        <li>The players must have at least one (1) life points to finish all levels.</li>
        <li>The players should answer correctly to gain points.</li>
        <li>Questions and answers are in multiple choice format. The players need to choose only one (1) answer.</li>
        <li>The timer is set for only seven(7) seconds in every level to show the numbers inside the bubble.</li>
        <li>For every level completed, the player will gain 10 points.</li>
        <li>The total scores will show after the player completes the game or if all life points are consumed.</li>
      </ul>  
      </div>
  </div>
</div>


<div id="gameOverModal" class="modal4" >
  <div class="modal-content">
        <label id = "name"></label>
        <div class="gameover-button">
        <button id="restartButton" class="button btn-bubble1">Restart Game</button>
        <button id="exitButton" class="button btn-bubble1">Exit Game</button>
        </div>
  </div>
</div> 

<?php
$rans = $row[$rem];
$_SESSION['answer'.$count]=$rans;
$totalscore = "<script>document.write(tscore)</script>"; 
$count++;
    }

?>
    <canvas id="canvas1"></canvas>
    <script type="text/javascript">var qcount = "<?= $qcount?>";</script>
    <script type="text/javascript" src="../js/gamewithquestion.js"></script>

 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/jquery-ui.js" type="text/javascript"></script>
<link href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/themes/blitzer/jquery-ui.css"
    rel="stylesheet" type="text/css" />
   
</body>
</html>