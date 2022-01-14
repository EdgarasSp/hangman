// Event Listener for DOM

document.addEventListener("DOMContentLoaded", function() {
  if (document.URL.includes("game.html")) {
    generateButtons();  
    generateLives ();
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



// Retrieves from memory selected game type from index.html
var gameType = localStorage.getItem("gameSelection");
// declare var
var word = "";
var guessed = [];
var guessState = null;
var lives = "12345678";
var mistakeCount = 0;
var score = 0;

// Generates on screen lives TBC

function generateLives () {
  let livesHTML = lives.split('').map(number =>
    `
      <ul id="heart">
        <li
        class="lives"
        id='` + number + `'
        data-type='` + number + `'
        >
        <i class="fas fa-heart"></i>
        </li>
      </ul>
    `).join('');

    document.getElementById('lives-status').innerHTML = livesHTML;
};

function generateButtons() {
   let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <div
        class="keys"
        id='` + letter + `'
        data-type='` + letter + `'
        onClick="checkGuess('` + letter + `');timerReset()"
        >
      <a>  ` + letter + ` </a>
      </div>
    `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
};

function runGame (gameType){
  randomWord();
  guess();
  difficulty ();  
  // gameStatus ();
  if (document.URL.includes("game.html")) {
    gameTimer ();
  }
}

// Generates random word based on variables and selected game type
function randomWord() {
  var easyWordsList = ["bleach","hacked","labels","belief","cream","guide","uncle","rural","sixth","wrong"]
  var mediumWordsList = ["anxious","chicken","exclude","unknown","oblivion","yearbook","umbrella","tampered","readying","pedantic"]
  var hardWordsList = ["chickenpox","friendship","quicksteps","backpacker","vaccinations","quarterbacks","taskmistress","pagination","jalapenos","waistband"]

  if (gameType === "easy") {
      word = easyWordsList[Math.floor(Math.random() * easyWordsList.length)];
  } else if (gameType === "medium") {
      word = mediumWordsList[Math.floor(Math.random() * mediumWordsList.length)];
  } else if (gameType === "hard") {
      word = hardWordsList[Math.floor(Math.random() * hardWordsList.length)];
  } else {
    console.log(`unknown game type`);
  }
  console.log(word);
}

function checkGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) :   null;
  document.getElementById(chosenLetter).style.pointerEvents = 'none';
  document.getElementById(chosenLetter).childNodes[1].style.color = '#2E4053';
  document.getElementById(chosenLetter).childNodes[1].style.fontSize = '12px';
 
  if (word.indexOf(chosenLetter) >= 0) {
    guess();
    incrementCorrectScore();
    document.getElementById(chosenLetter).style.backgroundColor = '#7DCEA0';
    checkGameEnd ();
  } else if (word.indexOf(chosenLetter) === -1) {
    mistakeCount++;
    updateLives()
    incrementIncorrectScore();
    document.getElementById(chosenLetter).style.backgroundColor = '#ad8ba8';
    checkGameEnd ();    
  }
}

function guess() {
  guessState = word.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.getElementById('word-random').innerHTML = guessState;
};

// Update HTML info-bar
function difficulty () {
  document.getElementById('info-difficulty').innerHTML = gameType;
};



// TBC function randomLetter (){}
// TBC function displayRandomLetter () {}


let timeRemainingMed = 6;
let timeRemainingHard = 4;

function gameTimer (){
  let gameTime = document.getElementById('info-timer');
  if (gameType === "medium") {
    timer = setInterval(function() {
      timeRemainingMed -= 1;
      gameTime.innerHTML = timeRemainingMed;
      checkGameEnd ();
      if (timeRemainingMed === 0) {
        clearInterval(timer);        
      }
    },1000)
  } else if (gameType === "hard") {
    timer = setInterval(function() {
      timeRemainingHard -= 1;
      gameTime.innerHTML = timeRemainingHard;
      checkGameEnd ();
      if (timeRemainingHard === 0) {
        clearInterval(timer);        
      }
    },1000)
  } else {
      if (document.URL.includes("game.html")) {
        document.getElementById('timer').hidden = true;
    }
  }  
}

function timerReset() {
  timeRemainingMed = 6;
  timeRemainingHard = 4;
}

function scoreReset () {
  document.getElementById("info-score").innerText = 0;
}

function gameRestart() {
  mistakeCount = 0;
  guessed = [];
  currentScore = 0;
  timerReset()
  randomWord();
  guess()
  generateLives();
  generateButtons();
  gameTimer ()
  scoreReset ()
  document.getElementById('letter-random').hidden = true; // hidden until feature implemented
  document.getElementById('action-status').hidden = true; // hidden until feature implemented
  document.getElementById('game-menu').hidden = false;

}

// function scoreTracker () {

function incrementCorrectScore(){
  let currentScore = parseInt(document.getElementById("info-score").innerText);
  document.getElementById("info-score").innerText = currentScore += 10;
}

function incrementIncorrectScore(){
  let currentScore = parseInt(document.getElementById("info-score").innerText);
  
  if (currentScore === 0) {
    document.getElementById("info-score").innerText = 0;
  } else {
    document.getElementById("info-score").innerText = currentScore -=5;
  }
};

// on mistake replace lives icon to hollow heart

function updateLives() {
  let removeLive = document.getElementById('heart').children.length;
  if (removeLive) {
   document.getElementsByClassName('fas fa-heart')[0].setAttribute("class","far fa-heart");
  }
}

function checkGameEnd () {
  if (guessState === word) {
    document.getElementById('info-timer').innerHTML = "-";
    document.getElementById('keyboard').innerHTML =`
    <div id="message">
      <p class="won-message"><strong>congratulations... you won!!</strong></p>
      <div id="options">
        <button id="restart" class="gameEndButtons" onclick="gameRestart()" <span>Restart</span></button>
        <button id="returnMenu" class="gameEndButtons" onclick="location.href='./index.html'" <span>Menu</span></button>
        </div>
    </div>`;
    document.getElementById('letter-random').hidden = true;
    document.getElementById('action-status').hidden = true;
    document.getElementById('game-menu').hidden = true;
  } else if (mistakeCount === 8) {
    document.getElementById('info-timer').innerHTML = "-";
    document.getElementById('keyboard').innerHTML =`
    <div id="message">
      <p class="lost-message"><strong>Oh No... you ran out of lives!!</strong></p>
      <div id="options">
        <button id="restart" class="gameEndButtons" onclick="gameRestart()" <span>Restart</span></button>
        <button id="returnMenu" class="gameEndButtons" onclick="location.href='./index.html'" <span>Menu</span></button>
        </div>
    </div>`;
    document.getElementById('word-random').innerHTML = word;
    document.getElementById('letter-random').hidden = true;
    document.getElementById('action-status').hidden = true;
    document.getElementById('game-menu').hidden = true;
  } else if (gameType !== "easy") {
      if ((document.getElementById("info-timer").innerText) === "0") {
        document.getElementById('info-timer').innerHTML = "-";
        document.getElementById('keyboard').innerHTML =`
        <div id="message">
          <p class="lost-message"><strong>Oh No... you ran out of time!!</strong></p>
          <div id="options">
            <button id="restart" class="gameEndButtons" onclick="gameRestart()" <span>Restart</span></button>
            <button id="returnMenu" class="gameEndButtons" onclick="location.href='./index.html'" <span>Menu</span></button>
            </div>
        </div>`;
        document.getElementById('word-random').innerHTML = word;
        document.getElementById('letter-random').hidden = true;
        document.getElementById('action-status').hidden = true;
        document.getElementById('game-menu').hidden = true;

    }
  }
};

