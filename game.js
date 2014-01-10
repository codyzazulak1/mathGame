var PLAYER_1 = 1; 
var PLAYER_2 = 2;

var p1Lives = 3;
var p2Lives = 3;

var firstRandom 	= Math.floor(Math.random()*21);
var secondRandom 	= Math.floor(Math.random()*21);
var operation 		= Math.floor(Math.random()*3);

var turn = PLAYER_1;
var playerAnswer 	= 0;

function trueAddAnswer () 	{ return (firstRandom + secondRandom) == playerAnswer };
function trueSubAnswer () 	{ return (firstRandom - secondRandom) == playerAnswer };
function trueMultiAnswer () { return (firstRandom * secondRandom) == playerAnswer};
function trueAnswer () 		{ return trueMultiAnswer() || trueSubAnswer() || trueAddAnswer() };

function setNumbers() {
	firstRandom 	= Math.floor(Math.random()*21);
	secondRandom 	= Math.floor(Math.random()*21);
	operation 		= Math.floor(Math.random()*3);
}

function gameLoop () {
	//-----------//
	var playOrNot = prompt("Play? Y/N (if 'N', refresh to restart game)");
	if(playOrNot == "Y") {
		while(p1Lives > 0 && p2Lives > 0) {
			setNumbers();
			chooseMath(); 

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
	else {
		closeWindow();
	}
}

function closeWindow () {
	if (confirm("Sure?")) {
			window.close();
		}
}


function chooseMath() {
	console.log(operation);
	if(operation == 1) {
		console.log("1 = wants addition");
		console.log("answer = " + trueAddAnswer());
		playerAnswer = prompt(firstRandom + " + " + secondRandom + " = " );
	}
	else if(operation == 2) {
		console.log("2 = wants substraction");
		console.log("answer = " + trueSubAnswer());
		playerAnswer = prompt(firstRandom + " - " + secondRandom + " = " );
	}
	else {
		console.log("0 = wants multiplication");
		console.log("answer = " + trueMultiAnswer());
		playerAnswer = prompt(firstRandom + " * " + secondRandom + " = " );
	}
}


function answerForP1() {
	if ( !trueAnswer() ) {
		p1Lives -= 1;
		alert("Wrong! Health -1. Click 'OK' to continue. Player 2, get ready.");
	}
	else {
		alert("Right! Click 'OK' to continue. Player 2, get ready.");
	}
	turn = PLAYER_2;
	console.log(p1Lives);
}

function answerForP2() {
	if ( !trueAnswer() ) {
		p2Lives -= 1;
		alert("Wrong! Health -1. Click 'OK' to continue. Player 1, get ready.");
	}
	else {
		alert("Right! Click 'OK' to continue. Player 1, get ready.");
	}
	turn = PLAYER_1;
	console.log(p2Lives);
}


function p1GameOver() {
if(p1Lives == 0) {
	alert("Player 2 WINS!");
	alert("Click 'OK' to play again!");
}
}

function p2GameOver() {
if(p2Lives == 0) {
	alert("Player 1 WINS!");
	alert("Click 'OK' to play again!");
}
}

window.onload = function () {
	gameLoop();
};




