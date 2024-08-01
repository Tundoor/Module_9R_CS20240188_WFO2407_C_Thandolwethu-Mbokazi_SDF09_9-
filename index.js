// Variebles 

let firstCard = 90
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message =""

// Make message show on website
let messageEl = document.getElementById("message-el")

//  Create If - else conditions

function startGame() {
if (sum < 21) {
    message = "Do you want to draw a new card? 🧐"
    isAlive = false
}  else if (sum === 21 ) {
    message = "You've got BlackJack!! 🤩"
    hasBlackJack = true
}  else if (sum > 21) {
     message = "You Lose 😭"
     isAlive = false
}

messageEl.textContent = message
}