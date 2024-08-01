// Variebles 

let firstCard = 1
let secondCard = 1
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message =""
let messageEl = document.getElementById("message-el")   // Make message show on website
let sumEl = document.getElementById ("sum-el")    // make sum display
let cardsEl = document.getElementById ("card-el")  // make cards display

//  Create If - else conditions

function startGame(){
    renderGame()
}






function renderGame() {
    cardsEl.textContent = "Cards: "                //Added so sum and card renders on page
    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
if (sum <= 21) {
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

// second button

function newCard() {
    let card = 7
    sum += card
    cards.push(card)    //pushed to array
    renderGame()
}