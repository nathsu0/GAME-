<?php
  session_start();
  $code=$_SESSION['code'];
  $conn=new mysqli('localhost','root','',$code);
  $count=1;
  $res = mysqli_query($conn,"SELECT * FROM quiz ORDER BY RAND()" );
  $qcount =  mysqli_num_rows($res);
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
 
<!-- Start Modal -->
<!-- <div id="startModal" class="modal1" style="display: none;">
  <div class="modal-content"><br><br><br><br><br><br>
    <div><br><br><br><br><br><br><br><br><br><br><br>
        <textarea id = "name" >Enter Name</textarea><br><br><br>
        <button id="playButton" >Start Game</button>
      </div>
  </div>
</div> -->
<div id="instructionModal" class="modal3" style="display: none;">
  <div class="modal-content">
    <span class="close" style="font-size:60px; margin-right: -20%; margin-top: 13%;">&times;</span><br><br><br><br>
    <div><br><br><br><br><br><br><br><br><br><br>
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

  <!--Game Story Modal -->
  <!-- <div id="gameStoryModal" class="modal1" style="display: none;"> 
    <div class="modal-content">
      <span class="close">&times;</span><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <h2>Carousel Example</h2>
        
        <br><br><br><br>
        <button id = "skip" > Skip</button>
    </div>
  </div> -->
<?php
   while($row=mysqli_fetch_assoc($res)){
    ?>
?>
  <div id = "questionModal<?php echo $count;?>" class="modal">
          <div class="modal-content" >
            <textarea id = "question1" disabled> <?php echo $count;?>. <?php echo $row['Question'];?></textarea>
        </div>
        <div class="choice">
          <input type="radio" id="answer1" name="choices<?php echo $count;?>" value="A" >
          <label for="answer1"><?php echo $row['A'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer2" name="choices<?php echo $count;?>" value="B" >
          <label for="answer2"><?php echo $row['B'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer3" name="choices<?php echo $count;?>" value="C"  >
          <label for="answer3"><?php echo $row['C'];?></label>
          </div>
          <div class="choice">
          <input type="radio" id="answer4" name="choices<?php echo $count;?>" value="D" >
          <label for="answer4"><?php echo $row['D'];?></label>
        </div>
          <div class="choice-button">
          <button id="submitButton<?php echo $count;?>" class="button btn-bubble1">Submit</button>
        </div>
      </div>
</div>
<?php

$count++;
}?>
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
        <label id = "name">Total Scores : 50</label>
        <div class="gameover-button">
        <button id="restartButton" class="button btn-bubble1">Restart Game</button>
        <button id="exitButton" class="button btn-bubble1">Exit Game</button>
        </div>
  </div>
</div> 

    
    <script type="text/javascript">var qcount = "<?= $qcount ?>";</script>
    <canvas id="canvas1"></canvas>
    <script type="text/javascript" src="../js/gamewithquestion.js"></script>
 
    
   
</body>
</html>
 