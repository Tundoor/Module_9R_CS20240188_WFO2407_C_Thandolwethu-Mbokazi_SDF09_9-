// Variebles 

let firstCard = 90
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message =""

// Make message show on website
let messageEl = document.getElementById("message-el")

// make sum display
let sumEl = document.getElementById ("sum-el")
// make cards display
let cardsEl = document.getElementById ("card-el")  

//  Create If - else conditions

function startGame() {
    //Added so sum and card renders on page
    sumEl.textContent = "Sum: " + sum
    //added so cards render
    cardsEl.textContent = "Cards: " + firstCard + "" + secondCard
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

function newCard() {
    console.log("Drawinng a new Card")
}