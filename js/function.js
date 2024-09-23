function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function changeDiceImage() {
    const diceNumber = rollDice(); 
    const diceImage = document.getElementById("diceImage"); 
    diceImage.src = `../noppa/img/${diceNumber}.png`; 
}

const diceDiv = document.getElementById("dice");
    diceDiv.addEventListener("click", changeDiceImage);