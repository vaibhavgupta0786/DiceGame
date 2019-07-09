/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*   pig-DOM Game */



var scores , roundScore , activePlayer  , gamePlaying , prevRoll ;
init();


//function btn(){

	/// do something 
//}
/* here btn is a call back function which is one that
 is called 
by another funtion not or passed as an argurment 
to other function*/

/* or we can also add a function 
here only as an annonymous function*/


document.querySelector('.btn-roll').addEventListener('click' , function(){
if(gamePlaying){
// we need a button roll;	
var dice = Math.floor((Math.random()*6)) + 1;



// display the result by changing the display properties
// display the dice block
var diceDom  = document.querySelector('.dice');
diceDom.style.display = 'block' ;
// display the no on dice
diceDom.src = 'dice-' + dice + '.png' ;
// change the scores acc
if (dice == 1) { 
	nextplayer();
} 
else if (dice == 6 && prevRoll == 6 ){ 
	scores[activePlayer] = 0;
	document.getElementById('score-'+activePlayer).textContent = scores[activePlayer] ;
	nextplayer();
}
else{
	roundScore += dice ;
	document.getElementById('current-'+activePlayer).textContent = roundScore ;
	prevRoll = dice ;
}
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if (gamePlaying){
	// update the global scores
	scores[activePlayer] += roundScore ;
	document.getElementById('score-'+ activePlayer ).textContent = scores[activePlayer] ;
	
	// check if a person wins or not;
	if (scores[activePlayer] >=20 ) {
		document.getElementById('name-'+activePlayer).textContent = "Winner!" ;
		document.querySelector('.dice').style.display = 'none' ;
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		gamePlaying = false ;

	}
	else {
	// update the UI
	nextplayer();
	}

} 

});




document.querySelector('.btn-new').addEventListener('click', init );


function nextplayer(){
	roundScore = 0  ;
	document.getElementById('current-'+activePlayer).textContent = roundScore;
	document.querySelector('.dice').style.display   =  'none'  ;
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.player-0-panel').classList.toggle('active');
	
}

function init(){

scores = [0,0];
roundScore = 0;
activePlayer = 0; 
gamePlaying = true ;
prevRoll = 0 ;
//dice = Math.floor(  Math.random()*6 ) + 1;

//document.querySelector('#current-'+ activePlayer).textContent = dice ; 
//document.querySelector('#current-'+ activePlayer).innerHTML = '<en>' + dice  +'</en>';
document.querySelector('.dice').style.display = 'none' ;
document.getElementById('score-0').textContent = 0 ;
document.getElementById('score-1').textContent = 0 ;
document.getElementById('current-0').textContent = 0 ;
document.getElementById('current-1').textContent = 0 ;
document.getElementById('name-1').textContent = 'Player 2';
document.getElementById('name-0').textContent = 'player 1';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');


}








