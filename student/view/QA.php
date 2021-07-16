<?php
  include "codeconn.php";
  $qcount=$_SESSION['qcount'];
  $player=$_SESSION['player'];

  $count=1;
  $N1 = $_GET['NA1'];
  $N2 = $_GET['NA2'];
  $N3 = $_GET['NA3'];
  $N4 = $_GET['NA4'];
  $N5 = $_GET['NA5'];
  $N6 = $_GET['NA6'];
  $N7 = $_GET['NA7'];
  $N8 = $_GET['NA8'];
  $N9 = $_GET['NA9'];
  $N10 = $_GET['NA10'];
  $tscore = $_GET['total']
?>
<!doctype html>
<html lang="en">
  <head>
  <script >
      var a1 = sessionStorage.getItem("a1");
      var a2 = sessionStorage.getItem("a2");
      var a3 = sessionStorage.getItem("a3");
      var a4 = sessionStorage.getItem("a4");
      var a5 = sessionStorage.getItem("a5");
      var a6 = sessionStorage.getItem("a6");
      var a7 = sessionStorage.getItem("a7");
      var a8 = sessionStorage.getItem("a8");
      var a9 = sessionStorage.getItem("a9");
      var a10 = sessionStorage.getItem("a10");

  </script>
    <title>Evaluation</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../../asset/bootstrap-5.0.1-dist/css/bootstrap.min.css">
    <!---CREATE CSS-->
    <link rel="stylesheet" href="../css/QA.css">
    <link rel="stylesheet" href="../includes/common.css">
  </head>
  <body>
     <!----MAIN CONTAINER-->
    <div class="Main container">
      <!-----CONTENT IN CONTAINER-->
        <div class="Box container p-0">
          <!----CONTENT START------->
          <div class="blocks container ">


            <div class="content">
        <h4>SCORE: <?=$tscore?></h4>
        <?php 
        if(1<=$qcount){
           $q1 = "<script>document.write(a1)</script>";
           $ans1 = $_SESSION['answer'.$count];
            if($N1=='1'){
        ?>
           <div class="card-correct">
              <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <strong>Question 1: </strong> <?=$_SESSION['Question'.$count];?>
                <br>
                <strong>Choices : </strong> 
                <br> A. <?=$_SESSION['A'.$count];?>
                <br> B. <?=$_SESSION['B'.$count];?>
                <br> C. <?=$_SESSION['C'.$count];?>
                <br> D. <?=$_SESSION['D'.$count];?><br>
                <strong>Your answer : </strong> <?= $q1;?>
                <br>
              </div>
            </div>
        <?php
            }else{
        ?>
            <div class="card-wrong">
              <div class="card-body ">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
                <strong>Question 1: </strong> <?=$_SESSION['Question'.$count];?>
                <br>
                <strong>Choices : </strong> 
                <br> A. <?=$_SESSION['A'.$count];?>
                <br> B. <?=$_SESSION['B'.$count];?>
                <br> C. <?=$_SESSION['C'.$count];?>
                <br> D. <?=$_SESSION['D'.$count];?><br>
                <strong>Your answer : </strong> <?= $q1;?>
                <br>
                <strong>Correct Answer : </strong> <?=$ans1;?>
              </div>
            </div>
            <?php
        } 
          $count++;
    } else{
      echo '<script type="text/javascript">' .
      'console.log("Ubos na");</script>';
    }
        if(2<=$qcount){
           $q2 = "<script>document.write(a2)</script>";
           $ans2 = $_SESSION['answer'.$count];
            if($N2=='1'){
        ?>
           <div class="card-correct">
              <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <strong>Question 2: </strong> <?=$_SESSION['Question'.$count];?>
                <br>
                <strong>Choices : </strong> 
                <br> A. <?=$_SESSION['A'.$count];?>
                <br> B. <?=$_SESSION['B'.$count];?>
                <br> C. <?=$_SESSION['C'.$count];?>
                <br> D. <?=$_SESSION['D'.$count];?><br>
                <strong>Your answer : </strong> <?= $q2;?>
                <br>
              </div>
            </div>
        <?php
            }else{
        ?>
            <div class="card-wrong">
              <div class="card-body ">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
                <strong>Question 2: </strong> <?=$_SESSION['Question'.$count];?>
                <br>
                <strong>Choices : </strong> 
                <br> A. <?=$_SESSION['A'.$count];?>
                <br> B. <?=$_SESSION['B'.$count];?>
                <br> C. <?=$_SESSION['C'.$count];?>
                <br> D. <?=$_SESSION['D'.$count];?><br>
                <strong>Your answer : </strong> <?= $q2;?>
                <br>
                <strong>Correct Answer : </strong> <?=$ans2;?>
              </div>
            </div>
            <?php
        } 
          $count++;
    } else{
      echo '<script type="text/javascript">' .
      'console.log("Ubos na");</script>';
    }
        
        if(3<=$qcount){
           $q3 = "<script>document.write(a3)</script>";
           $ans3 = $_SESSION['answer'.$count];
            if($N3=='1'){
        ?>
           <div class="card-correct">
              <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <strong>Question 3: </strong> <?=$_SESSION['Question'.$count];?>
                <br>
                <strong>Choices : </strong> 
                <br> A. <?=$_SESSION['A'.$count];?>
                <br> B. <?=$_SESSION['B'.$count];?>
                <br> C. <?=$_SESSION['C'.$count];?>
                <br> D. <?=$_SESSION['D'.$count];?><br>
                <strong>Your answer : </strong> <?= $q3;?>
                <br>
              </div>
            </div>
        <?php
            }else{
        ?>
            <div class="card-wrong">
              <div class="card-body ">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
                <strong>Question 3: </strong> <?=$_SESSION['Question'.$count];?>
                <br>
                <strong>Choices : </strong> 
                <br> A. <?=$_SESSION['A'.$count];?>
                <br> B. <?=$_SESSION['B'.$count];?>
                <br> C. <?=$_SESSION['C'.$count];?>
                <br> D. <?=$_SESSION['D'.$count];?><br>
                <strong>Your answer : </strong> <?= $q3;?>
                <br>
                <strong>Correct Answer : </strong> <?=$ans3;?>
              </div>
            </div>
            <?php
        } 
          $count++;
    } else{
      echo '<script type="text/javascript">' .
      'console.log("Ubos na");</script>';
    }
    if(4<=$qcount){
      $q4 = "<script>document.write(a4)</script>";
      $ans4 = $_SESSION['answer'.$count];
       if($N4=='1'){
   ?>
      <div class="card-correct">
         <div class="card-body">
           <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
           </svg>
           <strong>Question 4: </strong> <?=$_SESSION['Question'.$count];?>
           <br>
           <strong>Choices : </strong> 
           <br> A. <?=$_SESSION['A'.$count];?>
           <br> B. <?=$_SESSION['B'.$count];?>
           <br> C. <?=$_SESSION['C'.$count];?>
           <br> D. <?=$_SESSION['D'.$count];?><br>
           <strong>Your answer : </strong> <?= $q4;?>
           <br>
         </div>
       </div>
   <?php
       }else{
   ?>
       <div class="card-wrong">
         <div class="card-body ">
           
           <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
           </svg>
           <strong>Question 4: </strong> <?=$_SESSION['Question'.$count];?>
           <br>
           <strong>Choices : </strong> 
           <br> A. <?=$_SESSION['A'.$count];?>
           <br> B. <?=$_SESSION['B'.$count];?>
           <br> C. <?=$_SESSION['C'.$count];?>
           <br> D. <?=$_SESSION['D'.$count];?><br>
           <strong>Your answer : </strong> <?= $q4;?>
           <br>
           <strong>Correct Answer : </strong> <?=$ans4;?>
         </div>
       </div>
       <?php
   } 
     $count++;
} else{
 echo '<script type="text/javascript">' .
 'console.log("Ubos na");</script>';
}
if(5<=$qcount){
  $q5 = "<script>document.write(a5)</script>";
  $ans5 = $_SESSION['answer'.$count];
   if($N5=='1'){
?>
  <div class="card-correct">
     <div class="card-body">
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
       </svg>
       <strong>Question 5: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q5;?>
       <br>
     </div>
   </div>
<?php
   }else{
?>
   <div class="card-wrong">
     <div class="card-body ">
       
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
       </svg>
       <strong>Question 5: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q5;?>
       <br>
       <strong>Correct Answer : </strong> <?=$ans5;?>
     </div>
   </div>
   <?php
} 
 $count++;
} else{
echo '<script type="text/javascript">' .
'console.log("Ubos na");</script>';
}
if(6<=$qcount){
  $q6 = "<script>document.write(a6)</script>";
  $ans6 = $_SESSION['answer'.$count];
   if($N6=='1'){
?>
  <div class="card-correct">
     <div class="card-body">
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
       </svg>
       <strong>Question 6: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q6;?>
       <br>
     </div>
   </div>
<?php
   }else{
?>
   <div class="card-wrong">
     <div class="card-body ">
       
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
       </svg>
       <strong>Question 6: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q6;?>
       <br>
       <strong>Correct Answer : </strong> <?=$ans6;?>
     </div>
   </div>
   <?php
} 
 $count++;
} else{
echo '<script type="text/javascript">' .
'console.log("Ubos na");</script>';
}
if(7<=$qcount){
  $q7 = "<script>document.write(a7)</script>";
  $ans7 = $_SESSION['answer'.$count];
   if($N7=='1'){
?>
  <div class="card-correct">
     <div class="card-body">
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
       </svg>
       <strong>Question 7: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q7;?>
       <br>
     </div>
   </div>
<?php
   }else{
?>
   <div class="card-wrong">
     <div class="card-body ">
       
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
       </svg>
       <strong>Question 7: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q7;?>
       <br>
       <strong>Correct Answer : </strong> <?=$ans7;?>
     </div>
   </div>
   <?php
} 
 $count++;
} else{
echo '<script type="text/javascript">' .
'console.log("Ubos na");</script>';
}
if(8<=$qcount){
  $q8 = "<script>document.write(a8)</script>";
  $ans8 = $_SESSION['answer'.$count];
   if($N8=='1'){
?>
  <div class="card-correct">
     <div class="card-body">
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
       </svg>
       <strong>Question 8: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q8;?>
       <br>
     </div>
   </div>
<?php
   }else{
?>
   <div class="card-wrong">
     <div class="card-body ">
       
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
       </svg>
       <strong>Question 8: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q8;?>
       <br>
       <strong>Correct Answer : </strong> <?=$ans8;?>
     </div>
   </div>
   <?php
} 
 $count++;
} else{
echo '<script type="text/javascript">' .
'console.log("Ubos na");</script>';
}
if(9<=$qcount){
  $q9 = "<script>document.write(a9)</script>";
  $ans9 = $_SESSION['answer'.$count];
   if($N9=='1'){
?>
  <div class="card-correct">
     <div class="card-body">
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
       </svg>
       <strong>Question 9: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q9;?>
       <br>
     </div>
   </div>
<?php
   }else{
?>
   <div class="card-wrong">
     <div class="card-body ">
       
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
       </svg>
       <strong>Question 9: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q9;?>
       <br>
       <strong>Correct Answer : </strong> <?=$ans9;?>
     </div>
   </div>
   <?php
} 
 $count++;
} else{
echo '<script type="text/javascript">' .
'console.log("Ubos na");</script>';
}
if(10<=$qcount){
  $q10 = "<script>document.write(a10)</script>";
  $ans10 = $_SESSION['answer'.$count];
   if($N10=='1'){
?>
  <div class="card-correct">
     <div class="card-body">
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
       </svg>
       <strong>Question 10: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q10;?>
       <br>
     </div>
   </div>
<?php
   }else{
?>
   <div class="card-wrong">
     <div class="card-body ">
       
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
       </svg>
       <strong>Question 10: </strong> <?=$_SESSION['Question'.$count];?>
       <br>
       <strong>Choices : </strong> 
       <br> A. <?=$_SESSION['A'.$count];?>
       <br> B. <?=$_SESSION['B'.$count];?>
       <br> C. <?=$_SESSION['C'.$count];?>
       <br> D. <?=$_SESSION['D'.$count];?><br>
       <strong>Your answer : </strong> <?= $q10;?>
       <br>
       <strong>Correct Answer : </strong> <?=$ans10;?>
     </div>
   </div>
   <?php
} 
} else{
echo '<script type="text/javascript">' .
'console.log("Ubos na");</script>';
}
        ?>

            <div class="container d-flex justify-content-end">
              <a href="Score.html" type="button" class="button btn-bubble1">Close</a>
          </div> 
        </div>
      </div>  
      </div>
    </div>  

    <canvas></canvas>
 
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="../../asset/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript"src="../js/QA.js"></script>
    <script src="../includes/background.js"></script>
  </body>
</html>