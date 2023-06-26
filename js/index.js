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
        return(player == "🤚") ? "You Win! 🤩" : "You Lose 🥱";
    } else if(computer == "🤚") {
        return(player == "✌") ? "You Win! 😁": "You Lose 🤔";
    } else if(computer == "✌") {
        return(player == "👊") ? "You Win! 😉" : "You Lose 😪";
    }
}
