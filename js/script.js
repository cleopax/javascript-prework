// zasady gry

const stoneBtn = document.getElementById('play-stone');
const paperBtn = document.getElementById('play-paper');
const scissorsBtn = document.getElementById('play-scissors');

// nasłuchiwacze

stoneBtn.addEventListener('click', function() { playGame(1) });
paperBtn.addEventListener('click', function() { playGame(2) });
scissorsBtn.addEventListener('click', function() { playGame(3) });

// funckja konwertująca wybór w formie liczby na tekst (1 -> 'stone')

function getMoveName(argMoveID) {
  if(argMoveID == 1) return 'stone';
  else if(argMoveID == 2) return 'paper';
  else if(argMoveID == 3) return 'scissors';
}

// funkcja ustalająca i pokazująca wynik

function displayResult(argPlayer, argComputer) {
  printMessage('Zagrałem ' + argComputer + ', a Ty ' + argPlayer);

  if((argComputer == 'stone' && argPlayer == 'paper') ||
    (argComputer == 'scissors' && argPlayer == 'stone') ||
    (argComputer == 'paper' && argPlayer == 'scissors')) {
      printMessage('Ty wygrywasz!');
  }
  else if(argComputer == argPlayer) {
     printMessage('Remis!');
  }
  else {
     printMessage('Komputer wygrywa!');
  }
}

// funkcja rozpoczynająca rundę

function playGame(playerInput) {
  clearMessages();
  
  // konwersja wyboru gracza z numeru na tekst (1 -> 'stone')

  const playerMove = getMoveName(playerInput);

  // ustalenie wyboru komputera

  const randomNumber = Math.floor(Math.random()*3+1); //losowanie od 1 do 3
  const computerMove = getMoveName(randomNumber);
  
  // ustalenie zwyciezcy

  displayResult(playerMove, computerMove);
}
function playGame(playerInput){
    clearMessages()
}


/*// 1. ustal wybór gracza


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  playerMove = '';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
	playerMove = 'papier';
}
else if(playerInput == '3'){
	playerMove = 'nożyce';
}
else {
  playerMove = 'nieznany ruch';
}

console.log(playerInput, playerMove)

printMessage('Twój ruch to: ' + playerMove);

// 2. ustal wybór komputera

let computerInput = Math.floor(Math.random() * 3) + 1;

let computerMove = '';
if(computerInput == 1){
  computerMove = 'kamień';
}

if(computerInput == 2){
	computerMove = 'papier';
}

if(computerInput == 3){
	computerMove = 'nożyce';
}

console.log(computerInput, computerMove);

printMessage('komputer wylosował: ' + computerMove);

// 3. Ustal zwycięzcę

  if((computerMove == 'kamień' && playerMove == 'papier') || 
   (computerMove == 'nożyce' && playerMove == 'kamień') ||
   (computerMove == 'papier' && playerMove == 'nożyce')) {
	   printMessage('Ty wygrywasz!');
  } 
  else if(computerMove == playerMove) {
    printMessage('Remis!');
  }
  else if(playerMove == 'nieznany ruch') {
    printMessage('Błąd!');
  }
  else {
    printMessage('Komputer wygrywa!');
  }





















