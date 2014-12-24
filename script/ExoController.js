angular
	.module('eXoApp')
	.controller('ExoController', ExoController);

ExoController.$inject = ['$firebase'];

	function ExoController($firebase){
		var controllah = this;
		playerTurn = 'X';
		result = null;

		this.fireGame = fireGame();
		this.click = click;	
		this.checkWinX = checkWinX;
		this.checkWinO = checkWinO;
		this.resetGame = resetGame;
		// this.gameArray = fireGame();
		newGameBoard();
		// this.whoWon = whoWon;

		function fireGame() {
     		var ref = new Firebase('https://exo.firebaseio.com/');
      		var flame = $firebase(ref).$asObject();
      		console.log(flame);
      		return flame;
      	}

      	//firebase example code
      	// controllah.fireGame.playerOneTurn = true;
      	// controllah.fireGame.playerTwoPresent = true;
      	// controllah.fireGame.gameboard = [[][][]];
      	// controllah.fireGame.$save();


		z = 0;
		function click(row, col){
			if(controllah.fireGame.board[row][col].eXo === ''){
				if (playerTurn === 'X') {
					controllah.fireGame.board[row][col].eXo = 'X';
					playerTurn = 'O'; 
					checkTie();
				}
				else{
					controllah.fireGame.board[row][col].eXo = 'O';
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

			controllah.fireGame.$save();
		};

		function checkWinX(){
			// Hortizontal Check for X
			if(controllah.fireGame.board[0][0].eXo === 'X' && controllah.fireGame.board[0][1].eXo === 'X' && controllah.fireGame.board[0][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.fireGame.board[1][0].eXo === 'X' && controllah.fireGame.board[1][1].eXo === 'X' && controllah.fireGame.board[1][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.fireGame.board[2][0].eXo === 'X' && controllah.fireGame.board[2][1].eXo === 'X' && controllah.fireGame.board[2][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			// Vertical Check for X
			else if(controllah.fireGame.board[0][0].eXo === 'X' && controllah.fireGame.board[1][0].eXo === 'X' && controllah.fireGame.board[2][0].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.fireGame.board[0][1].eXo === 'X' && controllah.fireGame.board[1][1].eXo === 'X' && controllah.fireGame.board[2][1].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.fireGame.board[0][2].eXo === 'X' && controllah.fireGame.board[1][2].eXo === 'X' && controllah.fireGame.board[2][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			//Diagonal Check for X
			else if(controllah.fireGame.board[0][0].eXo === 'X' && controllah.fireGame.board[1][1].eXo === 'X' && controllah.fireGame.board[2][2].eXo === 'X'){return z = 8, controllah.result = "X Won";}
			else if(controllah.fireGame.board[0][2].eXo === 'X' && controllah.fireGame.board[1][1].eXo === 'X' && controllah.fireGame.board[2][0].eXo === 'X'){return z = 8, controllah.result = "X Won";}

			controllah.fireGame.$save();
		}
		function checkWinO(){
			//  Horizontal Check for O
			if(controllah.fireGame.board[0][0].eXo === 'O' && controllah.fireGame.board[0][1].eXo === 'O' && controllah.fireGame.board[0][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.fireGame.board[1][0].eXo === 'O' && controllah.fireGame.board[1][1].eXo === 'O' && controllah.fireGame.board[1][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.fireGame.board[2][0].eXo === 'O' && controllah.fireGame.board[2][1].eXo === 'O' && controllah.fireGame.board[2][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			// Vertical Check for O
			else if(controllah.fireGame.board[0][0].eXo === 'O' && controllah.fireGame.board[1][0].eXo === 'O' && controllah.fireGame.board[2][0].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.fireGame.board[0][1].eXo === 'O' && controllah.fireGame.board[1][1].eXo === 'O' && controllah.fireGame.board[2][1].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.fireGame.board[0][2].eXo === 'O' && controllah.fireGame.board[1][2].eXo === 'O' && controllah.fireGame.board[2][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			//Diagonal Check for O
			else if(controllah.fireGame.board[0][0].eXo === 'O' && controllah.fireGame.board[1][1].eXo === 'O' && controllah.fireGame.board[2][2].eXo === 'O'){return z = 8, controllah.result = "O Won";}
			else if(controllah.fireGame.board[0][2].eXo === 'O' && controllah.fireGame.board[1][1].eXo === 'O' && controllah.fireGame.board[2][0].eXo === 'O'){return z = 8, controllah.result = "O Won";}

			controllah.fireGame.$save();
		}


		function checkTie(){
			if(z == 8){
				return controllah.result = "Tie";
			}
			else{
				z++; 
			}
			console.log(z);

			controllah.fireGame.$save();
		}	

		function resetGame(){
			controllah.fireGame.board = newGameBoard();
			z = 0;
			controllah.result = '';

			controllah.fireGame.$save();
		}

		function newGameBoard(){
			console.log(controllah.fireGame);
			controllah.fireGame.board = [
				[ {eXo: 'X'}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ]
			];

			controllah.fireGame.$save();
		}

	}


	














