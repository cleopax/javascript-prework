let computerMove = `kamień`;
	printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = 'papier';
	printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
	playerMove = 'papier';
}

if(playerInput == '3'){
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  }
if( computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Komputer wygrywa!');
  }
if( computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  }
if( computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Komputer wygrywa!');
  }
if( computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty wygrywasz!');
  }
if( computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
  }
if( computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Komputer wygrywa!');
  }
  if( computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Remis!');
  }
  if( computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis!');
  }
  if( computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis!');
  }
  if( playerMove == 'nieznany ruch'){
      printMessage('błąd')
  }  