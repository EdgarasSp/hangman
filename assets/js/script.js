console.log("connected...");
// Event Listener for DOM

// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             // checks if on main page to identify the game type selected
//             if (document.URL.includes("index.html")) {
//                 let gameType = this.getAttribute("data-type");
//                 console.log(gameType);
//                 alert(`Game Mode ${gameType} Selected`); //Shows Selected game mode Type
                
//             } else {
//             //checks if generate button pressed
//                 let randomLetter = this.getAttribute("data-type");
//                 alert(`Generate Button Pressed`);
//            }
//         })
//     }
// });

let gameType = localStorage.getItem("gameSelection");
console.log(gameType)



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
}


// function runGame (gameType){}
//     var easyWordsList = ["bleach","hacked","labels","belief","Cream","Guide","Uncle","Rural","Sixth","Wrong"]
//     var mediumWordsList = ["Anxious","Chicken","Exclude","Unknown","oblivion","yearbook","umbrella","tampered","readying","pedantic"]
//     var hardWordsList = ["Chickenpox","Friendship","Quicksteps","Backpacker","vaccinations","quarterbacks","taskmistress","pagination","jalapenos","waistband"]

//     if (gameType === "easy") {

//     }

//     function displayEasyWord () {}


// function randomWord() {
//     word = easyWordsList[Math.floor(Math.random() * easyWordsList.length)];
//     console.log(word);
//   }
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

generateButtons();
// randomWord();