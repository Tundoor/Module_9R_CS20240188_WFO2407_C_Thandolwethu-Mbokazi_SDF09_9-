// Variebles 

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message =""
let messageEl = document.getElementById("message-el")   // Make message show on website
let sumEl = document.getElementById ("sum-el")    // make sum display
let cardsEl = document.getElementById ("card-el")  // make cards display

// Object creation

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//  Create If - else conditions


 function getRandomCard () {            //Added so a random card is rendered
    let randomNumer = Math.floor( Math.random()*13 ) + 1 
       if (randomNumer > 10) {                //added this so K,Q,J gives an answer of 10
         return 10
       } else if (randomNumer === 1){         //added this so ace equals 11
        return 11
       } else {
        return randomNumer
       }
    }

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
}  else if (sum === 21 ) {
    message = "You've got BlackJack!! 🤩"
    hasBlackJack = true
}  else {
     message = "You Lose 😭"
     isAlive = false
}

    messageEl.textContent = message
}

// second button

function newCard() {
    if (isAlive === true && hasBlackJack === false ) {        //Stops dealer from giving more cards
    let card = getRandomCard()
    sum += card
    cards.push(card)    //pushed to array
    renderGame()
}
}