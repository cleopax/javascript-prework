// 1. ustal wybór gracza

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





















