angular
	.module('eXoApp')
	.controller('ExoController', ExoController);

ExoController.$inject = ['$firebase'];

	function ExoController($firebase){
		controllah = this;
		playerTurn = 'X';
		result = null;

		this.fireGame = fireGame();
		this.click = click;	
		this.checkWinX = checkWinX;
		this.checkWinO = checkWinO;
		this.resetGame = resetGame;
		this.gameArray = newGameBoard();

		// this.whoWon = whoWon;

		function fireGame() {
     		var ref = new Firebase('https://exo.firebaseio.com/');
      		var flame = $firebase(ref).$asObject();

      		return flame;
      	}

      	//firebase example code
      	controllah.fireGame.playerOneTurn = true;
      	controllah.fireGame.playerTwoPresent = true;
      	controllah.fireGame.gameboard = [[][][]];
      	controllah.fireGame.$save();


		z = 0;
		function click(row, col){
			if(controllah.gameArray[row][col].eXo === ''){
				if (playerTurn === 'X') {
					controllah.gameArray[row][col].eXo = 'X';
					playerTurn = 'O'; 
					checkTie();
				}
				else{
					controllah.gameArray[row][col].eXo = 'O';
					playerTurn = 'X';
					checkTie();
				}
			}
			else if(z >= 8){
				console.log("hoy");
				resetGame();
			}
			else{
				alert("invalid");
			}
			checkWinX();
			checkWinO();
		};

		function checkWinX(){
			// Hortizontal Check for X
			if(controllah.gameArray[0][0].eXo === 'X' && controllah.gameArray[0][1].eXo === 'X' && controllah.gameArray[0][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.gameArray[1][0].eXo === 'X' && controllah.gameArray[1][1].eXo === 'X' && controllah.gameArray[1][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.gameArray[2][0].eXo === 'X' && controllah.gameArray[2][1].eXo === 'X' && controllah.gameArray[2][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			// Vertical Check for X
			else if(controllah.gameArray[0][0].eXo === 'X' && controllah.gameArray[1][0].eXo === 'X' && controllah.gameArray[2][0].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.gameArray[0][1].eXo === 'X' && controllah.gameArray[1][1].eXo === 'X' && controllah.gameArray[2][1].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.gameArray[0][2].eXo === 'X' && controllah.gameArray[1][2].eXo === 'X' && controllah.gameArray[2][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			//Diagonal Check for X
			else if(controllah.gameArray[0][0].eXo === 'X' && controllah.gameArray[1][1].eXo === 'X' && controllah.gameArray[2][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.gameArray[0][2].eXo === 'X' && controllah.gameArray[1][1].eXo === 'X' && controllah.gameArray[2][0].eXo === 'X'){return z = 8, controllah.result = "X Won";}
		}
		function checkWinO(){
			//  Horizontal Check for O
			if(controllah.gameArray[0][0].eXo === 'O' && controllah.gameArray[0][1].eXo === 'O' && controllah.gameArray[0][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.gameArray[1][0].eXo === 'O' && controllah.gameArray[1][1].eXo === 'O' && controllah.gameArray[1][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.gameArray[2][0].eXo === 'O' && controllah.gameArray[2][1].eXo === 'O' && controllah.gameArray[2][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			// Vertical Check for O
			else if(controllah.gameArray[0][0].eXo === 'O' && controllah.gameArray[1][0].eXo === 'O' && controllah.gameArray[2][0].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.gameArray[0][1].eXo === 'O' && controllah.gameArray[1][1].eXo === 'O' && controllah.gameArray[2][1].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.gameArray[0][2].eXo === 'O' && controllah.gameArray[1][2].eXo === 'O' && controllah.gameArray[2][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			//Diagonal Check for O
			else if(controllah.gameArray[0][0].eXo === 'O' && controllah.gameArray[1][1].eXo === 'O' && controllah.gameArray[2][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.gameArray[0][2].eXo === 'O' && controllah.gameArray[1][1].eXo === 'O' && controllah.gameArray[2][0].eXo === 'O'){return z = 8, controllah.result = "O Won";}
		}


		function checkTie(){
			if(z == 8){
				return controllah.result = "Tie";
			}
			else{
				z++; 
			}
			console.log(z);
		}	

		function resetGame(){
			controllah.gameArray = newGameBoard();
			z = 0;
			controllah.result = '';
		}

		function newGameBoard(){
			return [
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ]
			];
		}

	}


	














