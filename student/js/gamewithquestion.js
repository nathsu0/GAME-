//calling canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// const time =  document.getElementById("time");
var score=0;
var instructionModal = document.getElementById("instructionModal");
var span = document.getElementsByClassName("close")[0];

// Get the 1st question modal
var questionModal1 = document.getElementById("questionModal1");

var btnSubmit1 = document.getElementById("submitButton1");

// Get the 2nd question modal
var questionModal2 = document.getElementById("questionModal2");

var btnSubmit2 = document.getElementById("submitButton2");

// Get the 3rd question modal
var questionModal3 = document.getElementById("questionModal3");

var btnSubmit3 = document.getElementById("submitButton3");

// Get the 4th question modal
var questionModal4 = document.getElementById("questionModal4");

var btnSubmit4 = document.getElementById("submitButton4");

// Get the 5th question modal
var questionModal5 = document.getElementById("questionModal5");

var btnSubmit5 = document.getElementById("submitButton5");

// Get the 6th question modal
var questionModal6 = document.getElementById("questionModal6");

var btnSubmit6 = document.getElementById("submitButton6");

// Get the 7th question modal
var questionModal7 = document.getElementById("questionModal7");

var btnSubmit7 = document.getElementById("submitButton7");

// Get the 8th question modal
var questionModal8 = document.getElementById("questionModal8");

var btnSubmit8 = document.getElementById("submitButton8");

// Get the 9th question modal
var questionModal9 = document.getElementById("questionModal9");

var btnSubmit9 = document.getElementById("submitButton9");

// Get the 10th question modal
var questionModal10 = document.getElementById("questionModal10");

var btnSubmit10 = document.getElementById("submitButton10");

//feedback modals
// var correctFeedback = document.getElementById("popup-correct");

// var wrongFeedback = document.getElementById("wrong");

// Get the summary of game over modal
var gameOverModal = document.getElementById("gameOverModal");
var restartButton = document.getElementById("restartButton");
var exitButton = document.getElementById("exitButton");

var N = 0;

//setting canvas size
const CANVAS_WIDTH = canvas.width = document.documentElement.clientWidth * 0.8;
const CANVAS_HEIGHT =canvas.height =  document.documentElement.clientHeight * 0.8;

//background image path
// const bgImage = new Image();
// bgImage.src = "bg2.jpg";

//Bubble Animation Path
const bubbleImage = new Image();
bubbleImage.src = "../img/bubble animation.png";

//life points image path
const life = new Image();
life.src = "../img/heart.png";

//exit button image path
const exit = new Image();
exit.src = "../img/exit.png";

//instruction button image path
const instruction = new Image();
instruction.src = "../img/instruction.png";


//Sprite Size
const spriteWidth = 210;
const spriteHeight = 208;

//Image Size
const imageWidth = CANVAS_WIDTH * 0.12;
const imageHeight = CANVAS_WIDTH * 0.12;

//animation speed
let staggerFrames = 10;

//game Level
let randomNumLevel = 1;

//timer status 
let timerStatus = false;
let timer = 7;
// let timer2 = 7;
let interval = 1000;
let timeString = "Time left :";



let startGameStatus = false;

let questionStatus1 = false;
let questionStatus2 = true;
let questionStatus3 = true;
let questionStatus4 = true;
let questionStatus5 = true;
let questionStatus6 = true;
let questionStatus7 = true;
let questionStatus8 = true;
let questionStatus9 = true;
let questionStatus10 = true;

//php variable
var totalCountOfQuestions = qcount;

var N1=0 ;
var N2 =0;
var N3 =0;
var N4 =0;
var N5 =0;
var N6 =0;
var N7 =0;
var N8 =0;
var N9 =0;
var N10 =0;
var a1 ;
var a2 ;
var a3 ;
var a4 ;
var a5 ;
var a6 ;
var a7 ;
var a8 ;
var a9 ;
var a10 ;

// let resetStatus = false;


function timex(){
    var renderPositionX = CANVAS_WIDTH * 0.45;
    var renderPositionX2 = CANVAS_WIDTH * 0.4;
    var renderPositionY = CANVAS_HEIGHT * 0.1;

    ctx.font = "bold 2.5vw Verdana";
    if(timerStatus == false){
        ctx.fillText(timeString +" "+ timer, renderPositionX ,renderPositionY);
    }
    else
    ctx.fillText(timeString, renderPositionX2,renderPositionY);

if(startGameStatus == true || questionStatus1 == true){
    requestAnimationFrame(timex);
}
// setInterval(timex,1000);
};

function Timer(){
    // timex(timeString, timer);
    
if(startGameStatus == true || questionStatus1 == true){
    setInterval(function(){
        if(timer >= 1){
            timer--;  
            // timex();
        }
        else if(timer <= 1){
        // time.innerHTML="Arrange their numbers!";
        // timex();
        //empty bubble text
        bubble1.bubbleNum = " ";
        bubble2.bubbleNum = " ";
        bubble3.bubbleNum = " ";
        bubble4.bubbleNum = " ";
        bubble5.bubbleNum = " ";
        bubble6.bubbleNum = " ";
        bubble7.bubbleNum = " ";
        bubble8.bubbleNum = " ";
        timeString = "Pop the Bubbles!" ;

        timerStatus = true;
        
      }
    }, interval);
}
}   



function startGame(){
    // if(startGameStatus == false){
    //     // When the user clicks the button, open the modal 
    //     startModal.style.display = "block";
    //     // questionStatus5 = false;
    //     // evaluation();
    //     // allQuestionsModal.style.display = "block";
        
    // }
    startGameStatus = true;
        bubbleRespawn();
        console.log(imageWidth," , ", imageHeight);
     
     // When the user clicks on playButton, close the modal and start the game
    //  btnStart.onclick = function() {
    //    startModal.style.display = "none";
    //    gameStoryModal.style.display = "block";
    //  }

    //  btnSkip.onclick = function() {
    //     gameStoryModal.style.display = "none";
    //    startGameStatus = true;
    //     bubbleRespawn();
    //   }

    // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//     gameStoryModal.style.display = "none";
//   }

 

  // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == mechanicsModal) {
//         mechanicsModal.style.display = "none";
//     }
//   }
  
  
    // requestAnimationFrame(startGame);
}

function multipleChoiceQuestion(){
        if(questionStatus1 == false){
            questionModal1.style.display = "block";
            startGameStatus = false;
        }
        btnSubmit1.onclick= function() {
                questionStatus1 = true;
                console.log(questionStatus1);

            var rans = document.getElementById("rans1").value;
            var radioValue = $("input[name='choices1']:checked").val();
            if(radioValue== rans){
                var feedbackStatus1 = true;
                score = score+10;
                N1 = 1;
                a1=radioValue;
            }else {
               a1=radioValue;
                var feedbackStatus1 = false;
            }
            sessionStorage.setItem("N1", N1);
            sessionStorage.setItem("a1", a1);
      
            if(totalCountOfQuestions != 1){
                if(feedbackStatus1 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal1.style.display = "none";}, 50);
                           
                   
                }else if(feedbackStatus1 == false){
                    wrongChoice();
                    //alert("Answer is Incorrect! ");
		        setTimeout(function() {alert("Answer is Incorrect!");
                	questionModal1.style.display = "none";}, 50);
                       
                }  //reset Staggering frame
                staggerFrames = 10;


                //reset bubble 1 variables
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1));
                bubble1.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15);

                //reset bubble 2 variables
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble2.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);

                //reset bubble 3 variables
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble3.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);

                //reset bubble 4 variables
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble4.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);

                //reset bubble 4 variables
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble5.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);

                //reset bubble 6 variables
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6));
                bubble6.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);

                //reset bubble 7 variables
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78));
                bubble7.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);

                //reset bubble 8 variables
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6));
                bubble8.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);


                timerStatus = false;
                timeString = "Time left :"
                timer = 8;
                interval = 1000;

                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;

                bubbleRespawn();

                    if(lifes.lives < 5){
                        reduceLifePoints();
                    }else if(lifes.lives == 5){
                        lifePoints();
                    }

            }else if(totalCountOfQuestions == 1){
                if(feedbackStatus1 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal1.style.display = "none";}, 50);
                    gameOver();
                }else if(feedbackStatus1 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal1.style.display = "none";}, 50);
                    gameOver();
                }
            }
                
                        
        }
    
        if(questionStatus2 == false){
            questionModal2.style.display = "block";
        }
        btnSubmit2.onclick= function() {
                questionStatus2 = true;
                console.log(questionStatus2);

            var rans2 = document.getElementById("rans2").value;
            var radioValue2 = $("input[name='choices2']:checked").val();
            if(radioValue2== rans2){
                var feedbackStatus2 =true;
                score = score+10;
                N2 = 1;
                a2=radioValue2;
            }else {
                a2=radioValue2;
                var feedbackStatus2 = false;
            }
            sessionStorage.setItem("N2", N2);
            sessionStorage.setItem("a2", a2);
                
            if(totalCountOfQuestions != 2){
                if(feedbackStatus2 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal2.style.display = "none";}, 50);
                   
                }else if(feedbackStatus2 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal2.style.display = "none";}, 50);
                }
                
            //reset Staggering frame
            staggerFrames = 10;

            //reset bubble 1 variables
            bubble1.frameX =0;
            bubble1.frameY = 0;
            bubble1.gameFrame = 0;
            bubble1.bubbleStatus = false;
            bubble1.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1));
            bubble1.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15);

            //reset bubble 2 variables
            bubble2.frameX =0;
            bubble2.frameY = 0;
            bubble2.gameFrame = 0;
            bubble2.bubbleStatus = false;
            bubble2.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
            bubble2.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);

            //reset bubble 3 variables
            bubble3.frameX =0;
            bubble3.frameY = 0;
            bubble3.gameFrame = 0;
            bubble3.bubbleStatus = false;
            bubble3.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
            bubble3.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);

            //reset bubble 4 variables
            bubble4.frameX =0;
            bubble4.frameY = 0;
            bubble4.gameFrame = 0;
            bubble4.bubbleStatus = false;
            bubble4.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
            bubble4.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);

            //reset bubble 4 variables
            bubble5.frameX =0;
            bubble5.frameY = 0;
            bubble5.gameFrame = 0;
            bubble5.bubbleStatus = false;
            bubble5.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
            bubble5.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);

            //reset bubble 6 variables
            bubble6.frameX =0;
            bubble6.frameY = 0;
            bubble6.gameFrame = 0;
            bubble6.bubbleStatus = false;
            bubble6.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6));
            bubble6.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);

            //reset bubble 7 variables
            bubble7.frameX =0;
            bubble7.frameY = 0;
            bubble7.gameFrame = 0;
            bubble7.bubbleStatus = false;
            bubble7.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78));
            bubble7.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);

            //reset bubble 8 variables
            bubble8.frameX =0;
            bubble8.frameY = 0;
            bubble8.gameFrame = 0;
            bubble8.bubbleStatus = false;
            bubble8.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6));
            bubble8.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);


            timerStatus = false;
            timeString = "Time left :"
            timer = 8;
            interval = 1000;

            // randomNumLevel = Math.floor(Math.random() * 3)+1;
            randomNumLevel++;

            bubbleRespawn();

                if(lifes.lives < 5){
                    reduceLifePoints();
                }else if(lifes.lives == 5){
                    lifePoints();
                }
            }else if(totalCountOfQuestions == 2){
                if(feedbackStatus2 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal2.style.display = "none";}, 50);
                    gameOver();
                }else if(feedbackStatus2 == false){
                   wrongChoice();
                   setTimeout(function() {alert("Answer is Incorrect!");
                       questionModal2.style.display = "none";}, 50);
                    gameOver();
                }
            }
        }

        if(questionStatus3 == false){
            questionModal3.style.display = "block";
        }
        btnSubmit3.onclick= function() {
                questionStatus3 = true;
                console.log(questionStatus3);
                var rans3 = document.getElementById("rans3").value;
                var radioValue3 = $("input[name='choices3']:checked").val();
                if(radioValue3== rans3){
                    var feedbackStatus3 = true;
                    score = score+10;
                    a3=radioValue3;
                    N3 = 1;
                    a3=radioValue3;
                }else { 
                    a3=radioValue3;
                    var feedbackStatus3 = false;
                }
                sessionStorage.setItem("N3", N3);
            sessionStorage.setItem("a3", a3);

            if(totalCountOfQuestions != 3){  
                if(feedbackStatus3 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal3.style.display = "none";}, 50);
                }else if(feedbackStatus3 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal3.style.display = "none";}, 50);
                }
                //reset Staggering frame
                staggerFrames = 10;
    
                //reset bubble 1 variables
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1));
                bubble1.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 2 variables
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble2.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 3 variables
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble3.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 4 variables
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble4.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 4 variables
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble5.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 6 variables
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6));
                bubble6.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 7 variables
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78));
                bubble7.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 8 variables
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6));
                bubble8.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
    
                timerStatus = false;
                timeString = "Time left :"
                timer = 8;
                interval = 1000;
    
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
    
                bubbleRespawn();
    
                    if(lifes.lives < 5){
                        reduceLifePoints();
                    }else if(lifes.lives == 5){
                        lifePoints();
                    }
            }else if(totalCountOfQuestions == 3){
                if(feedbackStatus3 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal3.style.display = "none";}, 50);
                    gameOver();
                }else if(feedbackStatus3 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal3.style.display = "none";}, 50);
                    gameOver();
                }
            }
          
        }

        if(questionStatus4 == false){
            questionModal4.style.display = "block";
        }
        btnSubmit4.onclick= function() {
                questionStatus4 = true;
                console.log(questionStatus4);
                var rans4 = document.getElementById("rans4").value;
                var radioValue4 = $("input[name='choices4']:checked").val();
                if(radioValue4== rans4){
                    var feedbackStatus4 = true;
                    score = score+10;
                    N4 = 1;
                    a4=radioValue4;
                }else {
                    a4=radioValue4;
                    var feedbackStatus4 = false;
                }
                sessionStorage.setItem("N4", N4);
                sessionStorage.setItem("a4", a4);

            if(totalCountOfQuestions != 4){
                if(feedbackStatus4 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal4.style.display = "none";}, 50);
                }else if(feedbackStatus4 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal4.style.display = "none";}, 50);
                }
                //reset Staggering frame
                staggerFrames = 10;
    
                //reset bubble 1 variables
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1));
                bubble1.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 2 variables
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble2.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 3 variables
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble3.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 4 variables
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble4.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 4 variables
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble5.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 6 variables
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6));
                bubble6.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 7 variables
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78));
                bubble7.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 8 variables
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6));
                bubble8.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
    
                timerStatus = false;
                timeString = "Time left :"
                timer = 8;
                interval = 1000;
    
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
    
                bubbleRespawn();
    
                    if(lifes.lives < 5){
                        reduceLifePoints();
                    }else if(lifes.lives == 5){
                        lifePoints();
                    }
            }else if(totalCountOfQuestions == 4){
                if(feedbackStatus4 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal4.style.display = "none";}, 50);
                    gameOver();
                }else if(feedbackStatus4 == false){
                   wrongChoice();
                   setTimeout(function() {alert("Answer is Incorrect!");
                       questionModal4.style.display = "none";}, 50);
                    gameOver();
                }
            }
        }

        if(questionStatus5 == false){
            questionModal5.style.display = "block";
        }
        btnSubmit5.onclick= function() {
                questionStatus5 = true;
                var rans5 = document.getElementById("rans5").value;
            var radioValue5 = $("input[name='choices5']:checked").val();
            if(radioValue5== rans5){
                var feedbackStatus5= true;
                score = score+10;
                N5 = 1;
                a5=radioValue5;
            }else {
               a5=radioValue5;
                var feedbackStatus5 = false;
            }
                sessionStorage.setItem("N5", N5);
                sessionStorage.setItem("a5", a5);

            if(totalCountOfQuestions != 5){
                if(feedbackStatus5 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal5.style.display = "none";}, 50);
                }else if(feedbackStatus5 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal5.style.display = "none";}, 50);
                }
                //reset Staggering frame
                staggerFrames = 10;
    
                //reset bubble 1 variables
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1));
                bubble1.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 2 variables
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble2.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 3 variables
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble3.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 4 variables
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble4.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 4 variables
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble5.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 6 variables
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6));
                bubble6.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 7 variables
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78));
                bubble7.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 8 variables
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6));
                bubble8.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
    
                timerStatus = false;
                timeString = "Time left :"
                timer = 8;
                interval = 1000;
    
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
    
                bubbleRespawn();
    
                    if(lifes.lives < 5){
                        reduceLifePoints();
                    }else if(lifes.lives == 5){
                        lifePoints();
                    }
            }else if(totalCountOfQuestions == 5){
                if(feedbackStatus5 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal5.style.display = "none";}, 50);
                    gameOver();
                }else if(feedbackStatus5 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal5.style.display = "none";}, 50);
                    gameOver();
                }
            }

        }

        if(questionStatus6 == false){
            questionModal6.style.display = "block";
        }
        btnSubmit6.onclick= function() {
                questionStatus6 = true;
                var rans6 = document.getElementById("rans6").value;
                var radioValue6 = $("input[name='choices6']:checked").val();
                if(radioValue6== rans6){
                    var feedbackStatus6 = true;
                    score = score+10;
                N6 = 1;
                a6=radioValue6;
                }else {
                    a6=radioValue6;
                    var feedbackStatus6 = false;
                }
                sessionStorage.setItem("N6", N6);
                sessionStorage.setItem("a6", a6);
            if(totalCountOfQuestions != 6){
                if(feedbackStatus6 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal6.style.display = "none";}, 50);
                }else if(feedbackStatus6 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal6.style.display = "none";}, 50);
                }
                //reset Staggering frame
                staggerFrames = 10;
    
                //reset bubble 1 variables
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1));
                bubble1.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 2 variables
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble2.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 3 variables
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble3.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 4 variables
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble4.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 4 variables
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble5.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 6 variables
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6));
                bubble6.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 7 variables
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78));
                bubble7.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 8 variables
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6));
                bubble8.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
    
                timerStatus = false;
                timeString = "Time left :"
                timer = 8;
                interval = 1000;
    
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
    
                bubbleRespawn();
    
                    if(lifes.lives < 5){
                        reduceLifePoints();
                    }else if(lifes.lives == 5){
                        lifePoints();
                    }
            }else if(totalCountOfQuestions == 6){
                if(feedbackStatus6 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal6.style.display = "none";}, 50);
                    gameOver();
                }else if(feedbackStatus6 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal6.style.display = "none";}, 50);
                    gameOver();
                }
            }
        }

        if(questionStatus7 == false){
            questionModal7.style.display = "block";
        }
        btnSubmit7.onclick= function() {
                questionStatus7 = true;
                var rans7 = document.getElementById("rans7").value;
                var radioValue7 = $("input[name='choices7']:checked").val();
                if(radioValue7== rans7){
                    var feedbackStatus7 = true;
                    score = score+10;
                    N7 = 1;
                    a7=radioValue7;
                }else {
                    a7=radioValue7;
                    var feedbackStatus7 = false;
                }
                sessionStorage.setItem("N7", N7);
                sessionStorage.setItem("a7", a7);
            if(totalCountOfQuestions != 7){
                if(feedbackStatus7 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal7.style.display = "none";}, 50);
                }else if(feedbackStatus7 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Imcorrect!");
                        questionModal7.style.display = "none";}, 50);
                }
                //reset Staggering frame
                staggerFrames = 10;
    
                //reset bubble 1 variables
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1));
                bubble1.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 2 variables
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble2.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 3 variables
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble3.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 4 variables
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble4.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 4 variables
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble5.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 6 variables
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6));
                bubble6.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 7 variables
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78));
                bubble7.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 8 variables
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6));
                bubble8.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
    
                timerStatus = false;
                timeString = "Time left :"
                timer = 8;
                interval = 1000;
    
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
    
                bubbleRespawn();
    
                    if(lifes.lives < 5){
                        reduceLifePoints();
                    }else if(lifes.lives == 5){
                        lifePoints();
                    }
            }else if(totalCountOfQuestions == 7){
                if(feedbackStatus7 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal7.style.display = "none";}, 50);
                    gameOver();
                }else if(feedbackStatus7 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Imcorrect!");
                        questionModal7.style.display = "none";}, 50);
                    gameOver();
                }
            }
        }

        if(questionStatus8 == false){
            questionModal8.style.display = "block";
        }
        btnSubmit8.onclick= function() {
                questionStatus8 = true;
                var rans8 = document.getElementById("rans8").value;
            var radioValue8 = $("input[name='choices8']:checked").val();
            if(radioValue8== rans8){
                var feedbackStatus8 =true;
                score = score+10;
                N8 = 1;
                a8=radioValue8;
            }else {
                a8=radioValue8;
                var feedbackStatus8 = false;
            }
            sessionStorage.setItem("N8", N8);
            sessionStorage.setItem("a8", a8);
            if(totalCountOfQuestions != 8){
                if(feedbackStatus8 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal8.style.display = "none";}, 50);
                }else if(feedbackStatus8 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal8.style.display = "none";}, 50);
                }
                //reset Staggering frame
                staggerFrames = 10;
    
                //reset bubble 1 variables
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1));
                bubble1.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 2 variables
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble2.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 3 variables
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble3.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 4 variables
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble4.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 4 variables
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble5.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
                //reset bubble 6 variables
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6));
                bubble6.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 7 variables
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78));
                bubble7.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
    
                //reset bubble 8 variables
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6));
                bubble8.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
    
    
                timerStatus = false;
                timeString = "Time left :"
                timer = 8;
                interval = 1000;
    
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
    
                bubbleRespawn();
    
                    if(lifes.lives < 5){
                        reduceLifePoints();
                    }else if(lifes.lives == 5){
                        lifePoints();
                    }
            }else if(totalCountOfQuestions == 8){
                if(feedbackStatus8 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal8.style.display = "none";}, 50);
                    gameOver();
                }else if(feedbackStatus8 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal8.style.display = "none";}, 50);
                    gameOver();
                }
            }
        }

        if(questionStatus9 == false){
            questionModal9.style.display = "block";
        }
        btnSubmit9.onclick= function() {
                questionStatus9 = true;
                var rans9 = document.getElementById("rans9").value;
                var radioValue9 = $("input[name='choices9']:checked").val();
                if(radioValue9== rans9){
                    var feedbackStatus9 = true;
                    score = score+10;
                    a9=radioValue9;
                N9 = 1;
                }else {
                    a9=radioValue9;
                    var feedbackStatus9 = false;
                }
                sessionStorage.setItem("N9", N9);
                sessionStorage.setItem("a9", a9);
            if(totalCountOfQuestions != 9){
                if(feedbackStatus9 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal9.style.display = "none";}, 50);
                }else if(feedbackStatus9 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal9.style.display = "none";}, 50);
                }
                //reset Staggering frame
                staggerFrames = 10;
        
                //reset bubble 1 variables
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1));
                bubble1.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15);
        
                //reset bubble 2 variables
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble2.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
        
                //reset bubble 3 variables
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2));
                bubble3.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
        
                //reset bubble 4 variables
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble4.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
        
                //reset bubble 4 variables
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38));
                bubble5.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
        
                //reset bubble 6 variables
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6));
                bubble6.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
        
                //reset bubble 7 variables
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78));
                bubble7.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15);
        
                //reset bubble 8 variables
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6));
                bubble8.randomPositionY = Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6);
        
        
                timerStatus = false;
                timeString = "Time left :"
                timer = 8;
                interval = 1000;
        
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
        
                bubbleRespawn();
        
                    if(lifes.lives < 5){
                        reduceLifePoints();
                    }else if(lifes.lives == 5){
                        lifePoints();
                    }
            }else if(totalCountOfQuestions == 9){
                if(feedbackStatus9 == true){
                    rightChoice();
                    setTimeout(function() {alert("Answer is Correct!");
                        questionModal9.style.display = "none";}, 50);
                    gameOver();
                }else if(feedbackStatus9 == false){
                    wrongChoice();
                    setTimeout(function() {alert("Answer is Incorrect!");
                        questionModal9.style.display = "none";}, 50);
                    gameOver();
                }
            }
        }

        if(questionStatus10 == false){
            questionModal10.style.display = "block";
        }
        btnSubmit10.onclick= function() {
                questionStatus10 = true;
          
            var rans10 = document.getElementById("rans10").value;
            var radioValue10 = $("input[name='choices10']:checked").val();
            if(radioValue10== rans10){

                var feedbackStatus10 = true;
                score = score+10;
                a10 = radioValue10;
                N10 = 1;
            }else {
                a10 = radioValue10;
                var feedbackStatus10 = false;
            }
            sessionStorage.setItem("N10", N10);
            sessionStorage.setItem("a10", a10);
        if(totalCountOfQuestions != 10){
            if(feedbackStatus10 == true){
                rightChoice();
                setTimeout(function() {alert("Answer is Correct!");
                    questionModal10.style.display = "none";}, 50);
                    gameOver();
            }else if(feedbackStatus10 == false){
                wrongChoice();
                setTimeout(function() {alert("Answer is Incorrect!");
                    questionModal10.style.display = "none";}, 50);
                    gameOver();
            }

    
                if(lifes.lives < 5){
                    reduceLifePoints();
                }else if(lifes.lives == 5){
                    lifePoints();
                }
        }else if(totalCountOfQuestions == 10){
            if(feedbackStatus10 == true){
                rightChoice();
                setTimeout(function() {alert("Answer is Correct!");
                    questionModal10.style.display = "none";}, 50);
                gameOver();
            }else if(feedbackStatus10 == false){
                wrongChoice();
                setTimeout(function() {alert("Answer is Incorrect!");
                    questionModal10.style.display = "none";}, 50);
                gameOver();
            }
        }
    }
}




//lives variables
let lifes = {
    lives : 5,
    frameX1 : 0,
    frameX2 : 0,
    frameX3 : 0,
    frameX4 : 0,
    frameX5 : 0,
    positionX1 : CANVAS_WIDTH * 0.05,
    positionX2 : CANVAS_WIDTH * 0.1,
    positionX3 : CANVAS_WIDTH * 0.15,
    positionX4 : CANVAS_WIDTH * 0.2,
    positionX5 : CANVAS_WIDTH * 0.25,
    positionY : CANVAS_HEIGHT * 0.05,
    hearthWidth : 280,
    heartHeight : 283,
    imageHeight : CANVAS_WIDTH * 0.05,
    imageWidth : CANVAS_WIDTH * 0.05
};


//sound effects
function bgMusic(){
    var backgroundMusic = new Audio("../audio/sound.mp3"); 
    backgroundMusic.play();
    backgroundMusic.loop = true;
}
function popMusic(){
    var backgroundMusic = new Audio("../audio/Track 3.wav"); 
	backgroundMusic.currentTime = 1.7;
    backgroundMusic.play();
}
function wrongPopMusic(){
    var backgroundMusic = new Audio("../audio/wrongpop.mp3"); 
	backgroundMusic.currentTime = 1;
    backgroundMusic.play();
}
function allBubblesPopMusic(){
    var backgroundMusic = new Audio("../audio/Success.mp3"); 
	backgroundMusic.currentTime = 1;
    backgroundMusic.play();
}
function rightChoice(){
    var backgroundMusic = new Audio("../audio/RightAnswer.mp3"); 
	backgroundMusic.currentTime = 0.8; 
    backgroundMusic.play();
}
function wrongChoice(){
    var backgroundMusic = new Audio("../audio/WrongAnswer.mp3");
	backgroundMusic.currentTime = 1; 
    backgroundMusic.play();
}

//exit game
function exitGame(){
    var renderPositionX = CANVAS_WIDTH * 0.9;
    var renderPositionY = CANVAS_HEIGHT * 0.05;
    var renderSize = CANVAS_WIDTH * 0.05;
    //Draw Image for 1st bubble idle 
    ctx.drawImage(exit,0 * 138, 0 * 138,
        138,138,renderPositionX,renderPositionY,renderSize,renderSize);
       //request Animation
        requestAnimationFrame(exitGame);
}

//instruction
function instructionButton(){
    var renderPositionX = CANVAS_WIDTH * 0.83;
    var renderPositionY = CANVAS_HEIGHT * 0.05;
    var renderSize = CANVAS_WIDTH * 0.05;

    //Draw Image for 1st bubble idle 
    ctx.drawImage(instruction,0 * 138, 0 * 132,
        138,138,renderPositionX,renderPositionY,renderSize,renderSize);
       
       //request Animation
    requestAnimationFrame(instructionButton);
}

//life points
function lifePoints(){
    //Draw Image for 1st bubble idle 
    // ctx.clearRect(lifes.positionX5,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,0 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX1,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,0 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX2,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,0 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX3,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,0 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX4,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,lifes.frameX5 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX5,lifes.positionY,lifes.imageWidth,lifes.imageHeight);

        //    if(frameX < 1) {
        //        frameX++;
        //    }else
        //        frameX = 0;
       
       //request Animation
    requestAnimationFrame(lifePoints);
       
}

function reduceLifePoints(){
    //Draw Image for 1st bubble idle 
    // ctx.clearRect(lifes.positionX5,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,lifes.frameX1 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX1,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,lifes.frameX2 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX2,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,lifes.frameX3 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX3,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,lifes.frameX4 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX4,lifes.positionY,lifes.imageWidth,lifes.imageHeight);
    ctx.drawImage(life,lifes.frameX5 * 280, 0 * 276,
        lifes.hearthWidth,lifes.heartHeight,lifes.positionX5,lifes.positionY,lifes.imageWidth,lifes.imageHeight);


        if(lifes.lives == 4){
            if(lifes.frameX5 < 2) {
                lifes.frameX5++;
                console.log("4life");
                if(lifes.frameX5 > 3){
                }
            }
        }else if(lifes.lives == 3){
            if(lifes.frameX4 < 2) {
                lifes.frameX4++;
                console.log("3 life");
                if(lifes.frameX4 > 3){
                }
            }
        }else if(lifes.lives == 2){
            if(lifes.frameX3 < 2) {
                lifes.frameX3++;
                console.log("2 life");
                if(lifes.frameX3 > 3){
                }
            }
        }else if(lifes.lives == 1){
            if(lifes.frameX2 < 2) {
                lifes.frameX2++;
                console.log("1 life");
                if(lifes.frameX2 > 3){
                }
            }
        }else if(lifes.lives == 0){
            if(lifes.frameX1 < 2) {
                lifes.frameX1++;
                gameOver();
                console.log("0 life");
                if(lifes.frameX1 > 3){
                }
            }
        }
         
       
       //request Animation
    requestAnimationFrame(reduceLifePoints);
}

function gameOver(){

startGameStatus = false;

if(startGameStatus == false){
    gameOverModal.style.display ="block";
    var tscore = score;
    sessionStorage.setItem("Totalscore", tscore);
    document.getElementById("name").innerHTML = "Total Score: " + tscore;

    restartButton.onclick= function() {
        
        gameOverModal.style.display ="none";
        location.href = "gamewithqa.php";
    }

    exitButton.onclick= function() {
        gameOverModal.style.display ="none";
        location.href = "QA.php?NA1="+N1+"&NA2="+N2+"&NA3="+N3+"&NA4="+N4+"&NA5="+N5+"&NA6="+N6+
        "&NA7="+N7+"&NA8="+N8+"&NA9="+N9+"&NA10="+N10+"&total="+tscore+"&A1="+a1+"&A2="+a2+"&A3="+a3
        +"&A4="+a4+"&A5="+a5+"&A6="+a6+"&A7="+a7+"&A8="+a8+"&A9="+a9+"&A10="+a10;
    }

}


}


//variables of 1st bubble
let bubble1 = {
    randomPositionX : Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)),
    randomPositionY : Math.floor(Math.random() * (CANVAS_HEIGHT * 0.65))+(CANVAS_HEIGHT * 0.15),
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 1
};

//variables of 2nd bubble
let bubble2 = {
    randomPositionX : Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2)),
    randomPositionY : Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15),
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 2
};

//variables of 3rd bubble
let bubble3 = {
    randomPositionX : Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.2)),
    randomPositionY : Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6),
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 3
};

//variables of 4th bubble
let bubble4 = {
    randomPositionX : Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38)),
    randomPositionY : Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15),
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 4
};

//variables of 5th bubble
let bubble5 = {
    randomPositionX : Math.floor(Math.random() * (CANVAS_WIDTH * 0.15)+(CANVAS_WIDTH * 0.38)),
    randomPositionY : Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6),
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 5
};

//variables of 6th bubble
let bubble6 = {
    randomPositionX : Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.6)),
    randomPositionY : Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15),
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 6
};

//variables of 7th bubble
let bubble7 = {
    randomPositionX : Math.floor(Math.random() * (CANVAS_WIDTH * 0.1)+(CANVAS_WIDTH * 0.78)),
    randomPositionY : Math.floor(Math.random() * (CANVAS_HEIGHT * 0.3))+(CANVAS_HEIGHT * 0.15),
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 7
};

//variables of 8th bubble
let bubble8 = {
    randomPositionX : Math.floor(Math.random() * (CANVAS_WIDTH * 0.25)+(CANVAS_WIDTH * 0.6)),
    randomPositionY : Math.floor(Math.random() * (CANVAS_HEIGHT * 0.1))+(CANVAS_HEIGHT * 0.6),
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 8
};




//Bubble 1st idle Animation
function bubbleIdle1(){
    var textCenterPositionX = CANVAS_WIDTH * 0.045;
    var textCenterPositionY = imageHeight * 0.65;
    //Clearing canvas
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.font = "4vw Verdana";
         //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble1.frameX * spriteWidth, bubble1.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble1.randomPositionX,bubble1.randomPositionY,imageWidth,imageHeight);
        //Bubble number
    ctx.fillText(bubble1.bubbleNum,bubble1.randomPositionX+textCenterPositionX, bubble1.randomPositionY+textCenterPositionY);
    console.log("asd  "+textCenterPositionY)

         if(bubble1.gameFrame % staggerFrames == 0){
            if(bubble1.frameX < 1) {
                bubble1.frameX++;
            }else
                bubble1.frameX = 0;
        }
        //increase to have a loop
        bubble1.gameFrame++;
        //request Animation
        if(randomNumLevel == 1 && startGameStatus == true ){
            requestAnimationFrame(bubbleIdle1);
        }else if(randomNumLevel == 2 && questionStatus2 == true){
            requestAnimationFrame(bubbleIdle1);
        }else if(randomNumLevel == 3 && questionStatus3 == true){
            requestAnimationFrame(bubbleIdle1);
        }else if(randomNumLevel == 4 && questionStatus4 == true){
            requestAnimationFrame(bubbleIdle1);
        }else if(randomNumLevel == 5 && questionStatus5 == true){
            requestAnimationFrame(bubbleIdle1);
        }else if(randomNumLevel == 6 && questionStatus6 == true ){
            requestAnimationFrame(bubbleIdle1);
        }else if(randomNumLevel == 7 && questionStatus7 == true){
            requestAnimationFrame(bubbleIdle1);
        }else if(randomNumLevel == 8 && questionStatus8 == true){
            requestAnimationFrame(bubbleIdle1);
        }else if(randomNumLevel == 9 && questionStatus9 == true){
            requestAnimationFrame(bubbleIdle1);
        }else if(randomNumLevel == 10 && questionStatus10 == true){
            requestAnimationFrame(bubbleIdle1);
        };
}

//Bubble 2nd idle Animation
function bubbleIdle2(){ 
    
    var textCenterPositionX = CANVAS_WIDTH * 0.045;
    var textCenterPositionY = imageHeight * 0.65;

    //Font Size and Style
    ctx.font = "4vw Verdana";

    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble2.frameX * spriteWidth, bubble2.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble2.randomPositionX,bubble2.randomPositionY,imageWidth,imageHeight);
    //Bubble number
     ctx.fillText(bubble2.bubbleNum,bubble2.randomPositionX+textCenterPositionX, bubble2.randomPositionY+textCenterPositionY);

        if(bubble2.gameFrame % staggerFrames ==0){
           if(bubble2.frameX < 1) {
            bubble2.frameX++;
           }else
           bubble2.frameX = 0;
       }
       //increase to have a loop
       bubble2.gameFrame++;
       //request Animation
        if(randomNumLevel == 1 && startGameStatus == true ){
            requestAnimationFrame(bubbleIdle2);
        }else if(randomNumLevel == 2 && questionStatus2 == true){
            requestAnimationFrame(bubbleIdle2);
        }else if(randomNumLevel == 3 && questionStatus3 == true){
            requestAnimationFrame(bubbleIdle2);
        }else if(randomNumLevel == 4 && questionStatus4 == true){
            requestAnimationFrame(bubbleIdle2);
        }else if(randomNumLevel == 5 && questionStatus5 == true){
            requestAnimationFrame(bubbleIdle2);
        }else if(randomNumLevel == 6 && questionStatus6 == true ){
            requestAnimationFrame(bubbleIdle2);
        }else if(randomNumLevel == 7 && questionStatus7 == true){
            requestAnimationFrame(bubbleIdle2);
        }else if(randomNumLevel == 8 && questionStatus8 == true){
            requestAnimationFrame(bubbleIdle2);
        }else if(randomNumLevel == 9 && questionStatus9 == true){
            requestAnimationFrame(bubbleIdle2);
        }else if(randomNumLevel == 10 && questionStatus10 == true){
            requestAnimationFrame(bubbleIdle2);
        };
}

//Bubble 3rd idle Animation
function bubbleIdle3(){
    var textCenterPositionX = CANVAS_WIDTH * 0.045;
    var textCenterPositionY = imageHeight * 0.65;

    //Font Size and Style
    ctx.font = "4vw Verdana";
    ctx.drawImage(bubbleImage,bubble3.frameX * spriteWidth, bubble3.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble3.randomPositionX,bubble3.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble3.bubbleNum,bubble3.randomPositionX+textCenterPositionX, bubble3.randomPositionY+textCenterPositionY);
    //Draw Image for 1st bubble idle

        if(bubble3.gameFrame % staggerFrames ==0){
           if(bubble3.frameX < 1) {
            bubble3.frameX++;
           }else
           bubble3.frameX = 0;
       }
       //increase to have a loop
       bubble3.gameFrame++;
       //request Animation
       if(randomNumLevel == 1 && startGameStatus == true ){
           requestAnimationFrame(bubbleIdle3);
       }else if(randomNumLevel == 2 && questionStatus2 == true){
           requestAnimationFrame(bubbleIdle3);
       }else if(randomNumLevel == 3 && questionStatus3 == true){
           requestAnimationFrame(bubbleIdle3);
       }else if(randomNumLevel == 4 && questionStatus4 == true){
           requestAnimationFrame(bubbleIdle3);
       }else if(randomNumLevel == 5 && questionStatus5 == true){
           requestAnimationFrame(bubbleIdle3);
        }else if(randomNumLevel == 6 && questionStatus6 == true ){
            requestAnimationFrame(bubbleIdle3);
        }else if(randomNumLevel == 7 && questionStatus7 == true){
            requestAnimationFrame(bubbleIdle3);
        }else if(randomNumLevel == 8 && questionStatus8 == true){
            requestAnimationFrame(bubbleIdle3);
        }else if(randomNumLevel == 9 && questionStatus9 == true){
            requestAnimationFrame(bubbleIdle3);
        }else if(randomNumLevel == 10 && questionStatus10 == true){
            requestAnimationFrame(bubbleIdle3);
        };
}

//Bubble 4th idle Animation
function bubbleIdle4(){
    var textCenterPositionX = CANVAS_WIDTH * 0.045;
    var textCenterPositionY = imageHeight * 0.65;

    //Font Size and Style
    ctx.font = "4vw Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble4.frameX * spriteWidth, bubble4.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble4.randomPositionX,bubble4.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble4.bubbleNum,bubble4.randomPositionX+textCenterPositionX, bubble4.randomPositionY+textCenterPositionY);

        if(bubble4.gameFrame % staggerFrames ==0){
           if(bubble4.frameX < 1) {
            bubble4.frameX++;
           }else
           bubble4.frameX = 0;
       }
       //increase to have a loop
       bubble4.gameFrame++;
       //request Animation
       if(randomNumLevel == 1 && startGameStatus == true ){
           requestAnimationFrame(bubbleIdle4);
       }else if(randomNumLevel == 2 && questionStatus2 == true){
           requestAnimationFrame(bubbleIdle4);
       }else if(randomNumLevel == 3 && questionStatus3 == true){
           requestAnimationFrame(bubbleIdle4);
       }else if(randomNumLevel == 4 && questionStatus4 == true){
           requestAnimationFrame(bubbleIdle4);
       }else if(randomNumLevel == 5 && questionStatus5 == true){
           requestAnimationFrame(bubbleIdle4);
        }else if(randomNumLevel == 6 && questionStatus6 == true ){
            requestAnimationFrame(bubbleIdle4);
        }else if(randomNumLevel == 7 && questionStatus7 == true){
            requestAnimationFrame(bubbleIdle4);
        }else if(randomNumLevel == 8 && questionStatus8 == true){
            requestAnimationFrame(bubbleIdle4);
        }else if(randomNumLevel == 9 && questionStatus9 == true){
            requestAnimationFrame(bubbleIdle4);
        }else if(randomNumLevel == 10 && questionStatus10 == true){
            requestAnimationFrame(bubbleIdle4);
        };
}

//Bubble 5th idle Animation
function bubbleIdle5(){
    var textCenterPositionX = CANVAS_WIDTH * 0.045;
    var textCenterPositionY = imageHeight * 0.65;

    //Font Size and Style
    ctx.font = "4vw Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble5.frameX * spriteWidth, bubble5.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble5.randomPositionX,bubble5.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble5.bubbleNum,bubble5.randomPositionX+textCenterPositionX, bubble5.randomPositionY+textCenterPositionY);

        if(bubble5.gameFrame % staggerFrames ==0){
           if(bubble5.frameX < 1) {
            bubble5.frameX++;
           }else
           bubble5.frameX = 0;
       }
       //increase to have a loop
       bubble5.gameFrame++;
       //request Animation
       if(randomNumLevel == 1 && startGameStatus == true ){
           requestAnimationFrame(bubbleIdle5);
       }else if(randomNumLevel == 2 && questionStatus2 == true){
           requestAnimationFrame(bubbleIdle5);
       }else if(randomNumLevel == 3 && questionStatus3 == true){
           requestAnimationFrame(bubbleIdle5);
       }else if(randomNumLevel == 4 && questionStatus4 == true){
           requestAnimationFrame(bubbleIdle5);
       }else if(randomNumLevel == 5 && questionStatus5 == true){
           requestAnimationFrame(bubbleIdle5);
        }else if(randomNumLevel == 6 && questionStatus6 == true ){
            requestAnimationFrame(bubbleIdle5);
        }else if(randomNumLevel == 7 && questionStatus7 == true){
            requestAnimationFrame(bubbleIdle5);
        }else if(randomNumLevel == 8 && questionStatus8 == true){
            requestAnimationFrame(bubbleIdle5);
        }else if(randomNumLevel == 9 && questionStatus9 == true){
            requestAnimationFrame(bubbleIdle5);
        }else if(randomNumLevel == 10 && questionStatus10 == true){
            requestAnimationFrame(bubbleIdle5);
        };
}

//Bubble 6th idle Animation
function bubbleIdle6(){
    var textCenterPositionX = CANVAS_WIDTH * 0.045;
    var textCenterPositionY = imageHeight * 0.65;

    //Font Size and Style
    ctx.font = "4vw Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble6.frameX * spriteWidth, bubble6.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble6.randomPositionX,bubble6.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble6.bubbleNum,bubble6.randomPositionX+textCenterPositionX, bubble6.randomPositionY+textCenterPositionY);

        if(bubble6.gameFrame % staggerFrames ==0){
           if(bubble6.frameX < 1) {
            bubble6.frameX++;
           }else
           bubble6.frameX = 0;
       }
       //increase to have a loop
       bubble6.gameFrame++;
       //request Animation
       if(randomNumLevel == 1 && startGameStatus == true ){
           requestAnimationFrame(bubbleIdle6);
       }else if(randomNumLevel == 2 && questionStatus2 == true){
           requestAnimationFrame(bubbleIdle6);
       }else if(randomNumLevel == 3 && questionStatus3 == true){
           requestAnimationFrame(bubbleIdle6);
       }else if(randomNumLevel == 4 && questionStatus4 == true){
           requestAnimationFrame(bubbleIdle6);
       }else if(randomNumLevel == 5 && questionStatus5 == true){
           requestAnimationFrame(bubbleIdle6);
        }else if(randomNumLevel == 6 && questionStatus6 == true ){
            requestAnimationFrame(bubbleIdle6);
        }else if(randomNumLevel == 7 && questionStatus7 == true){
            requestAnimationFrame(bubbleIdle6);
        }else if(randomNumLevel == 8 && questionStatus8 == true){
            requestAnimationFrame(bubbleIdle6);
        }else if(randomNumLevel == 9 && questionStatus9 == true){
            requestAnimationFrame(bubbleIdle6);
        }else if(randomNumLevel == 10 && questionStatus10 == true){
            requestAnimationFrame(bubbleIdle6);
        };
}

//Bubble 7th idle Animation
function bubbleIdle7(){
    var textCenterPositionX = CANVAS_WIDTH * 0.045;
    var textCenterPositionY = imageHeight * 0.65;

    //Font Size and Style
    ctx.font = "4vw Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble7.frameX * spriteWidth, bubble7.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble7.randomPositionX,bubble7.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble7.bubbleNum,bubble7.randomPositionX+textCenterPositionX, bubble7.randomPositionY+textCenterPositionY);

        if(bubble7.gameFrame % staggerFrames ==0){
           if(bubble7.frameX < 1) {
            bubble7.frameX++;
           }else
           bubble7.frameX = 0;
       }
       //increase to have a loop
       bubble7.gameFrame++;
       //request Animation
       if(randomNumLevel == 1 && startGameStatus == true ){
           requestAnimationFrame(bubbleIdle7);
       }else if(randomNumLevel == 2 && questionStatus2 == true){
           requestAnimationFrame(bubbleIdle7);
       }else if(randomNumLevel == 3 && questionStatus3 == true){
           requestAnimationFrame(bubbleIdle7);
       }else if(randomNumLevel == 4 && questionStatus4 == true){
           requestAnimationFrame(bubbleIdle7);
       }else if(randomNumLevel == 5 && questionStatus5 == true){
           requestAnimationFrame(bubbleIdle7);
        }else if(randomNumLevel == 6 && questionStatus6 == true ){
            requestAnimationFrame(bubbleIdle7);
        }else if(randomNumLevel == 7 && questionStatus7 == true){
            requestAnimationFrame(bubbleIdle7);
        }else if(randomNumLevel == 8 && questionStatus8 == true){
            requestAnimationFrame(bubbleIdle7);
        }else if(randomNumLevel == 9 && questionStatus9 == true){
            requestAnimationFrame(bubbleIdle7);
        }else if(randomNumLevel == 10 && questionStatus10 == true){
            requestAnimationFrame(bubbleIdle7);
        };
}

//Bubble 8th idle Animation
function bubbleIdle8(){
    var textCenterPositionX = CANVAS_WIDTH * 0.045;
    var textCenterPositionY = imageHeight * 0.65;

    //Font Size and Style
    ctx.font = "4vw Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble8.frameX * spriteWidth, bubble8.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble8.randomPositionX,bubble8.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble8.bubbleNum,bubble8.randomPositionX+textCenterPositionX, bubble8.randomPositionY+textCenterPositionY);

        if(bubble8.gameFrame % staggerFrames ==0){
           if(bubble8.frameX < 1) {
            bubble8.frameX++;
           }else
           bubble8.frameX = 0;
       }
       //increase to have a loop
       bubble8.gameFrame++;
       //request Animation
       if(randomNumLevel == 1 && startGameStatus == true ){
           requestAnimationFrame(bubbleIdle8);
       }else if(randomNumLevel == 2 && questionStatus2 == true){
           requestAnimationFrame(bubbleIdle8);
       }else if(randomNumLevel == 3 && questionStatus3 == true){
           requestAnimationFrame(bubbleIdle8);
       }else if(randomNumLevel == 4 && questionStatus4 == true){
           requestAnimationFrame(bubbleIdle8);
       }else if(randomNumLevel == 5 && questionStatus5 == true){
           requestAnimationFrame(bubbleIdle8);
        }else if(randomNumLevel == 6 && questionStatus6 == true ){
            requestAnimationFrame(bubbleIdle8);
        }else if(randomNumLevel == 7 && questionStatus7 == true){
            requestAnimationFrame(bubbleIdle8);
        }else if(randomNumLevel == 8 && questionStatus8 == true){
            requestAnimationFrame(bubbleIdle8);
        }else if(randomNumLevel == 9 && questionStatus9 == true){
            requestAnimationFrame(bubbleIdle8);
        }else if(randomNumLevel == 10 && questionStatus10 == true){
            requestAnimationFrame(bubbleIdle8);
        };
}


//Animation of bubble1 popping
function popAnimation1(){
    //Clearing canvas
    // ctx.clearRect(50,50,CANVAS_WIDTH,CANVAS_HEIGHT);
        ctx.clearRect(bubble1.randomPositionX,bubble1.randomPositonY,imageWidth,imageHeight);
        //Create new Image for popping
        ctx.drawImage(bubbleImage,bubble1.frameX * spriteWidth, bubble1.frameY * spriteHeight,spriteWidth,spriteHeight,
        bubble1.randomPositionX,bubble1.randomPositonY,imageWidth,imageHeight);

        //Sequence of popping Animation
            if(bubble1.frameX < 3) {
                bubble1.frameX++;
                if(bubble1.frameX > 2){
                    bubble1.frameY++;
                    if(bubble1.frameY < 2){
                        popMusic();
                    }
                }
                
            }
            else {
                bubble1.frameX = 0;
            }
            
    // request to animate the frames
        if(bubble1.bubbleStatus == true){
            requestAnimationFrame(popAnimation1);
        }
};

//Animation of bubble2 popping
function popAnimation2(){

    ctx.clearRect(bubble2.randomPositionX,bubble2.randomPositonY,imageWidth,imageHeight);
    //Create new Image for popping
    ctx.drawImage(bubbleImage,bubble2.frameX * spriteWidth, bubble2.frameY * spriteHeight,spriteWidth,spriteHeight,
        bubble2.randomPositionX,bubble2.randomPositonY,imageWidth,imageHeight);

    //Sequence of popping Animation
        if(bubble2.frameX < 3) {
            bubble2.frameX++;
            if(bubble2.frameX > 2){
                bubble2.frameY++;
                if(bubble2.frameY < 2){
                    popMusic();
                }
            }
            
        }
        else {
            bubble2.frameX = 0;
        }
// request to animate the frames
if(bubble2.bubbleStatus == true){
requestAnimationFrame(popAnimation2);
}
};

//Animation of bubble3 popping
function popAnimation3(){

    // ctx.clearRect(bubble3.randomPositionX,bubble3.randomPositonY,imageWidth,imageHeight);
    //Create new Image for popping
    ctx.drawImage(bubbleImage,bubble3.frameX * spriteWidth, bubble3.frameY * spriteHeight,spriteWidth,spriteHeight,
        bubble3.randomPositionX,bubble3.randomPositonY,imageWidth,imageHeight);

    //Sequence of popping Animation
        if(bubble3.frameX < 3) {
            bubble3.frameX++;
            if(bubble3.frameX > 2){
                bubble3.frameY++;
                if(bubble3.frameY < 2){
                    popMusic();
                }
            }
            
        }
        else {
            bubble3.frameX = 0;
        }
// request to animate the frames
if(bubble3.bubbleStatus == true){
requestAnimationFrame(popAnimation3);
}
};

//Animation of bubble4 popping
function popAnimation4(){

    // ctx.clearRect(bubble4.randomPositionX,bubble4.randomPositonY,imageWidth,imageHeight);
    //Create new Image for popping
    ctx.drawImage(bubbleImage,bubble4.frameX * spriteWidth, bubble4.frameY * spriteHeight,spriteWidth,spriteHeight,
        bubble4.randomPositionX,bubble4.randomPositonY,imageWidth,imageHeight);

    //Sequence of popping Animation
        if(bubble4.frameX < 3) {
            bubble4.frameX++;
            if(bubble4.frameX > 2){
                bubble4.frameY++;
                if(bubble4.frameY < 2){
                    popMusic();
                }
            }
            
        }
        else {
            bubble4.frameX = 0;
        }
// request to animate the frames
if(bubble4.bubbleStatus == true){
requestAnimationFrame(popAnimation4);
}
};

//Animation of bubble5 popping
function popAnimation5(){

    // ctx.clearRect(bubble5.randomPositionX,bubble5.randomPositonY,imageWidth,imageHeight);
    //Create new Image for popping
    ctx.drawImage(bubbleImage,bubble5.frameX * spriteWidth, bubble5.frameY * spriteHeight,spriteWidth,spriteHeight,
        bubble5.randomPositionX,bubble5.randomPositonY,imageWidth,imageHeight);

    //Sequence of popping Animation
        if(bubble5.frameX < 3) {
            bubble5.frameX++;
            if(bubble5.frameX > 2){
                bubble5.frameY++;
                if(bubble5.frameY < 2){
                    popMusic();
                }
            }
            
        }
        else {
            bubble5.frameX = 0;
        }
// request to animate the frames
if(bubble5.bubbleStatus == true){
requestAnimationFrame(popAnimation5);
}
};

//Animation of bubble6 popping
function popAnimation6(){

    // ctx.clearRect(bubble6.randomPositionX,bubble6.randomPositonY,imageWidth,imageHeight);
    //Create new Image for popping
    ctx.drawImage(bubbleImage,bubble6.frameX * spriteWidth, bubble6.frameY * spriteHeight,spriteWidth,spriteHeight,
        bubble6.randomPositionX,bubble6.randomPositonY,imageWidth,imageHeight);

    //Sequence of popping Animation
        if(bubble6.frameX < 3) {
            bubble6.frameX++;
            if(bubble6.frameX > 2){
                bubble6.frameY++;
                if(bubble6.frameY < 2){
                    popMusic();
                }
            }
            
        }
        else {
            bubble6.frameX = 0;
        }
// request to animate the frames
if(bubble6.bubbleStatus == true){
requestAnimationFrame(popAnimation6);
}
};

//Animation of bubble7 popping
function popAnimation7(){

    // ctx.clearRect(bubble7.randomPositionX,bubble7.randomPositonY,imageWidth,imageHeight);
    //Create new Image for popping
    ctx.drawImage(bubbleImage,bubble7.frameX * spriteWidth, bubble7.frameY * spriteHeight,spriteWidth,spriteHeight,
        bubble7.randomPositionX,bubble7.randomPositonY,imageWidth,imageHeight);

    //Sequence of popping Animation
        if(bubble7.frameX < 3) {
            bubble7.frameX++;
            if(bubble7.frameX > 2){
                bubble7.frameY++;
                if(bubble7.frameY < 2){
                    popMusic();
                }
            }
            
        }
        else {
            bubble7.frameX = 0;
        }
// request to animate the frames
if(bubble7.bubbleStatus == true){
requestAnimationFrame(popAnimation7);
}
};

//Animation of bubble8 popping
function popAnimation8(){

    // ctx.clearRect(bubble8.randomPositionX,bubble8.randomPositonY,imageWidth,imageHeight);
    //Create new Image for popping
    ctx.drawImage(bubbleImage,bubble8.frameX * spriteWidth, bubble8.frameY * spriteHeight,spriteWidth,spriteHeight,
        bubble8.randomPositionX,bubble8.randomPositonY,imageWidth,imageHeight);

    //Sequence of popping Animation
        if(bubble8.frameX < 3) {
            bubble8.frameX++;
            if(bubble8.frameX > 2){
                bubble8.frameY++;
                if(bubble8.frameY < 2){
                    popMusic();
                }
            }
            
        }
        else {
            bubble8.frameX = 0;
        }
// request to animate the frames
if(bubble8.bubbleStatus == true){
requestAnimationFrame(popAnimation8);
}
};



//Click bubble
function clickCanvas(xmouse, ymouse){

    var centerText = imageWidth *  0.46;
    var bubbleDiameter = imageWidth * 0.33;
    
    var buttonDiameter = CANVAS_WIDTH * 0.023;

    console.log(buttonDiameter," , ",bubbleDiameter)
        
    //radius of 1st bubble
    let centerPositionX1 = bubble1.randomPositionX+centerText;
    let centerPositionY1 = bubble1.randomPositionY+centerText;

    //radius of 2nd bubble
    let centerPositionX2 = bubble2.randomPositionX +centerText;
    let centerPositionY2 = bubble2.randomPositionY +centerText;

    //radius of 3rd bubble
    let centerPositionX3 = bubble3.randomPositionX +centerText;
    let centerPositionY3 = bubble3.randomPositionY +centerText;

    //radius of 4th bubble
    let centerPositionX4 = bubble4.randomPositionX +centerText;
    let centerPositionY4 = bubble4.randomPositionY +centerText;
    
    //radius of 5th bubble
    let centerPositionX5 = bubble5.randomPositionX +centerText;
    let centerPositionY5 = bubble5.randomPositionY +centerText;
    
    //radius of 6th bubble
    let centerPositionX6 = bubble6.randomPositionX +centerText;
    let centerPositionY6 = bubble6.randomPositionY +centerText;

    //radius of 7th bubble
    let centerPositionX7 = bubble7.randomPositionX +centerText;
    let centerPositionY7 = bubble7.randomPositionY +centerText;

    //radius of 8th bubble
    let centerPositionX8 = bubble8.randomPositionX +centerText;
    let centerPositionY8 = bubble8.randomPositionY +centerText;

    //instruction button center
    var renderSize = (CANVAS_WIDTH * 0.05)/2;
    var renderInstPositionX = (CANVAS_WIDTH * 0.83)+renderSize;
    var renderInstPositionY = (CANVAS_HEIGHT * 0.05)+renderSize;

    var renderExitPositionX = (CANVAS_WIDTH * 0.9)+renderSize;
    var renderExitPositionY = (CANVAS_HEIGHT * 0.05)+renderSize;

    
    //Distance of moouse click and center point of bubble 1
    var distance1 = 
    Math.sqrt(
    ( ( xmouse - centerPositionX1) * ( xmouse - centerPositionX1))
    +
    ( ( ymouse - centerPositionY1) * ( ymouse - centerPositionY1))
    );

    //Distance of moouse click and center point of bubble 2
    var distance2 = 
    Math.sqrt(
    ( ( xmouse - centerPositionX2) * ( xmouse - centerPositionX2))
    +
    ( ( ymouse - centerPositionY2) * ( ymouse - centerPositionY2))
    ); 
    
    //Distance of moouse click and center point of bubble 3
    var distance3 = 
    Math.sqrt(
    ( ( xmouse - centerPositionX3) * ( xmouse - centerPositionX3))
    +
    ( ( ymouse - centerPositionY3) * ( ymouse - centerPositionY3))
    ); 

    //Distance of moouse click and center point of bubble 4
    var distance4 = 
    Math.sqrt(
    ( ( xmouse - centerPositionX4) * ( xmouse - centerPositionX4))
    +
    ( ( ymouse - centerPositionY4) * ( ymouse - centerPositionY4))
    );

    //Distance of moouse click and center point of bubble 5
    var distance5 = 
    Math.sqrt(
    ( ( xmouse - centerPositionX5) * ( xmouse - centerPositionX5))
    +
    ( ( ymouse - centerPositionY5) * ( ymouse - centerPositionY5))
    );

    //Distance of moouse click and center point of bubble 6
    var distance6 = 
    Math.sqrt(
    ( ( xmouse - centerPositionX6) * ( xmouse - centerPositionX6))
    +
    ( ( ymouse - centerPositionY6) * ( ymouse - centerPositionY6))
    );

    //Distance of moouse click and center point of bubble 7
    var distance7 = 
    Math.sqrt(
    ( ( xmouse - centerPositionX7) * ( xmouse - centerPositionX7))
    +
    ( ( ymouse - centerPositionY7) * ( ymouse - centerPositionY7))
    );

    //Distance of moouse click and center point of bubble 8
    var distance8 = 
    Math.sqrt(
    ( ( xmouse - centerPositionX8) * ( xmouse - centerPositionX8))
    +
    ( ( ymouse - centerPositionY8) * ( ymouse - centerPositionY8))
    );

    var inst = 
    Math.sqrt(
    ( ( xmouse - renderInstPositionX) * ( xmouse - renderInstPositionX))
    +
    ( ( ymouse - renderInstPositionY) * ( ymouse - renderInstPositionY))
    );
    
    var exit = 
    Math.sqrt(
    ( ( xmouse - renderExitPositionX) * ( xmouse - renderExitPositionX))
    +
    ( ( ymouse - renderExitPositionY) * ( ymouse - renderExitPositionY))
    );
    

    //Orderly clicked
    if(timerStatus == true){
        if(randomNumLevel == 1){
            if(distance1 < bubbleDiameter){
                if(bubble1.bubbleStatus == false){
                bubble1.bubbleStatus = true;
                popAnimation1();
                }
    
            }else if(bubble1.bubbleStatus == true){
                 if(distance2 < bubbleDiameter){
                    if(bubble2.bubbleStatus == false){
                        bubble2.bubbleStatus = true;
                        popAnimation2();
                    }
    
                }else if(bubble2.bubbleStatus == true){
                    if(distance3 < bubbleDiameter){
                        if(bubble3.bubbleStatus == false){
                            bubble3.bubbleStatus = true;
                            popAnimation3();
                        }   
    
                    }else if(bubble3.bubbleStatus == true){
                        if(distance4 < bubbleDiameter){
                            if(bubble4.bubbleStatus == false){
                                bubble4.bubbleStatus = true;
                                popAnimation4();
                            }
        
                        }else if(bubble4.bubbleStatus == true){
                            if(distance5 < bubbleDiameter){
                            if(bubble5.bubbleStatus == false){
                                bubble5.bubbleStatus = true;
                                popAnimation5();
                            }
        
                            }else if(bubble5.bubbleStatus == true){
                                if(distance6 < bubbleDiameter){
                                    if(bubble6.bubbleStatus == false){
                                    bubble6.bubbleStatus = true;
                                    popAnimation6();
                                    }
        
                                }else if(bubble6.bubbleStatus == true){
                                    if(distance7 < bubbleDiameter){
                                        if(bubble7.bubbleStatus == false){
                                        bubble7.bubbleStatus = true;
                                        popAnimation7();
                                        }
        
                                    }else if(bubble7.bubbleStatus == true){
                                        if(distance8 < bubbleDiameter){
                                            if(bubble8.bubbleStatus == false){
                                            bubble8.bubbleStatus = true;
                                            popAnimation8();
                                            allBubblesPopMusic();  
                                            multipleChoiceQuestion();
                                            }
                                        }
    
                                    //after bubble 6 pop      
                                    }else if(distance8 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance7 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance8 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance6 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance7 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance8 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance5 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance6 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance7 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance8 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance5 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance6 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance7 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance8 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance5 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance7 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else
                    console.log("Invalid Pop!");
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 2){
            if(distance1 < bubbleDiameter){
                if(bubble1.bubbleStatus == false){
                bubble1.bubbleStatus = true;
                popAnimation1();
                }
    
            }else if(bubble1.bubbleStatus == true){
                 if(distance2 < bubbleDiameter){
                    if(bubble2.bubbleStatus == false){
                        bubble2.bubbleStatus = true;
                        popAnimation2();
                    }
    
                }else if(bubble2.bubbleStatus == true){
                    if(distance3 < bubbleDiameter){
                        if(bubble3.bubbleStatus == false){
                            bubble3.bubbleStatus = true;
                            popAnimation3();
                        }   
    
                    }else if(bubble3.bubbleStatus == true){
                        if(distance4 < bubbleDiameter){
                            if(bubble4.bubbleStatus == false){
                                bubble4.bubbleStatus = true;
                                popAnimation4();
                            }
        
                        }else if(bubble4.bubbleStatus == true){
                            if(distance5 < bubbleDiameter){
                            if(bubble5.bubbleStatus == false){
                                bubble5.bubbleStatus = true;
                                popAnimation5();
                            }
        
                            }else if(bubble5.bubbleStatus == true){
                                if(distance6 < bubbleDiameter){
                                    if(bubble6.bubbleStatus == false){
                                    bubble6.bubbleStatus = true;
                                    popAnimation6();
                                    }
        
                                }else if(bubble6.bubbleStatus == true){
                                    if(distance7 < bubbleDiameter){
                                        if(bubble7.bubbleStatus == false){
                                        bubble7.bubbleStatus = true;
                                        popAnimation7();
                                        }
        
                                    }else if(bubble7.bubbleStatus == true){
                                        if(distance8 < bubbleDiameter){
                                            if(bubble8.bubbleStatus == false){
                                            bubble8.bubbleStatus = true;
                                            popAnimation8();
                                            allBubblesPopMusic();  
                                            questionStatus2 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
    
                                    //after bubble 6 pop      
                                    }else if(distance8 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance7 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance8 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance6 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance7 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance8 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance5 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance6 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance7 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance8 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance5 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance6 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance7 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance8 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance5 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance7 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else
                    console.log("Invalid Pop!");
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 3){
            if(distance8 < bubbleDiameter){
                if(bubble8.bubbleStatus == false){
                bubble8.bubbleStatus = true;
                popAnimation8();
                }
    
            }else if(bubble8.bubbleStatus == true){
                if(distance7 < bubbleDiameter){
                    if(bubble7.bubbleStatus == false){
                    bubble7.bubbleStatus = true;
                    popAnimation7();
                    }
    
                }else if(bubble7.bubbleStatus == true){
                    if(distance6 < bubbleDiameter){
                        if(bubble6.bubbleStatus == false){
                        bubble6.bubbleStatus = true;
                        popAnimation6();
                        }
        
                    }else if(bubble6.bubbleStatus == true){
                        if(distance5 < bubbleDiameter){
                            if(bubble5.bubbleStatus == false){
                            bubble5.bubbleStatus = true;
                            popAnimation5();
                            }
        
                        }else if(bubble5.bubbleStatus == true){
                            if(distance4 < bubbleDiameter){
                                if(bubble4.bubbleStatus == false){
                                bubble4.bubbleStatus = true;
                                popAnimation4();
                                }
        
                            }else if(bubble4.bubbleStatus == true){
                                if(distance3 < bubbleDiameter){
                                    if(bubble3.bubbleStatus == false){
                                    bubble3.bubbleStatus = true;
                                    popAnimation3();
                                    }
        
                                }else if(bubble3.bubbleStatus == true){
                                    if(distance2 < bubbleDiameter){
                                        if(bubble2.bubbleStatus == false){
                                        bubble2.bubbleStatus = true;
                                        popAnimation2();
                                        }
        
                                    }else if(bubble2.bubbleStatus == true){
                                        if(distance1 < bubbleDiameter){
                                            if(bubble1.bubbleStatus == false){
                                            bubble1.bubbleStatus = true;
                                            popAnimation1();
                                            allBubblesPopMusic();
                                            questionStatus3 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance1 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance2 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance1 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance3 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance2 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance1 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance2 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance1 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance5 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance2 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance1 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance5 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance1 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance1 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 4){
            if(distance8 < bubbleDiameter){
                if(bubble8.bubbleStatus == false){
                bubble8.bubbleStatus = true;
                popAnimation8();
                }
    
            }else if(bubble8.bubbleStatus == true){
                if(distance7 < bubbleDiameter){
                    if(bubble7.bubbleStatus == false){
                    bubble7.bubbleStatus = true;
                    popAnimation7();
                    }
    
                }else if(bubble7.bubbleStatus == true){
                    if(distance6 < bubbleDiameter){
                        if(bubble6.bubbleStatus == false){
                        bubble6.bubbleStatus = true;
                        popAnimation6();
                        }
        
                    }else if(bubble6.bubbleStatus == true){
                        if(distance5 < bubbleDiameter){
                            if(bubble5.bubbleStatus == false){
                            bubble5.bubbleStatus = true;
                            popAnimation5();
                            }
        
                        }else if(bubble5.bubbleStatus == true){
                            if(distance4 < bubbleDiameter){
                                if(bubble4.bubbleStatus == false){
                                bubble4.bubbleStatus = true;
                                popAnimation4();
                                }
        
                            }else if(bubble4.bubbleStatus == true){
                                if(distance3 < bubbleDiameter){
                                    if(bubble3.bubbleStatus == false){
                                    bubble3.bubbleStatus = true;
                                    popAnimation3();
                                    }
        
                                }else if(bubble3.bubbleStatus == true){
                                    if(distance2 < bubbleDiameter){
                                        if(bubble2.bubbleStatus == false){
                                        bubble2.bubbleStatus = true;
                                        popAnimation2();
                                        }
        
                                    }else if(bubble2.bubbleStatus == true){
                                        if(distance1 < bubbleDiameter){
                                            if(bubble1.bubbleStatus == false){
                                            bubble1.bubbleStatus = true;
                                            popAnimation1();
                                            allBubblesPopMusic();
                                            questionStatus4 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance1 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance2 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance1 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance3 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance2 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance1 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance2 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance1 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance5 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance2 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance1 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance5 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance1 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance1 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 5){
            if(distance7 < bubbleDiameter){
                if(bubble7.bubbleStatus == false){
                bubble7.bubbleStatus = true;
                popAnimation7();
                }
    
            }else if(bubble7.bubbleStatus == true){
                if(distance6 < bubbleDiameter){
                    if(bubble6.bubbleStatus == false){
                    bubble6.bubbleStatus = true;
                    popAnimation6();
                    }
        
                }else if(bubble6.bubbleStatus == true){
                    if(distance8 < bubbleDiameter){
                        if(bubble8.bubbleStatus == false){
                        bubble8.bubbleStatus = true;
                        popAnimation8();
                        }
        
                    }else if(bubble8.bubbleStatus == true){
                        if(distance5 < bubbleDiameter){
                            if(bubble5.bubbleStatus == false){
                            bubble5.bubbleStatus = true;
                            popAnimation5();
                            }
        
                        }else if(bubble5.bubbleStatus == true){
                            if(distance3 < bubbleDiameter){
                                if(bubble3.bubbleStatus == false){
                                bubble3.bubbleStatus = true;
                                popAnimation3();
                                }
        
                            }else if(bubble3.bubbleStatus == true){
                                if(distance1 < bubbleDiameter){
                                    if(bubble1.bubbleStatus == false){
                                    bubble1.bubbleStatus = true;
                                    popAnimation1();
                                    }
        
                                }else if(bubble1.bubbleStatus == true){
                                    if(distance4 < bubbleDiameter){
                                        if(bubble4.bubbleStatus == false){
                                        bubble4.bubbleStatus = true;
                                        popAnimation4();
                                        }
        
                                    }else if(bubble4.bubbleStatus == true){
                                        if(distance2 < bubbleDiameter){
                                            if(bubble2.bubbleStatus == false){
                                            bubble2.bubbleStatus = true;
                                            popAnimation2();
                                            allBubblesPopMusic();
                                            questionStatus5 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance2 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance2 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance4 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance4 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance2 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance1 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance2 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance1 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance5 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance2 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance1 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance5 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance1 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance1 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 6){
            if(distance7 < bubbleDiameter){
                if(bubble7.bubbleStatus == false){
                bubble7.bubbleStatus = true;
                popAnimation7();
                }
    
            }else if(bubble7.bubbleStatus == true){
                if(distance6 < bubbleDiameter){
                    if(bubble6.bubbleStatus == false){
                    bubble6.bubbleStatus = true;
                    popAnimation6();
                    }
        
                }else if(bubble6.bubbleStatus == true){
                    if(distance8 < bubbleDiameter){
                        if(bubble8.bubbleStatus == false){
                        bubble8.bubbleStatus = true;
                        popAnimation8();
                        }
        
                    }else if(bubble8.bubbleStatus == true){
                        if(distance5 < bubbleDiameter){
                            if(bubble5.bubbleStatus == false){
                            bubble5.bubbleStatus = true;
                            popAnimation5();
                            }
        
                        }else if(bubble5.bubbleStatus == true){
                            if(distance3 < bubbleDiameter){
                                if(bubble3.bubbleStatus == false){
                                bubble3.bubbleStatus = true;
                                popAnimation3();
                                }
        
                            }else if(bubble3.bubbleStatus == true){
                                if(distance1 < bubbleDiameter){
                                    if(bubble1.bubbleStatus == false){
                                    bubble1.bubbleStatus = true;
                                    popAnimation1();
                                    }
        
                                }else if(bubble1.bubbleStatus == true){
                                    if(distance4 < bubbleDiameter){
                                        if(bubble4.bubbleStatus == false){
                                        bubble4.bubbleStatus = true;
                                        popAnimation4();
                                        }
        
                                    }else if(bubble4.bubbleStatus == true){
                                        if(distance2 < bubbleDiameter){
                                            if(bubble2.bubbleStatus == false){
                                            bubble2.bubbleStatus = true;
                                            popAnimation2();
                                            allBubblesPopMusic();
                                            questionStatus6 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance2 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance2 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance4 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance4 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance2 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance1 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance2 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance1 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance5 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance2 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance1 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance5 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance1 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance1 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 7){
            if(distance1 < bubbleDiameter){
                if(bubble1.bubbleStatus == false){
                bubble1.bubbleStatus = true;
                popAnimation1();
                }
    
            }else if(bubble1.bubbleStatus == true){
                if(distance5 < bubbleDiameter){
                    if(bubble5.bubbleStatus == false){
                    bubble5.bubbleStatus = true;
                    popAnimation5();
                    }
        
                }else if(bubble5.bubbleStatus == true){
                    if(distance2 < bubbleDiameter){
                        if(bubble2.bubbleStatus == false){
                        bubble2.bubbleStatus = true;
                        popAnimation2();
                        }
        
                    }else if(bubble2.bubbleStatus == true){
                        if(distance6 < bubbleDiameter){
                            if(bubble6.bubbleStatus == false){
                            bubble6.bubbleStatus = true;
                            popAnimation6();
                            }
        
                        }else if(bubble6.bubbleStatus == true){
                            if(distance3 < bubbleDiameter){
                                if(bubble3.bubbleStatus == false){
                                bubble3.bubbleStatus = true;
                                popAnimation3();
                                }
        
                            }else if(bubble3.bubbleStatus == true){
                                if(distance7 < bubbleDiameter){
                                    if(bubble7.bubbleStatus == false){
                                    bubble7.bubbleStatus = true;
                                    popAnimation7();
                                    }
        
                                }else if(bubble7.bubbleStatus == true){
                                    if(distance4 < bubbleDiameter){
                                        if(bubble4.bubbleStatus == false){
                                        bubble4.bubbleStatus = true;
                                        popAnimation4();
                                        }
        
                                    }else if(bubble4.bubbleStatus == true){
                                        if(distance8 < bubbleDiameter){
                                            if(bubble8.bubbleStatus == false){
                                            bubble8.bubbleStatus = true;
                                            popAnimation8();
                                            allBubblesPopMusic();
                                            questionStatus7 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance8 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance8 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance4 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance4 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance7 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance8 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance7 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance8 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance6 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance7 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance8 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance7 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 8){
            if(distance1 < bubbleDiameter){
                if(bubble1.bubbleStatus == false){
                bubble1.bubbleStatus = true;
                popAnimation1();
                }
    
            }else if(bubble1.bubbleStatus == true){
                if(distance5 < bubbleDiameter){
                    if(bubble5.bubbleStatus == false){
                    bubble5.bubbleStatus = true;
                    popAnimation5();
                    }
        
                }else if(bubble5.bubbleStatus == true){
                    if(distance2 < bubbleDiameter){
                        if(bubble2.bubbleStatus == false){
                        bubble2.bubbleStatus = true;
                        popAnimation2();
                        }
        
                    }else if(bubble2.bubbleStatus == true){
                        if(distance6 < bubbleDiameter){
                            if(bubble6.bubbleStatus == false){
                            bubble6.bubbleStatus = true;
                            popAnimation6();
                            }
        
                        }else if(bubble6.bubbleStatus == true){
                            if(distance3 < bubbleDiameter){
                                if(bubble3.bubbleStatus == false){
                                bubble3.bubbleStatus = true;
                                popAnimation3();
                                }
        
                            }else if(bubble3.bubbleStatus == true){
                                if(distance7 < bubbleDiameter){
                                    if(bubble7.bubbleStatus == false){
                                    bubble7.bubbleStatus = true;
                                    popAnimation7();
                                    }
        
                                }else if(bubble7.bubbleStatus == true){
                                    if(distance4 < bubbleDiameter){
                                        if(bubble4.bubbleStatus == false){
                                        bubble4.bubbleStatus = true;
                                        popAnimation4();
                                        }
        
                                    }else if(bubble4.bubbleStatus == true){
                                        if(distance8 < bubbleDiameter){
                                            if(bubble8.bubbleStatus == false){
                                            bubble8.bubbleStatus = true;
                                            popAnimation8();
                                            allBubblesPopMusic();
                                            questionStatus8 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance8 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance8 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance4 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance4 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance7 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance8 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance7 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance8 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance6 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance7 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance8 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance7 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 9){
            if(distance5 < bubbleDiameter){
                if(bubble5.bubbleStatus == false){
                bubble5.bubbleStatus = true;
                popAnimation5();
                }
    
            }else if(bubble5.bubbleStatus == true){
                if(distance1 < bubbleDiameter){
                    if(bubble1.bubbleStatus == false){
                    bubble1.bubbleStatus = true;
                    popAnimation1();
                    }
        
                }else if(bubble1.bubbleStatus == true){
                    if(distance6 < bubbleDiameter){
                        if(bubble6.bubbleStatus == false){
                        bubble6.bubbleStatus = true;
                        popAnimation6();
                        }
        
                    }else if(bubble6.bubbleStatus == true){
                        if(distance2 < bubbleDiameter){
                            if(bubble2.bubbleStatus == false){
                            bubble2.bubbleStatus = true;
                            popAnimation2();
                            }
        
                        }else if(bubble2.bubbleStatus == true){
                            if(distance7 < bubbleDiameter){
                                if(bubble7.bubbleStatus == false){
                                bubble7.bubbleStatus = true;
                                popAnimation7();
                                }
        
                            }else if(bubble7.bubbleStatus == true){
                                if(distance3 < bubbleDiameter){
                                    if(bubble3.bubbleStatus == false){
                                        bubble3.bubbleStatus = true;
                                    popAnimation3();
                                    }
        
                                }else if(bubble3.bubbleStatus == true){
                                    if(distance8 < bubbleDiameter){
                                        if(bubble8.bubbleStatus == false){
                                        bubble8.bubbleStatus = true;
                                        popAnimation8();
                                        }
        
                                    }else if(bubble8.bubbleStatus == true){
                                        if(distance4< bubbleDiameter){
                                            if(bubble4.bubbleStatus == false){
                                                bubble4.bubbleStatus = true;
                                            popAnimation4();
                                            allBubblesPopMusic();
                                            questionStatus9 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance4 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance8 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance4 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance4 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance3 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance8 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance7 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance8 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance2 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance7 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance8 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance7 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance1 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 10){
            if(distance5 < bubbleDiameter){
                if(bubble5.bubbleStatus == false){
                bubble5.bubbleStatus = true;
                popAnimation5();
                }
    
            }else if(bubble5.bubbleStatus == true){
                if(distance1 < bubbleDiameter){
                    if(bubble1.bubbleStatus == false){
                    bubble1.bubbleStatus = true;
                    popAnimation1();
                    }
        
                }else if(bubble1.bubbleStatus == true){
                    if(distance6 < bubbleDiameter){
                        if(bubble6.bubbleStatus == false){
                        bubble6.bubbleStatus = true;
                        popAnimation6();
                        }
        
                    }else if(bubble6.bubbleStatus == true){
                        if(distance2 < bubbleDiameter){
                            if(bubble2.bubbleStatus == false){
                            bubble2.bubbleStatus = true;
                            popAnimation2();
                            }
        
                        }else if(bubble2.bubbleStatus == true){
                            if(distance7 < bubbleDiameter){
                                if(bubble7.bubbleStatus == false){
                                bubble7.bubbleStatus = true;
                                popAnimation7();
                                }
        
                            }else if(bubble7.bubbleStatus == true){
                                if(distance3 < bubbleDiameter){
                                    if(bubble3.bubbleStatus == false){
                                        bubble3.bubbleStatus = true;
                                    popAnimation3();
                                    }
        
                                }else if(bubble3.bubbleStatus == true){
                                    if(distance8 < bubbleDiameter){
                                        if(bubble8.bubbleStatus == false){
                                        bubble8.bubbleStatus = true;
                                        popAnimation8();
                                        }
        
                                    }else if(bubble8.bubbleStatus == true){
                                        if(distance4< bubbleDiameter){
                                            if(bubble4.bubbleStatus == false){
                                                bubble4.bubbleStatus = true;
                                            popAnimation4();
                                            allBubblesPopMusic();
                                            questionStatus10 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance4 < bubbleDiameter){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance8 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance4 < bubbleDiameter){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance4 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance3 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance8 < bubbleDiameter){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance7 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance8 < bubbleDiameter){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance2 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance7 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance8 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < bubbleDiameter){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance7 < bubbleDiameter){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance1 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < bubbleDiameter){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }

        //exit button
        if(exit <= buttonDiameter){
            // window.open("main.html");
            location.href = "Code.php";
            console.log(xmouse , ymouse);
        }
        //instruction button
        if(inst <= buttonDiameter){
        // window.open("main.html");
        instructionModal.style.display = "block";
        console.log(xmouse , ymouse);

         // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            instructionModal.style.display = "none";
        }

        window.onclick = function(event) {

            if (event.target == instructionModal) {
         
                instructionModal.style.display = "none";
         
            }
        }
        
        }
    }else if (timerStatus == false){
        if(exit <= buttonDiameter){
            // window.open("main.html");
            location.href = "Code.php";
            console.log(xmouse , ymouse);
        }

        if(inst <= buttonDiameter){
            // window.open("main.html");
            instructionModal.style.display = "block";
            console.log(xmouse , ymouse);
    
             // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                instructionModal.style.display = "none";
            }
    
            window.onclick = function(event) {
    
                if (event.target == instructionModal) {
             
                    instructionModal.style.display = "none";
             
                }
            }
            
            }
    }

    console.log(xmouse , ymouse);
    

    
    
}

//Level Respawn
function bubbleRespawn(){  
// ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
let bubble = [];
    console.log(randomNumLevel);
    if (randomNumLevel == 1){
        bubble.push(bubbleIdle1());
        bubble.push(bubbleIdle2());
        bubble.push(bubbleIdle3());
        bubble.push(bubbleIdle4());
        bubble.push(bubbleIdle5());
        bubble.push(bubbleIdle6());
        bubble.push(bubbleIdle7());
        bubble.push(bubbleIdle8());
        bubble.push(lifePoints());
        bubble.push(timex());
        bubble.push(Timer());
    }else if (randomNumLevel == 2){
        bubble = [];
        bubble.push(bubbleIdle1());
        bubble1.bubbleNum = 1;
        bubble.push(bubbleIdle2());
        bubble2.bubbleNum = 2;
        bubble.push(bubbleIdle3());
        bubble3.bubbleNum = 3;
        bubble.push(bubbleIdle4());
        bubble4.bubbleNum = 4;
        bubble.push(bubbleIdle5());
        bubble5.bubbleNum = 5;
        bubble.push(bubbleIdle6());
        bubble6.bubbleNum = 6;
        bubble.push(bubbleIdle7());
        bubble7.bubbleNum = 7;
        bubble.push(bubbleIdle8());
        bubble8.bubbleNum = 8;
        bubble.push(lifePoints());
        bubble.push(timex());
    }else if (randomNumLevel == 3){
        bubble = [];
        bubble.push(bubbleIdle1());
        bubble1.bubbleNum = 8;
        bubble.push(bubbleIdle2());
        bubble2.bubbleNum = 7;
        bubble.push(bubbleIdle3());
        bubble3.bubbleNum = 6;
        bubble.push(bubbleIdle4());
        bubble4.bubbleNum = 5;
        bubble.push(bubbleIdle5());
        bubble5.bubbleNum = 4;
        bubble.push(bubbleIdle6());
        bubble6.bubbleNum = 3;
        bubble.push(bubbleIdle7());
        bubble7.bubbleNum = 2;
        bubble.push(bubbleIdle8());
        bubble8.bubbleNum = 1;
        bubble.push(lifePoints());
        bubble.push(timex());
    }else if (randomNumLevel == 4){
        bubble = [];
        bubble.push(bubbleIdle1());
        bubble1.bubbleNum = 8;
        bubble.push(bubbleIdle2());
        bubble2.bubbleNum = 7;
        bubble.push(bubbleIdle3());
        bubble3.bubbleNum = 6;
        bubble.push(bubbleIdle4());
        bubble4.bubbleNum = 5;
        bubble.push(bubbleIdle5());
        bubble5.bubbleNum = 4;
        bubble.push(bubbleIdle6());
        bubble6.bubbleNum = 3;
        bubble.push(bubbleIdle7());
        bubble7.bubbleNum = 2;
        bubble.push(bubbleIdle8());
        bubble8.bubbleNum = 1;
        bubble.push(lifePoints());
        bubble.push(timex());
    }else if (randomNumLevel == 5){
        bubble = [];
        bubble1.bubbleNum = 6;
        bubble.push(bubbleIdle1());
        bubble2.bubbleNum = 8;
        bubble.push(bubbleIdle2());
        bubble3.bubbleNum = 5;
        bubble.push(bubbleIdle3());
        bubble4.bubbleNum = 7;
        bubble.push(bubbleIdle4());
        bubble5.bubbleNum = 4;
        bubble.push(bubbleIdle5());
        bubble6.bubbleNum = 2;
        bubble.push(bubbleIdle6());
        bubble7.bubbleNum = 1;
        bubble.push(bubbleIdle7());
        bubble8.bubbleNum = 3;
        bubble.push(bubbleIdle8());
        bubble.push(timex());
    } else if (randomNumLevel == 6){
        bubble = [];
        bubble1.bubbleNum = 6;
        bubble.push(bubbleIdle1());
        bubble2.bubbleNum = 8;
        bubble.push(bubbleIdle2());
        bubble3.bubbleNum = 5;
        bubble.push(bubbleIdle3());
        bubble4.bubbleNum = 7;
        bubble.push(bubbleIdle4());
        bubble5.bubbleNum = 4;
        bubble.push(bubbleIdle5());
        bubble6.bubbleNum = 2;
        bubble.push(bubbleIdle6());
        bubble7.bubbleNum = 1;
        bubble.push(bubbleIdle7());
        bubble8.bubbleNum = 3;
        bubble.push(bubbleIdle8());
        bubble.push(timex());
    } else if (randomNumLevel == 7 ){
        bubble = [];
        bubble1.bubbleNum = 1;
        bubble.push(bubbleIdle1());
        bubble2.bubbleNum = 3;
        bubble.push(bubbleIdle2());
        bubble3.bubbleNum = 5;
        bubble.push(bubbleIdle3());
        bubble4.bubbleNum = 7;
        bubble.push(bubbleIdle4());
        bubble5.bubbleNum = 2;
        bubble.push(bubbleIdle5());
        bubble6.bubbleNum = 4;
        bubble.push(bubbleIdle6());
        bubble7.bubbleNum = 6;
        bubble.push(bubbleIdle7());
        bubble8.bubbleNum = 8;
        bubble.push(bubbleIdle8());
        bubble.push(timex());
    }else if (randomNumLevel == 8){
        bubble = [];
        bubble1.bubbleNum = 1;
        bubble.push(bubbleIdle1());
        bubble2.bubbleNum = 3;
        bubble.push(bubbleIdle2());
        bubble3.bubbleNum = 5;
        bubble.push(bubbleIdle3());
        bubble4.bubbleNum = 7;
        bubble.push(bubbleIdle4());
        bubble5.bubbleNum = 2;
        bubble.push(bubbleIdle5());
        bubble6.bubbleNum = 4;
        bubble.push(bubbleIdle6());
        bubble7.bubbleNum = 6;
        bubble.push(bubbleIdle7());
        bubble8.bubbleNum = 8;
        bubble.push(bubbleIdle8());
        bubble.push(timex());
    }else if (randomNumLevel == 9){
        bubble = [];
        bubble1.bubbleNum = 2;
        bubble.push(bubbleIdle1());
        bubble2.bubbleNum = 4;
        bubble.push(bubbleIdle2());
        bubble3.bubbleNum = 6;
        bubble.push(bubbleIdle3());
        bubble4.bubbleNum = 8;
        bubble.push(bubbleIdle4());
        bubble5.bubbleNum = 1;
        bubble.push(bubbleIdle5());
        bubble6.bubbleNum = 3;
        bubble.push(bubbleIdle6());
        bubble7.bubbleNum = 5;
        bubble.push(bubbleIdle7());
        bubble8.bubbleNum = 7;
        bubble.push(bubbleIdle8());
        bubble.push(timex());
    } else if (randomNumLevel == 10){
        bubble = [];
        bubble1.bubbleNum = 2;
        bubble.push(bubbleIdle1());
        bubble2.bubbleNum = 4;
        bubble.push(bubbleIdle2());
        bubble3.bubbleNum = 6;
        bubble.push(bubbleIdle3());
        bubble4.bubbleNum = 8;
        bubble.push(bubbleIdle4());
        bubble5.bubbleNum = 1;
        bubble.push(bubbleIdle5());
        bubble6.bubbleNum = 3;
        bubble.push(bubbleIdle6());
        bubble7.bubbleNum = 5;
        bubble.push(bubbleIdle7());
        bubble8.bubbleNum = 7;
        bubble.push(bubbleIdle8());
        bubble.push(timex());
    } 
    exitGame();
    instructionButton();
}

canvas.addEventListener('click',(event) =>{
    // console.log(timerStatus);
    // if(timerStatus == true){
        // const rect = canvas.getBoundingClientRect();
            // const x = event.clientX - rect.left;
            // const y = event.clientY - rect.top;
            var mouseX = event.offsetX * CANVAS_WIDTH / canvas.clientWidth | 0;
            var mouseY = event.offsetY * CANVAS_HEIGHT / canvas.clientHeight | 0;
            resetStatus = true;
            clickCanvas(mouseX,mouseY);
    // }
   
});
startGame();
// multipleChoiceQuestion();
bgMusic();
// bubbleRespawn();

// // POP UP JS//

// $(document).ready(function() {
//     $(function(){
      
//       $('#popup1').css("visibility", "visible"); 
//        $('#popup1').css("opacity", 1); 
      
//        });
  
//   $( ".close" ).click(function() {
    
//        $('#popup1').css("visibility", "hidden"); 
//        $('#popup1').css("opacity", 0);
//     });
