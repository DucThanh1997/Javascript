/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;
var gamePlaying;
var previousDice = 0

document.querySelector('.dice1').style.display = 'none'
document.querySelector('.dice2').style.display = 'none'

// callback function la function khong duoc goi boi chung ta ma duoc goi bang function khac

// anoynymus function la function khong co ten va khong the reuse

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'

document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

init()

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // Random number
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        // Display the result
        diceDOM1 = document.querySelector('.dice1')
        diceDOM1.style.display = 'block'
        diceDOM1.src = 'dice-' + dice1 + '.png'

        diceDOM2 = document.querySelector('.dice2')
        diceDOM2.style.display = 'block'
        diceDOM2.src = 'dice-' + dice2 + '.png'
        
        console.log("previousDice: ", previousDice)
        console.log("dice: ", dice1)

        // Update the round score if the rolled number was not a 1
        if (dice1 !== 1 && dice2 !==2) {
            // add score
            roundScore += dice1 + dice2;
            
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer()
        }

    }
    
})

var test = 0;

console.log("test: ", test)
document.querySelector('.yooo').addEventListener('click', function() {
    test = document.getElementById('myInput').value
    console.log("test: ", test)
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add current score 
        scores[activePlayer] += roundScore

        // update ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        previousDice = 0
        // check if player won the game
        if (scores[activePlayer] >= parseInt(test)) {
            document.querySelector('#name-' + activePlayer ).textContent = 'Winner'
            document.querySelector('.dice1').style.display = 'none'
            document.querySelector('.dice2').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false
        }

        // next_player
        nextPlayer()
    }


})


function nextPlayer() {
    activePlayer == 1 ? activePlayer = 0 : activePlayer = 1
    roundScore = 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice1').style.display = 'none'
    document.querySelector('.dice2').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init) 


function init() {
    gamePlaying = true
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice1').style.display = 'none'
    document.querySelector('.dice2').style.display = 'none'
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
    document.querySelector('.player-1-panel').classList.remove('active')
}





















// document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent
// console.log("x: ", x);