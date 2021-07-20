function rightSound(){
    var rightSound = new Audio("../../audio/soundeffects/RightAnswer.mp3"); 
    rightSound.currentTime = 0.9;
    rightSound.play();
}
rightSound();