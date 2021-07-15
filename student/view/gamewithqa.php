<?php
  include "codeconn.php";
  $result = mysqli_query($con1,"SELECT * from quiz ORDER BY RAND()");
  $qcount=  mysqli_num_rows($result);
  $count =1;
  
$_SESSION['count']=$count;
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
      $_SESSION['answer'.$count]=$row['Answer'];
 ?>
  <div id = "questionModal<?php echo $count;?>" class="modal">
          <div class="modal-content" >
            <textarea id = "question<?php echo $count;?>" disabled><?php echo $count;?>. <?php echo $row['Question']; $_SESSION['Question'.$count]=$row['Question']; ?></textarea>
        </div>
   
        <div class="choice">
          <input type="radio" id="answer1<?php echo $count;?>" name="choices<?php echo $count; $_SESSION['A'.$count]=$row['A'];?>" value="A">
          <label for="answer1<?php echo $count;?>">A. <?php echo $row['A'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer2<?php echo $count;?>" name="choices<?php echo $count; $_SESSION['B'.$count]=$row['B'];?>" value="B">
          <label for="answer2<?php echo $count;?>">B. <?php echo $row['B'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer3<?php echo $count;?>" name="choices<?php echo $count; $_SESSION['C'.$count]=$row['C'];?>" value="C">
          <label for="answer3<?php echo $count;?>">C. <?php echo $row['C'];?></label>
          </div>
          <div class="choice">
          <input type="radio" id="answer4<?php echo $count;?>" name="choices<?php echo $count; $_SESSION['D'.$count]=$row['D'];?>" value="D">
          <label for="answer4<?php echo $count;?>">D. <?php echo $row['D'];?></label>
          <input type="hidden" id="rans<?php echo $count;?>" value ="<?php echo $row['Answer'];?>"></input>
        </div>
          <div class="choice-button">
          <button id="submitButton<?php echo $count;?>" class="button btn-bubble<?php echo $count;?>">Submit</button>
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

 <!------------------------------------------->
<!-- POP UP -->

<div id="popup1" class="overlay">
  <div class="popup-correct" id="popup-correct">
      <h2 style='color:green;'>Correct &#10004;</h2>
      <a class="close" href="#">×</a>
      <div class="content">
        <strong>Your response : </strong><labe>Penoy</label><br></br>
        <strong>Answer : </strong>Penoy
      </div>
    </div>
    <div class="popup-wrong "id="popup-wrong">
      <h2 style='color:red;'>Wrong &#10006;</h2>
      <a class="close" href="#">×</a>
      <div class="content">
        <strong>Your response : </strong><labe>balot</label><br></br>
        <strong>Answer : </strong>Penoy
      </div>
    </div>
  </div>

  <!------------------------------------------->


<!-- <div id="evaluationModal" class="modal2" style="display: none;">

  <div class="modal-content">
    <span class="close" style="font-size:60px; margin-right: -20%; margin-top: 12%;">&times;</span>
    <div><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <table>
        <tr>
          <th>Questions</th>
          <th>Your Answers</th>
          <th>Correct Answers</th>
        </tr>
        <tr>
          <td>1. Who is our National Hero</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>2. Who is our National Hero</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>3. Who is our National Hero</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>4. Who is our National Hero</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>5. Who is our National Hero</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
      </table>
        <button id="restartButton" >Restart Game</button>
        <button id="leaderboardsButton" >Leaderboards</button>
        <button id="exitButton" >Exit Game</button>
      </div>
  </div>
</div> -->

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
$rans = $row['Answer'];
$_SESSION['answer'.$count]=$rans;
$count++;
    }
?>

    <canvas id="canvas1"></canvas>
    <script type="text/javascript">var qcount = "<?= $qcount?>";</script>
    <script type="text/javascript" src="../js/gamewithquestion.js"></script>
<?php
$totalscore = "<script>document.write(tscore)</script>"; 
$_SESSION['score']= $totalscore;
?>
 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/jquery-ui.js" type="text/javascript"></script>
<link href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/themes/blitzer/jquery-ui.css"
    rel="stylesheet" type="text/css" />
   
</body>
</html>