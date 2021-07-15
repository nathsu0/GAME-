//calling canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// const time =  document.getElementById("time");

 // Get the modal
 var startModal = document.getElementById("startModal");
 //Play the game
 var btnStart = document.getElementById("playButton");
 
 // Get the modal
 var gameStoryModal = document.getElementById("gameStoryModal");
 var btnSkip = document.getElementById("skip");

//  var span = document.getElementsByClassName("glyphicon glyphicon-chevron-left");
 var span = document.getElementsByClassName("close")[0];
// Get the instruction modal
var instructionModal = document.getElementById("instructionModal");


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

// Get the summary of questions and answer modal
var evaluationModal = document.getElementById("evaluationModal");
var leaderboardsButton = document.getElementById("leaderboardsButton");

// Get the summary of game over modal
var gameOverModal = document.getElementById("gameOverModal");
var restartButton = document.getElementById("restartButton");
var exitButton = document.getElementById("exitButton");







//setting canvas size
const CANVAS_WIDTH = canvas.width = 1600;
const CANVAS_HEIGHT =canvas.height = 900;

//background image path
const bgImage = new Image();
bgImage.src = "bg2.jpg";

//Bubble Animation Path
const bubbleImage = new Image();
bubbleImage.src = "bubble animation.png";

//life points image path
const life = new Image();
life.src = "heart.png";

//exit button image path
const exit = new Image();
exit.src = "exit.png";

//instruction button image path
const instruction = new Image();
instruction.src = "instruction.png";


//Sprite Size
const spriteWidth = 210;
const spriteHeight = 208;

//Image Size
const imageWidth = 180;
const imageHeight = 180;

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

let resetStatus = false;


function timex(){
    ctx.font = "bold 40px Verdana";
    if(timerStatus==false){
        ctx.fillText(timeString +" "+ timer, 650 ,60);
    }
    else
    ctx.fillText(timeString, 620 ,60);

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
    if(startGameStatus == false){
        // When the user clicks the button, open the modal 
        // startModal.style.display = "block";
        // questionStatus5 = false;
        evaluation();
        // allQuestionsModal.style.display = "block";
        
    }
    
     
     // When the user clicks on playButton, close the modal and start the game
     btnStart.onclick = function() {
       startModal.style.display = "none";
       gameStoryModal.style.display = "block";
    //    bubbleRespawn();
     }

     btnSkip.onclick = function() {
        gameStoryModal.style.display = "none";
       startGameStatus = true;
        bubbleRespawn();
      }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    gameStoryModal.style.display = "none";
  }

 

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
                questionModal1.style.display = "none";
                
                staggerFrames = 10;
        
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * 150);
                bubble1.randomPositionY = Math.floor(Math.random() * 600)+100;
        
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX =  Math.floor(Math.random() * 200)+300;
                bubble2.randomPositionY = Math.floor(Math.random() * 250)+100;
        
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * 150)+300;
                bubble3.randomPositionY = Math.floor(Math.random() * 200)+500;
        
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * 100)+650;
                bubble4.randomPositionY = Math.floor(Math.random() * 250)+100;
        
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * 150)+650;
                bubble5.randomPositionY = Math.floor(Math.random() * 200)+500;
        
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * 200)+900;
                bubble6.randomPositionY = Math.floor(Math.random() * 300)+100;
        
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * 100)+1250;
                bubble7.randomPositionY = Math.floor(Math.random() * 300)+100;
        
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * 450)+950;
                bubble8.randomPositionY = Math.floor(Math.random() * 200)+500;
        

                timerStatus = false;
                timeString = "Time left :"
                timer = 7;
                interval = 1000;
                
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
                
                bubbleRespawn();

                if(lifes.lives < 5){
                    reduceLifePoints();
                }else if(lifes.lives == 5){
                    lifePoints();
                }
          
        }
    
   
        if(questionStatus2 == false){
            questionModal2.style.display = "block";
        }
        btnSubmit2.onclick= function() {
                questionStatus2 = true;
                console.log(questionStatus2);
                questionModal2.style.display = "none";
                
                staggerFrames = 10;
        
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * 150);
                bubble1.randomPositionY = Math.floor(Math.random() * 600)+100;
        
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX =  Math.floor(Math.random() * 200)+300;
                bubble2.randomPositionY = Math.floor(Math.random() * 250)+100;
        
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * 150)+300;
                bubble3.randomPositionY = Math.floor(Math.random() * 200)+500;
        
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * 100)+650;
                bubble4.randomPositionY = Math.floor(Math.random() * 250)+100;
        
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * 150)+650;
                bubble5.randomPositionY = Math.floor(Math.random() * 200)+500;
        
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * 200)+900;
                bubble6.randomPositionY = Math.floor(Math.random() * 300)+100;
        
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * 100)+1250;
                bubble7.randomPositionY = Math.floor(Math.random() * 300)+100;
        
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * 450)+950;
                bubble8.randomPositionY = Math.floor(Math.random() * 200)+500;
        

                timerStatus = false;
                timeString = "Time left :"
                timer = 7;
                interval = 1000;
                
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
                
                bubbleRespawn();

                if(lifes.lives < 5){
                    reduceLifePoints();
                }else if(lifes.lives == 5){
                    lifePoints();
                }
          
        }

        if(questionStatus3 == false){
            questionModal3.style.display = "block";
        }
        btnSubmit3.onclick= function() {
            questionStatus3 = true;
                console.log(questionStatus3);
                questionModal3.style.display = "none";
                
                staggerFrames = 10;
        
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * 150);
                bubble1.randomPositionY = Math.floor(Math.random() * 600)+100;
        
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX =  Math.floor(Math.random() * 200)+300;
                bubble2.randomPositionY = Math.floor(Math.random() * 250)+100;
        
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * 150)+300;
                bubble3.randomPositionY = Math.floor(Math.random() * 200)+500;
        
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * 100)+650;
                bubble4.randomPositionY = Math.floor(Math.random() * 250)+100;
        
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * 150)+650;
                bubble5.randomPositionY = Math.floor(Math.random() * 200)+500;
        
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * 200)+900;
                bubble6.randomPositionY = Math.floor(Math.random() * 300)+100;
        
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * 100)+1250;
                bubble7.randomPositionY = Math.floor(Math.random() * 300)+100;
        
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * 450)+950;
                bubble8.randomPositionY = Math.floor(Math.random() * 200)+500;
        

                timerStatus = false;
                timeString = "Time left :"
                timer = 7;
                interval = 1000;
                
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
                
                bubbleRespawn();

                if(lifes.lives < 5){
                    reduceLifePoints();
                }else if(lifes.lives == 5){
                    lifePoints();
                }
          
        }

        if(questionStatus4 == false){
            questionModal4.style.display = "block";
        }
        btnSubmit4.onclick= function() {
            questionStatus4 = true;
                console.log(questionStatus4);
                questionModal4.style.display = "none";
                
                staggerFrames = 10;
        
                bubble1.frameX =0;
                bubble1.frameY = 0;
                bubble1.gameFrame = 0;
                bubble1.bubbleStatus = false;
                bubble1.randomPositionX = Math.floor(Math.random() * 150);
                bubble1.randomPositionY = Math.floor(Math.random() * 600)+100;
        
                bubble2.frameX =0;
                bubble2.frameY = 0;
                bubble2.gameFrame = 0;
                bubble2.bubbleStatus = false;
                bubble2.randomPositionX =  Math.floor(Math.random() * 200)+300;
                bubble2.randomPositionY = Math.floor(Math.random() * 250)+100;
        
                bubble3.frameX =0;
                bubble3.frameY = 0;
                bubble3.gameFrame = 0;
                bubble3.bubbleStatus = false;
                bubble3.randomPositionX = Math.floor(Math.random() * 150)+300;
                bubble3.randomPositionY = Math.floor(Math.random() * 200)+500;
        
                bubble4.frameX =0;
                bubble4.frameY = 0;
                bubble4.gameFrame = 0;
                bubble4.bubbleStatus = false;
                bubble4.randomPositionX = Math.floor(Math.random() * 100)+650;
                bubble4.randomPositionY = Math.floor(Math.random() * 250)+100;
        
                bubble5.frameX =0;
                bubble5.frameY = 0;
                bubble5.gameFrame = 0;
                bubble5.bubbleStatus = false;
                bubble5.randomPositionX = Math.floor(Math.random() * 150)+650;
                bubble5.randomPositionY = Math.floor(Math.random() * 200)+500;
        
                bubble6.frameX =0;
                bubble6.frameY = 0;
                bubble6.gameFrame = 0;
                bubble6.bubbleStatus = false;
                bubble6.randomPositionX = Math.floor(Math.random() * 200)+900;
                bubble6.randomPositionY = Math.floor(Math.random() * 300)+100;
        
                bubble7.frameX =0;
                bubble7.frameY = 0;
                bubble7.gameFrame = 0;
                bubble7.bubbleStatus = false;
                bubble7.randomPositionX = Math.floor(Math.random() * 100)+1250;
                bubble7.randomPositionY = Math.floor(Math.random() * 300)+100;
        
                bubble8.frameX =0;
                bubble8.frameY = 0;
                bubble8.gameFrame = 0;
                bubble8.bubbleStatus = false;
                bubble8.randomPositionX = Math.floor(Math.random() * 450)+950;
                bubble8.randomPositionY = Math.floor(Math.random() * 200)+500;
        

                timerStatus = false;
                timeString = "Time left :"
                timer = 7;
                interval = 1000;
                
                // randomNumLevel = Math.floor(Math.random() * 3)+1;
                randomNumLevel++;
                
                bubbleRespawn();

                if(lifes.lives < 5){
                    reduceLifePoints();
                }else if(lifes.lives == 5){
                    lifePoints();
                }
          
        }

        if(questionStatus5 == false){
            questionModal5.style.display = "block";
        }
        btnSubmit5.onclick= function() {
            questionStatus5 = true;
                console.log(questionStatus5);
                questionModal5.style.display = "none";

                
                evaluation();
               
                
                // gameOver();
          
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
    positionX1 : 50,
    positionX2 : 105,
    positionX3 : 160,
    positionX4 : 215,
    positionX5 : 270,
    positionY : 20,
    hearthWidth : 280,
    heartHeight : 283,
    imageHeight : 50,
    imageWidth : 50
};


//sound effects
function bgMusic(){
    // var backgroundMusic = new Audio("sound.mp3");
    var backgroundMusic = new Audio("soundeffects/sound.mp3"); 
    backgroundMusic.play();
    backgroundMusic.loop = true;
}
function popMusic(){
    // var backgroundMusic = new Audio("sound.mp3");
    var backgroundMusic = new Audio("soundeffects/Track 3.wav"); 
	backgroundMusic.currentTime = 1.7;
    backgroundMusic.play();
}
function wrongPopMusic(){
    // var backgroundMusic = new Audio("sound.mp3");
    var backgroundMusic = new Audio("soundeffects/wrongpop.mp3"); 
	backgroundMusic.currentTime = 1;
    backgroundMusic.play();
}
function allBubblesPopMusic(){
    // var backgroundMusic = new Audio("sound.mp3");
    var backgroundMusic = new Audio("soundeffects/Success.mp3"); 
	backgroundMusic.currentTime = 1;
    backgroundMusic.play();
}

//exit game
function exitGame(){
    //Draw Image for 1st bubble idle 
    ctx.drawImage(exit,0 * 138, 0 * 138,
        138,138,1450,20,70,70);
       
       //request Animation
        requestAnimationFrame(exitGame);
}

//instruction
function instructionButton(){
    //Draw Image for 1st bubble idle 
    ctx.drawImage(instruction,0 * 138, 0 * 132,
        138,138,1350,20,70,70);
       
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
    //Clearing canvas
    // ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // ctx.font = "bold 110px Verdana";
    //Bubble number
    // ctx.fillText("Game Over",450, 200);
    
    // ctx.font = "60px Verdana";
    // ctx.fillText("Total Scores: "+ " 50",550, 300);
    
    // timeString = " " ;
    // requestAnimationFrame(gameOver);



startGameStatus = false;

if(startGameStatus == false){
    gameOverModal.style.display ="block";

    restartButton.onclick= function() {
        gameOverModal.style.display ="none";
        location.href = "index.html";
    }

    exitButton.onclick= function() {
        gameOverModal.style.display ="none";
        location.href = "main.html";
    }

}


}

function evaluation(){
    evaluationModal.style.display = "block";
    restartButton.onclick= function() {
       evaluationModal.style.display ="none";
       location.href = "index.html";
   }

   leaderboardsButton.onclick= function() {
       evaluationModal.style.display ="none";
       location.href = "leaderboards.html";
   }

   exitButton.onclick= function() {
       evaluationModal.style.display ="none";
       location.href = "main.html";
   }
}

//variables of 1st bubble
let bubble1 = {
    randomPositionX : Math.floor(Math.random() * 150),
    randomPositionY : Math.floor(Math.random() * 600)+100,
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 1
};

//variables of 2nd bubble
let bubble2 = {
    randomPositionX : Math.floor(Math.random() * 200)+300,
    randomPositionY : Math.floor(Math.random() * 300)+100,
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 2
};

//variables of 3rd bubble
let bubble3 = {
    randomPositionX : Math.floor(Math.random() * 150)+300,
    randomPositionY : Math.floor(Math.random() * 200)+500,
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 3
};

//variables of 4th bubble
let bubble4 = {
    randomPositionX : Math.floor(Math.random() * 100)+650,
    randomPositionY : Math.floor(Math.random() * 300)+100,
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 4
};

//variables of 5th bubble
let bubble5 = {
    randomPositionX : Math.floor(Math.random() * 150)+650,
    randomPositionY : Math.floor(Math.random() * 200)+500,
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 5
};

//variables of 6th bubble
let bubble6 = {
    randomPositionX : Math.floor(Math.random() * 200)+900,
    randomPositionY : Math.floor(Math.random() * 300)+100,
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 6
};

//variables of 7th bubble
let bubble7 = {
    randomPositionX : Math.floor(Math.random() * 100)+1250,
    randomPositionY : Math.floor(Math.random() * 300)+100,
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 7
};

//variables of 8th bubble
let bubble8 = {
    randomPositionX : Math.floor(Math.random() * 450)+950,
    randomPositionY : Math.floor(Math.random() * 200)+500,
    frameX : 0,
    frameY : 0,
    gameFrame : 0,
    bubbleStatus : false,
    bubbleNum : 8
};




//Bubble 1st idle Animation
function bubbleIdle1(){
    //Clearing canvas
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.font = "70px Verdana";
         //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble1.frameX * spriteWidth, bubble1.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble1.randomPositionX,bubble1.randomPositionY,imageWidth,imageHeight);
        //Bubble number
    ctx.fillText(bubble1.bubbleNum,bubble1.randomPositionX+70, bubble1.randomPositionY+110);

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
        };
}

//Bubble 2nd idle Animation
function bubbleIdle2(){ 
    //Font Size and Style
    ctx.font = "70px Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble2.frameX * spriteWidth, bubble2.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble2.randomPositionX,bubble2.randomPositionY,imageWidth,imageHeight);
    //Bubble number
     ctx.fillText(bubble2.bubbleNum,bubble2.randomPositionX+70, bubble2.randomPositionY+110);

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
       };
}

//Bubble 3rd idle Animation
function bubbleIdle3(){
    //Font Size and Style
    ctx.font = "70px Verdana"; 
    ctx.drawImage(bubbleImage,bubble3.frameX * spriteWidth, bubble3.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble3.randomPositionX,bubble3.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble3.bubbleNum,bubble3.randomPositionX+70, bubble3.randomPositionY+110);
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
       };
}

//Bubble 4th idle Animation
function bubbleIdle4(){
    //Font Size and Style
    ctx.font = "70px Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble4.frameX * spriteWidth, bubble4.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble4.randomPositionX,bubble4.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble4.bubbleNum,bubble4.randomPositionX+70, bubble4.randomPositionY+110);

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
       };
}

//Bubble 5th idle Animation
function bubbleIdle5(){
    //Font Size and Style
    ctx.font = "70px Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble5.frameX * spriteWidth, bubble5.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble5.randomPositionX,bubble5.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble5.bubbleNum,bubble5.randomPositionX+70, bubble5.randomPositionY+110);

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
       };
}

//Bubble 6th idle Animation
function bubbleIdle6(){
    //Font Size and Style
    ctx.font = "70px Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble6.frameX * spriteWidth, bubble6.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble6.randomPositionX,bubble6.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble6.bubbleNum,bubble6.randomPositionX+70, bubble6.randomPositionY+110);

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
       };
}

//Bubble 7th idle Animation
function bubbleIdle7(){
    //Font Size and Style
    ctx.font = "70px Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble7.frameX * spriteWidth, bubble7.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble7.randomPositionX,bubble7.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble7.bubbleNum,bubble7.randomPositionX+70, bubble7.randomPositionY+110);

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
       };
}

//Bubble 8th idle Animation
function bubbleIdle8(){
    //Font Size and Style
    ctx.font = "70px Verdana";
    //Draw Image for 1st bubble idle 
    ctx.drawImage(bubbleImage,bubble8.frameX * spriteWidth, bubble8.frameY * spriteHeight,
        spriteWidth,spriteHeight,bubble8.randomPositionX,bubble8.randomPositionY,imageWidth,imageHeight);
    //Bubble number
    ctx.fillText(bubble8.bubbleNum,bubble8.randomPositionX+70, bubble8.randomPositionY+110);

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
    //radius of 1st bubble
    let centerPositionX1 = bubble1.randomPositionX +85;
    let centerPositionY1 = bubble1.randomPositionY +85;

    //radius of 2nd bubble
    let centerPositionX2 = bubble2.randomPositionX +85;
    let centerPositionY2 = bubble2.randomPositionY +85;

    //radius of 3rd bubble
    let centerPositionX3 = bubble3.randomPositionX +85;
    let centerPositionY3 = bubble3.randomPositionY +85;

    //radius of 4th bubble
    let centerPositionX4 = bubble4.randomPositionX +85;
    let centerPositionY4 = bubble4.randomPositionY +85;
    
    //radius of 5th bubble
    let centerPositionX5 = bubble5.randomPositionX +85;
    let centerPositionY5 = bubble5.randomPositionY +85;
    
    //radius of 6th bubble
    let centerPositionX6 = bubble6.randomPositionX +85;
    let centerPositionY6 = bubble6.randomPositionY +85;

    //radius of 7th bubble
    let centerPositionX7 = bubble7.randomPositionX +85;
    let centerPositionY7 = bubble7.randomPositionY +85;

    //radius of 8th bubble
    let centerPositionX8 = bubble8.randomPositionX +85;
    let centerPositionY8 = bubble8.randomPositionY +85;

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

    //Orderly clicked
    if(timerStatus == true){
        if(randomNumLevel == 1){
            if(distance1 < 60){
                if(bubble1.bubbleStatus == false){
                bubble1.bubbleStatus = true;
                popAnimation1();
                }
    
            }else if(bubble1.bubbleStatus == true){
                 if(distance2 < 60){
                    if(bubble2.bubbleStatus == false){
                        bubble2.bubbleStatus = true;
                        popAnimation2();
                    }
    
                }else if(bubble2.bubbleStatus == true){
                    if(distance3 < 60){
                        if(bubble3.bubbleStatus == false){
                            bubble3.bubbleStatus = true;
                            popAnimation3();
                        }   
    
                    }else if(bubble3.bubbleStatus == true){
                        if(distance4 < 60){
                            if(bubble4.bubbleStatus == false){
                                bubble4.bubbleStatus = true;
                                popAnimation4();
                            }
        
                        }else if(bubble4.bubbleStatus == true){
                            if(distance5 < 60){
                            if(bubble5.bubbleStatus == false){
                                bubble5.bubbleStatus = true;
                                popAnimation5();
                            }
        
                            }else if(bubble5.bubbleStatus == true){
                                if(distance6 < 60){
                                    if(bubble6.bubbleStatus == false){
                                    bubble6.bubbleStatus = true;
                                    popAnimation6();
                                    }
        
                                }else if(bubble6.bubbleStatus == true){
                                    if(distance7 < 60){
                                        if(bubble7.bubbleStatus == false){
                                        bubble7.bubbleStatus = true;
                                        popAnimation7();
                                        }
        
                                    }else if(bubble7.bubbleStatus == true){
                                        if(distance8 < 60){
                                            if(bubble8.bubbleStatus == false){
                                            bubble8.bubbleStatus = true;
                                            popAnimation8();
                                            allBubblesPopMusic();  
                                            multipleChoiceQuestion();
                                            }
                                        }
    
                                    //after bubble 6 pop      
                                    }else if(distance8 < 60){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance7 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance8 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance6 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance7 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance8 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance5 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance6 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance7 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance8 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance5 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance6 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance7 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance8 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance5 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance7 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else
                    console.log("Invalid Pop!");
            //before bubble 1 pop    
            }else if(distance2 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 2){
            if(distance8 < 60){
                if(bubble8.bubbleStatus == false){
                bubble8.bubbleStatus = true;
                popAnimation8();
                }
    
            }else if(bubble8.bubbleStatus == true){
                if(distance7 < 60){
                    if(bubble7.bubbleStatus == false){
                    bubble7.bubbleStatus = true;
                    popAnimation7();
                    }
    
                }else if(bubble7.bubbleStatus == true){
                    if(distance6 < 60){
                        if(bubble6.bubbleStatus == false){
                        bubble6.bubbleStatus = true;
                        popAnimation6();
                        }
        
                    }else if(bubble6.bubbleStatus == true){
                        if(distance5 < 60){
                            if(bubble5.bubbleStatus == false){
                            bubble5.bubbleStatus = true;
                            popAnimation5();
                            }
        
                        }else if(bubble5.bubbleStatus == true){
                            if(distance4 < 60){
                                if(bubble4.bubbleStatus == false){
                                bubble4.bubbleStatus = true;
                                popAnimation4();
                                }
        
                            }else if(bubble4.bubbleStatus == true){
                                if(distance3 < 60){
                                    if(bubble3.bubbleStatus == false){
                                    bubble3.bubbleStatus = true;
                                    popAnimation3();
                                    }
        
                                }else if(bubble3.bubbleStatus == true){
                                    if(distance2 < 60){
                                        if(bubble2.bubbleStatus == false){
                                        bubble2.bubbleStatus = true;
                                        popAnimation2();
                                        }
        
                                    }else if(bubble2.bubbleStatus == true){
                                        if(distance1 < 60){
                                            if(bubble1.bubbleStatus == false){
                                            bubble1.bubbleStatus = true;
                                            popAnimation1();
                                            allBubblesPopMusic();
                                            questionStatus2 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance1 < 60){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance2 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance1 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance3 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance2 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance1 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance2 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance1 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance5 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance2 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance1 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance5 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance1 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance1 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 3){
            if(distance7 < 60){
                if(bubble7.bubbleStatus == false){
                bubble7.bubbleStatus = true;
                popAnimation7();
                }
    
            }else if(bubble7.bubbleStatus == true){
                if(distance6 < 60){
                    if(bubble6.bubbleStatus == false){
                    bubble6.bubbleStatus = true;
                    popAnimation6();
                    }
        
                }else if(bubble6.bubbleStatus == true){
                    if(distance8 < 60){
                        if(bubble8.bubbleStatus == false){
                        bubble8.bubbleStatus = true;
                        popAnimation8();
                        }
        
                    }else if(bubble8.bubbleStatus == true){
                        if(distance5 < 60){
                            if(bubble5.bubbleStatus == false){
                            bubble5.bubbleStatus = true;
                            popAnimation5();
                            }
        
                        }else if(bubble5.bubbleStatus == true){
                            if(distance3 < 60){
                                if(bubble3.bubbleStatus == false){
                                bubble3.bubbleStatus = true;
                                popAnimation3();
                                }
        
                            }else if(bubble3.bubbleStatus == true){
                                if(distance1 < 60){
                                    if(bubble1.bubbleStatus == false){
                                    bubble1.bubbleStatus = true;
                                    popAnimation1();
                                    }
        
                                }else if(bubble1.bubbleStatus == true){
                                    if(distance4 < 60){
                                        if(bubble4.bubbleStatus == false){
                                        bubble4.bubbleStatus = true;
                                        popAnimation4();
                                        }
        
                                    }else if(bubble4.bubbleStatus == true){
                                        if(distance2 < 60){
                                            if(bubble2.bubbleStatus == false){
                                            bubble2.bubbleStatus = true;
                                            popAnimation2();
                                            allBubblesPopMusic();
                                            questionStatus3 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance2 < 60){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance2 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance4 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance4 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance2 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance1 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance2 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance1 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance5 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance2 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance1 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance5 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance1 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance1 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 4){
            if(distance1 < 60){
                if(bubble1.bubbleStatus == false){
                bubble1.bubbleStatus = true;
                popAnimation1();
                }
    
            }else if(bubble1.bubbleStatus == true){
                if(distance5 < 60){
                    if(bubble5.bubbleStatus == false){
                    bubble5.bubbleStatus = true;
                    popAnimation5();
                    }
        
                }else if(bubble5.bubbleStatus == true){
                    if(distance2 < 60){
                        if(bubble2.bubbleStatus == false){
                        bubble2.bubbleStatus = true;
                        popAnimation2();
                        }
        
                    }else if(bubble2.bubbleStatus == true){
                        if(distance6 < 60){
                            if(bubble6.bubbleStatus == false){
                            bubble6.bubbleStatus = true;
                            popAnimation6();
                            }
        
                        }else if(bubble6.bubbleStatus == true){
                            if(distance3 < 60){
                                if(bubble3.bubbleStatus == false){
                                bubble3.bubbleStatus = true;
                                popAnimation3();
                                }
        
                            }else if(bubble3.bubbleStatus == true){
                                if(distance7 < 60){
                                    if(bubble7.bubbleStatus == false){
                                    bubble7.bubbleStatus = true;
                                    popAnimation7();
                                    }
        
                                }else if(bubble7.bubbleStatus == true){
                                    if(distance4 < 60){
                                        if(bubble4.bubbleStatus == false){
                                        bubble4.bubbleStatus = true;
                                        popAnimation4();
                                        }
        
                                    }else if(bubble4.bubbleStatus == true){
                                        if(distance8 < 60){
                                            if(bubble8.bubbleStatus == false){
                                            bubble8.bubbleStatus = true;
                                            popAnimation8();
                                            allBubblesPopMusic();
                                            questionStatus4 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance8 < 60){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance8 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance4 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance4 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance7 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance8 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance7 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance8 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance6 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance7 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance8 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance7 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance5 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }else if(randomNumLevel == 5){
            if(distance5 < 60){
                if(bubble5.bubbleStatus == false){
                bubble5.bubbleStatus = true;
                popAnimation5();
                }
    
            }else if(bubble5.bubbleStatus == true){
                if(distance1 < 60){
                    if(bubble1.bubbleStatus == false){
                    bubble1.bubbleStatus = true;
                    popAnimation1();
                    }
        
                }else if(bubble1.bubbleStatus == true){
                    if(distance6 < 60){
                        if(bubble6.bubbleStatus == false){
                        bubble6.bubbleStatus = true;
                        popAnimation6();
                        }
        
                    }else if(bubble6.bubbleStatus == true){
                        if(distance2 < 60){
                            if(bubble2.bubbleStatus == false){
                            bubble2.bubbleStatus = true;
                            popAnimation2();
                            }
        
                        }else if(bubble2.bubbleStatus == true){
                            if(distance7 < 60){
                                if(bubble7.bubbleStatus == false){
                                bubble7.bubbleStatus = true;
                                popAnimation7();
                                }
        
                            }else if(bubble7.bubbleStatus == true){
                                if(distance3 < 60){
                                    if(bubble3.bubbleStatus == false){
                                        bubble3.bubbleStatus = true;
                                    popAnimation3();
                                    }
        
                                }else if(bubble3.bubbleStatus == true){
                                    if(distance8 < 60){
                                        if(bubble8.bubbleStatus == false){
                                        bubble8.bubbleStatus = true;
                                        popAnimation8();
                                        }
        
                                    }else if(bubble8.bubbleStatus == true){
                                        if(distance4< 60){
                                            if(bubble4.bubbleStatus == false){
                                                bubble4.bubbleStatus = true;
                                            popAnimation4();
                                            allBubblesPopMusic();
                                            questionStatus5 = false;
                                            multipleChoiceQuestion();
                                            }
                                        }
                                    //after bubble 6 pop      
                                    }else if(distance4 < 60){
                                            lifes.lives--;
                                            reduceLifePoints();
                                            wrongPopMusic();
                                    }
                                 //after bubble 5 pop      
                                }else if(distance8 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }else if(distance4 < 60){
                                        lifes.lives--;
                                        reduceLifePoints();
                                        wrongPopMusic();
                                }
                            //after bubble 4 pop
                            }else if(distance4 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance3 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }else if(distance8 < 60){
                                    lifes.lives--;
                                    reduceLifePoints();
                                    wrongPopMusic();
                            }
                        //after bubble 3 pop
                        }else if(distance4 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance3 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance7 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }else if(distance8 < 60){
                                lifes.lives--;
                                reduceLifePoints();
                                wrongPopMusic();
                        }
                        //after bubble 2 pop
                    }else if(distance4 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance2 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance7 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance8 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }else if(distance3 < 60){
                            lifes.lives--;
                            reduceLifePoints();
                            wrongPopMusic();
                    }
                //after bubble 1 pop 
                }else if(distance3 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance4 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance6 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance8 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance2 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }else if(distance7 < 60){
                        lifes.lives--;
                        reduceLifePoints();
                        wrongPopMusic();
                }
            //before bubble 1 pop    
            }else if(distance2 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance3 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance4 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance1 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance6 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance7 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else if(distance8 < 60){
                lifes.lives--;
                reduceLifePoints();
                wrongPopMusic();
            }else
                console.log("Invalid CLicked!");
        
        }
        //exit button
        if(xmouse >= 1456 && xmouse <= 1510 && ymouse >= 30 && ymouse <= 76){
            // window.open("main.html");
            location.href = "main.html";
            console.log(xmouse , ymouse);
        }
        //mechanics button
        if(xmouse >= 1356 && xmouse <= 1410 && ymouse >= 30 && ymouse <= 76){
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
        if(xmouse >= 1456 && xmouse <= 1510 && ymouse >= 30 && ymouse <= 76){
            // window.open("main.html");
            location.href = "main.html";
            console.log(xmouse , ymouse);
        }

        if(xmouse >= 1356 && xmouse <= 1410 && ymouse >= 30 && ymouse <= 76){
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
    }else if (randomNumLevel == 3){
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
        lifePoints();
    } else if (randomNumLevel == 4){
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
        lifePoints();
    } else if (randomNumLevel == 5){
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
        lifePoints();
    } 
    exitGame();
    instructionButton();
}

canvas.addEventListener('click',(event) =>{
    // console.log(timerStatus);
    // if(timerStatus == true){
        const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            resetStatus = true;
            clickCanvas(x,y);
    // }
   
});
startGame();
// multipleChoiceQuestion();
bgMusic();
// bubbleRespawn();