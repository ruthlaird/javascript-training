/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousDice1, previousDice2, scoreToWin;

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    previousDice1 = [0, 0];
    previousDice2 = [0, 0];
    scoreToWin = 100;
    
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('score-to-win-input').value = scoreToWin;
}

init();

/*
console.log(dice);
document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;
console.log(x);
*/

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //1. Generate random number
        function generateDiceNumber() {
            return Math.floor(Math.random() * 6) + 1;
        }
        
        var dice1Value = generateDiceNumber();
        var dice2Value = generateDiceNumber();
        
        //2. Display the result
        var dice1DOM = document.getElementById('dice1');
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1Value + '.png';
        console.log("Dice 1: " + dice1Value);
        
        var dice2DOM = document.getElementById('dice2');
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2Value + '.png';
        console.log("Dice 2: " + dice2Value);
    
        // Challenge #1: Player loses entire score if they roll 2 6s in a row
        if ((dice1Value === 6 || dice2Value === 6) && (previousDice1[activePlayer] === 6 || previousDice2[activePlayer] === 6))  {
            console.log("Sorry you rolled 2 sixes in a row");
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = 0;
            nextPlayer();
        //3. Update the round score IF the rolled number was NOT a 1
        } else if ((dice1Value !== 1) && (dice2Value !== 1)) {
            //Add score
            roundScore += dice1Value + dice2Value;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            previousDice1[activePlayer] = dice1Value;
            previousDice2[activePlayer] = dice2Value;
        }
        else {
            console.log("Sorry you rolled a 1");
            nextPlayer();
        }  
   }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
   if (gamePlaying) {
        //1. Add current score to global score
        scores[activePlayer] += roundScore;

        //2. Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //3. Check if player won game
        if (scores[activePlayer] >= scoreToWin) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
   }
    
});

function nextPlayer(){      
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        previousDice1[activePlayer] = 0;
        previousDice2[activePlayer] = 0;
        
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

//Challenge #2: user can change score required to win
document.getElementById('score-to-win-input').addEventListener('input', function() {
    scoreToWin = document.getElementById('score-to-win-input').value;
});
