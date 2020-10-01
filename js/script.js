// zasady gry

function playGame(playerInput){
    clearMessages()
}

// 1. ustal wybór gracza i komputera

function getMoveName(argMoveId){
	if(argMoveID == 1){
        return kamień;
    } else if(argMoveID == 2){
        return papier;
    } else if(argMoveID == 3){
        return nożyce;
    } else {
        printMessage('Nie znam ruchu o ID ' + argMoveID + '.');
        return 'nieznany ruch';
    }
}

let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

randomNumber = Math.floor(Math.random()*3+1);

console.log('Wylosowana liczba to: '+ randomNumber);

let playerMove = getMoveName(randomNumber)
printMessage('Twój ruch: ' + playerMove);

console.log('Gracz wybrał: ' + playerInput);
playerMove = getMoveName(playerInput);

console.log('Ruchy graczy: ', computerMove, playerMove);
    

//  Ustal zwycięzcę

function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
	if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || 
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
	        printMessage('Ty wygrywasz!');
  } 
    else if(argComputerMove == argPlayerMove) {
            printMessage('Remis!');
  }
    else if(argPlayerMove == 'nieznany ruch') {
            printMessage('Błąd!');
  }
    else {
            printMessage('Komputer wygrywa!');
  }

 // guziki

 function buttonClicked(){
    printMessage('Button został kliknięty')
}
    playButton1 = document.getElementById('play-stone');
    playButton1.addEventListener('click', function(){playGame(1)});
    
    playButton2 = document.getElementById('play-paper');
    playButton2.addEventListener('click', function(){playGame(2)});
    
    playButton3 = document.getElementById('play-scissors');
    playButton3.addEventListener('click', function(){playGame(3)});


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





















