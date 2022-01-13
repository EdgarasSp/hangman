// // Event Listener for DOM

document.addEventListener("DOMContentLoaded", function() {
     let buttons = document.getElementsByTagName("button");

     for (let button of buttons) {
        button.addEventListener("click", function() {
            // checks if on main page to identify the game type selected
            if (document.body.contains( document.getElementById('menu') )) {
                let gameTypeSelected = this.getAttribute("data-type");
                localStorage.setItem("gameSelection", gameTypeSelected);
                window.location.href='game.html';
                console.log(gameTypeSelected);
            } 
        })
    }
});

// document.URL.includes("index.html")