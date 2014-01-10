var PLAYER_1 = 1; 
var PLAYER_2 = 2;

var p1Lives = 3;
var p2Lives = 3;

var firstRandom = Math.floor(Math.random()*21)
var secondRandom = Math.floor(Math.random()*21)
var operation = Math.floor(Math.random()*3)
var trueAddAnswer = firstRandom + secondRandom;
var trueSubAnswer = firstRandom - secondRandom;
var trueMultiAnswer = firstRandom * secondRandom;
var trueAnswer = trueMultiAnswer || trueSubAnswer || trueAddAnswer;
var playerAnswer = 0;

var turn = PLAYER_1;


function gameLoop () {
	//-----------//
	var playOrNot = prompt("Play? Y/N");
	if(playOrNot == "Y") {
		console.log("wants to play")
	}
	else if(playOrNot == "N") {
		console.log("close tab")
	}
	else {
		console.log("idiot")
	}

	//MAIN LOOP
	while(p1Lives > 0 && p2Lives > 0) {
		chooseMath() 

		if (turn == PLAYER_1) {
			answerForP1();
		} else {
			answerForP2();
		}

		


	}

	p1GameOver();
	p2GameOver();

	gameLoop();
}









 //CHOOSING ADD, SUB, MULTI
function chooseMath() {
	console.log(operation);
	if(operation == 1) {
		console.log("wants addition");
		console.log(trueAddAnswer)
		playerAnswer = prompt(firstRandom + " + " + secondRandom + " = " );
	}
	else if(operation == 2) {
		console.log("wants substraction");
		console.log(trueSubAnswer)
		playerAnswer = prompt(firstRandom + " - " + secondRandom + " = " );
	}
	else {
		console.log("wants multiplication");
		console.log(trueMultiAnswer)
		playerAnswer = prompt(firstRandom + " * " + secondRandom + " = " );
	}
}
//SUCCESSFUL


//------------

//PLAYER ANSWERS
function answerForP1() {
	if (player1Answer != trueAnswer) {
		p1Lives -= 1; 
	}
	else {
		alert("Right! Click 'OK' to continue");
	}
	console.log(p1Lives)
}

function answerForP2() {
	if (player2Answer != trueAnswer) {
		p2Lives -= 1;
	}
	else {
		alert("Right! Click 'OK' to continue");
	}
	console.log(p2Lives)
}

//SUCCESSFUL

//-----------

//GAME OVER
function p1GameOver() {
if(p1Lives == 0) {
	alert("Player 2 WINS!");
	alert("Refresh to play again!")
}
}

function p2GameOver() {
if(p2Lives == 0) {
	alert("Player 1 WINS!");
	alert("Refresh to play again!")
}
}
//NOT FULLY WORKING




