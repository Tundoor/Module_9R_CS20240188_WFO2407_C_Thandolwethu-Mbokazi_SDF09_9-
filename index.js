// Variebles 

let firstCard = 15
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false

//  Create If - else conditions


if (sum < 21) {
    console.log("Do you want to draw a new card? 🧐")
}  else if (sum === 21 ) {
    console.log("Woohoo! You've got BlackJack!! 🤩")
    hasBlackJack = true
}  else if (sum > 21) {
     console.log("You Lose 😭")
}


// Cash Out 

