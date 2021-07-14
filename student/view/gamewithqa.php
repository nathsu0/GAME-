<?php
  session_start();
  $code=$_SESSION['code'];
  $conn=new mysqli('localhost','root','',$code);
  $count=1;
  $res = mysqli_query($conn,"SELECT * FROM quiz ORDER BY RAND()" );
  $qcount =  mysqli_num_rows($res);
  $_SESSION['qcount']=$qcount;
  $boolean = "BooleanResult"

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

<form id ='myform' method='post' action=''>
<?php
   while($row=mysqli_fetch_assoc($res)){
    ?>
  <div id = "questionModal<?php echo $count;?>" class="modal">
          <div class="modal-content" >
            <textarea id = "question1" disabled> <?php echo $count;?>. <?php echo $row['Question']; $_SESSION['Question'.$count]=$row['Question'];?></textarea>
        </div>
        <div class="choice">
          <input type="radio" id="answer1" name="choices<?php echo $count;$_SESSION['A'.$count]=$row['A'];?>" value="A" >
          <label for="answer1">A. <?php echo $row['A'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer2" name="choices<?php echo $count;$_SESSION['B'.$count]=$row['B'];?>" value="B" >
          <label for="answer2">B. <?php echo $row['B'];?></label>
        </div>
          <div class="choice">
          <input type="radio" id="answer3" name="choices<?php echo $count;$_SESSION['C'.$count]=$row['C'];?>" value="C" >
          <label for="answer3">C. <?php echo $row['C'];?></label>
          </div>
          <div class="choice">
          <input type="radio" id="answer4" name="choices<?php echo $count;$_SESSION['D'.$count]=$row['D'];?>" value="D" >
          <label for="answer4">D. <?php echo $row['D'];?></label>
        </div>
          <div class="choice-button">
          <button type='button'  onclick="displayRadioValue()"name="submitButton<?php echo $count;?>" id="submitButton<?php echo $count;?>" class="button btn-bubble1" >Submit</button>
          
        </div>
      </div>
</div>
<div id="result"></div>
<?php
$_SESSION['correct'.$count]=  $row['Answer'];
$_SESSION['count'] = $count;

$count++;
}

?>
<script>
        function displayRadioValue() {
            var ele = document.getElementsByName("choices<?php echo $count;?>");
              alert(ele);
            }
        }
</script>

<!---<script type="text/javascript">
if(isset($_POST['submitButton'.$count])){
  $answer =$_POST['choices'.$count];
  $_SESSION['answer'.$count]= $answer;
}
$("submitButton<?php //echo $count;?>").click(function(){
      var answer = $(".choices<?php //echo $count;?>:checked").val();
      var count = <?php //echo $count?>;
      console.log(answer);
  
})
</script>-->
</form>
<!---<script>
  function myFunction(){
    var answer = document.getElementById("myForm").submit();
    console.log(answer);
    $.ajax({ 
    type: "POST",
    url: "data.php",
    data: {answer:answer, count:count},
    dataType: "json",
    success: function(result){     
    }
  });    
  }
</script>-->

<div id="gameOverModal" class="modal4" >
  <div class="modal-content">
        <label id = "name">Total Scores : 50</label>
        <div class="gameover-button">
        <button id="restartButton" class="button btn-bubble1">Restart Game</button>
        <button id="exitButton" class="button btn-bubble1">Exit Game</button>
        </div>
  </div>
</div> 

<script type="text/javascript">let qcount = "<?php echo $qcount?>"</script>
    <canvas id="canvas1"></canvas>
    <script src="../js/gamewithquestion.js"></script>
 
    
    
</body>
</html>
 