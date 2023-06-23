const playerText = document.querySelector('#playerText');
const compText = document.querySelector('#compText');
const rezText = document.querySelector('#rezText');
const btns = document.querySelectorAll('.btn');

let player;
let computer;
let rezult;

btns.forEach(button => button.addEventListener("Click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    compText.textContent = `Computer: ${computer}`;
    rezText.textContent = checkWinner();
}));

    function computerTurn(){
        
    const randomNo = Math.floor(Math.random() * 3) + 1;

    switch(randomNo) {
        case 1:
            computer = "Rock 👊";
            break;
        case 2:
            computer = "Paper ✋";
            break;
        case 3:
            computer = "Sciccors ✌";
            break;
    }
}

function checkWinner() {
    if(player == computer) {
        return "It's a draw - try again!";
    } else if(computer == "Rock 👊") {
        return(player == "Paper ✋") ? "You Won!" : "You Lost!";
    } else if(computer == "Paper ✋") {
        return(player == "Sciccors ✌") ? "You Won!" : "You Lost!";
    } else if(computer == "Sciccors ✌") {
        return(player == "Rock 👊") ? "You Won!" : "You Lost!";
    }
}
