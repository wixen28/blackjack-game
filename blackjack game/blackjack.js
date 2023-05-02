
let player = {
  name: "Viktoria",
  chips: 150
}

let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ''

let messageEl = document.querySelector('#message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let playerEl = document.querySelector('#player-el')

playerEl.innerHTML = `${player.name}: ${player.chips}`

function getRandomCard() {
  let randomCard = Math.ceil(Math.random() * 13)

  if(randomCard > 10) {
    return 10
  } else if (randomCard === 1) {
    return 11
  } else {
    return randomCard
  }
}


function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard


  renderGame()
}

function renderGame() {
  cardsEl.textContent = 'Cards: '

  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + ' '
  }

  sumEl.textContent = 'Sum: ' + sum 


  if(sum < 20) {
    message = 'Do you want a new card?'
  } else if( sum === 21) {
    hasBlackJack = true
    message = 'you have got a blackjack'
  } else {
    isAlive = false
    message = 'you are out of a game'
  }

  messageEl.innerHTML = message 
}

function newCard() {
  if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)

    renderGame()
  }
}






