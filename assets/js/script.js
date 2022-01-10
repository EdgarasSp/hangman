console.log("connected...");
// Event Listener for DOM

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            // checks if on main page to identify the game type selected
            if (document.URL.includes("index.html")) {
                let gameType = this.getAttribute("data-type");
                alert(`Game Mode ${gameType} Selected`); //Shows Selected game mode Type
           } else {
            //checks if generate button pressed
                let randomLetter = this.getAttribute("data-type");
                alert(`Generate Button Pressed`);
           }
        })
    }
})

document.addEventListener("DOMContentLoaded", function() {
    let keyboard = document.getElementsByClassName("keys");

    for (let keys of keyboard) {
        keys.addEventListener("click", function() {
            let keyPressed = this.getAttribute("data-type");
            alert(`Key: ${keyPressed} Pressed`);
        })
    }
})

// declare var


// get elements


// create html game-type cards


// create html game-area based on game type


// function runGame (gameType){}

// function displayHtml (){}

// function randomWord (){}
//     function displayEasyWord () {}
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