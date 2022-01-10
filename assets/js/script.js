// Event Listener for DOM

document.addEventListener("DOMContentLoaded", function() {
  if (document.URL.includes("game.html")) {
    generateButtons();  
    runGame();
  } else {
    return;
  }
});

document.addEventListener("DOMContentLoaded", function() {
    let keyboard = document.getElementsByClassName("keys");
    
    for (let keys of keyboard) {
        keys.addEventListener("click", function() {
            let keyPressed = this.getAttribute("data-type");
            alert(`Key: ${keyPressed} Pressed`);
        })
    }
});

// declare var

// Retrieves from memory selected game type from index.html
let gameType = localStorage.getItem("gameSelection");
let word = "";


// get elements

// create html game-area based on game type


// Generates on screen lives TBC

// Generates on screen Keyboard
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <div
          class="keys"
          data-type='` + letter + `'
          >
        <a>  ` + letter + ` </a>
        </div>
      `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
};


function runGame (gameType){
  randomWord();    
}



function randomWord() {
  var easyWordsList = ["bleach","hacked","labels","belief","Cream","Guide","Uncle","Rural","Sixth","Wrong"]
  var mediumWordsList = ["Anxious","Chicken","Exclude","Unknown","oblivion","yearbook","umbrella","tampered","readying","pedantic"]
  var hardWordsList = ["Chickenpox","Friendship","Quicksteps","Backpacker","vaccinations","quarterbacks","taskmistress","pagination","jalapenos","waistband"]

  if (gameType === "easy") {
      word = easyWordsList[Math.floor(Math.random() * easyWordsList.length)];
      document.getElementById('word-random').innerHTML = word;
      console.log(word);
  } else if (gameType === "medium") {
      word = mediumWordsList[Math.floor(Math.random() * mediumWordsList.length)];
      document.getElementById('word-random').innerHTML = word;
      console.log(word);
  } else if (gameType === "hard") {
      word = hardWordsList[Math.floor(Math.random() * hardWordsList.length)];
      document.getElementById('word-random').innerHTML = word;
      console.log(word);
  } else {
    console.log(`unknown game type`);
  }
}
  
    
//     function displayMediumWord () {}
//     function displayHardWord () {}

// function randomLetter (){}
//     function displayRandomLetter () {}

// function checkAnswer () {}

// function timerMedium (){}
//     function checkTimeOk () {}
//     function checkTimeLost () {}

// function timerHard () {}
//     function checkTimeOk () {}
//     function checkTimeLost () {}

// function livesTracker () {}
//     function checkGameWon () {}
//     function checkGameLost () {}

// function scoreTracker () {}
//     function incrementCorrectScore(){}
//     function incrementIncorrectScore(){}


// function actionTracker () {}

// function gameContinue () {}
//     function resetGame () {}


// function gameEnd () {}

// generateButtons();
// randomWord();