const playerText = document.querySelector('#playerText');
const compText = document.querySelector('#compText');
const rezText = document.querySelector('#rezText');
const btns = document.querySelectorAll('.btn');

let player;
let computer;
let result;

btns.forEach(btn => btn.addEventListener("click", () => {
    player = btn.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    compText.textContent = `Computer: ${computer}`;
    rezText.textContent = checkWinner();
}));

    function computerTurn(){
        
    const randomNo = Math.floor(Math.random() * 3) + 1;

    switch(randomNo) {
        case 1:
            computer = "👊";
            break;
        case 2:
            computer = "🤚";
            break;
        case 3:
            computer = "✌";
            break;
    }
}

function checkWinner() {
    if(player == computer) {
        return "Try again! 👀";
    } else if(computer == "👊") {
        return(player == "🤚") ? "You Win! 🤩" : "Sorry, you Lose! 🥱";
    } else if(computer == "🤚") {
        return(player == "✌") ? "You Win! 😁": "You Lose! 🤔";
    } else if(computer == "✌") {
        return(player == "👊") ? "You Win! 😉" : "Ajajai.. you Lose! 😪";
    }
}

// const bodyDOM = document.getElementById('fullReset');


// resetDOM.addEventListener('click', () => {
//     bodyDOM.insertHTML = `<body>
//     <div id="fullReset">
//     <div id="game">
//         <h1  class="text" id="playerText">Player:</h1>
//         <h1  class="text" id="compText">Computer:</h1>
//         <h1  class="text" id="rezText">Result:</h1>
//     </div>

//     <div class="buttons">
//     <button class="btn">👊</button>
//     <button class="btn">🤚</button>
//     <button class="btn">✌</button>
//     </div>
    

//     <div id="reset">
//     <button calss="button ">Play from scratch!</button>
//     </div>

//     </div>

//     <script src="./js/index.js" type="module" defer></script>
// </body>`});
