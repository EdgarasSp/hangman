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
            // alert(`Key: ${keyPressed} Pressed`);
        })
    }
});

// declare var

// Retrieves from memory selected game type from index.html
let gameType = localStorage.getItem("gameSelection");
let word = "";
let guessed = [];
let guessState = null;




// get elements

// create html game-area based on game type


// Generates on screen lives TBC

// Generates on screen Keyboard
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <div
          class="keys"
          id='` + letter + `'
          data-type='` + letter + `'
          onClick="checkGuess('` + letter + `')"
          >
        <a>  ` + letter + ` </a>
        </div>
      `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
};


function runGame (gameType){
  randomWord();
  guess();
}

// Generates random word based on variables and selected game type
function randomWord() {
  var easyWordsList = ["bleach","hacked","labels","belief","cream","guide","uncle","rural","sixth","wrong"]
  var mediumWordsList = ["anxious","chicken","exclude","unknown","oblivion","yearbook","umbrella","tampered","readying","pedantic"]
  var hardWordsList = ["chickenpox","friendship","quicksteps","backpacker","vaccinations","quarterbacks","taskmistress","pagination","jalapenos","waistband"]

  if (gameType === "easy") {
      word = easyWordsList[Math.floor(Math.random() * easyWordsList.length)];
       console.log(word);
  } else if (gameType === "medium") {
      word = mediumWordsList[Math.floor(Math.random() * mediumWordsList.length)];
      console.log(word);
  } else if (gameType === "hard") {
      word = hardWordsList[Math.floor(Math.random() * hardWordsList.length)];
      console.log(word);
  } else {
    console.log(`unknown game type`);
  }
}

function checkGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).style.pointerEvents = 'none';
  document.getElementById(chosenLetter).childNodes[1].style.color = '#FBFCFC';
  document.getElementById(chosenLetter).childNodes[1].style.fontSize = '12px';
 
  if (word.indexOf(chosenLetter) >= 0) {
    guess();
    document.getElementById(chosenLetter).style.backgroundColor = '#7DCEA0';
    console.log(`first line - correct letter guess`);
  } else if (word.indexOf(chosenLetter) === -1) {
    document.getElementById(chosenLetter).style.backgroundColor = '#F1948A';
    console.log(`second line - wrong letter guess`);
  }
}

console.log(guessed);

function guess() {
  guessState = word.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('word-random').innerHTML = guessState;
}
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