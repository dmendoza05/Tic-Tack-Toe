angular
	.module('eXoApp')
	.controller('ExoController', ExoController);

ExoController.$inject = ['$firebase'];

	function ExoController($firebase){
		var cntrlr = this;
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
      	// cntrlr.fireGame.playerOneTurn = true;
      	// cntrlr.fireGame.playerTwoPresent = true;
      	// cntrlr.fireGame.gameboard = [[][][]];
      	// cntrlr.fireGame.$save();


		z = 0;
		function click(row, col){
			if(cntrlr.fireGame.board[row][col].eXo === ''){
				if (playerTurn === 'X') {
					cntrlr.fireGame.board[row][col].eXo = 'X';
					playerTurn = 'O'; 
					checkTie();
					cntrlr.fireGame.$save();
				}
				else{
					cntrlr.fireGame.board[row][col].eXo = 'O';
					playerTurn = 'X';
					checkTie();
					cntrlr.fireGame.$save();
				}
			}
			else if(z >= 8){
				console.log("hoy");
				resetGame();
				cntrlr.fireGame.$save();
			}
			else{
				alert("invalid");
				cntrlr.fireGame.$save();
			}
			checkWinX();
			checkWinO();

			cntrlr.fireGame.$save();
		};

		function checkWinX(){
			// Hortizontal Check for X
			if(cntrlr.fireGame.board[0][0].eXo === 'X' && cntrlr.fireGame.board[0][1].eXo === 'X' && cntrlr.fireGame.board[0][2].eXo === 'X'){return z = 8, cntrlr.result = "X Won";}
			else if(cntrlr.fireGame.board[1][0].eXo === 'X' && cntrlr.fireGame.board[1][1].eXo === 'X' && cntrlr.fireGame.board[1][2].eXo === 'X'){return z = 8, cntrlr.result = "X Won";}
			else if(cntrlr.fireGame.board[2][0].eXo === 'X' && cntrlr.fireGame.board[2][1].eXo === 'X' && cntrlr.fireGame.board[2][2].eXo === 'X'){return z = 8, cntrlr.result = "X Won";}
			// Vertical Check for X
			else if(cntrlr.fireGame.board[0][0].eXo === 'X' && cntrlr.fireGame.board[1][0].eXo === 'X' && cntrlr.fireGame.board[2][0].eXo === 'X'){return z = 8, cntrlr.result = "X Won";}
			else if(cntrlr.fireGame.board[0][1].eXo === 'X' && cntrlr.fireGame.board[1][1].eXo === 'X' && cntrlr.fireGame.board[2][1].eXo === 'X'){return z = 8, cntrlr.result = "X Won";}
			else if(cntrlr.fireGame.board[0][2].eXo === 'X' && cntrlr.fireGame.board[1][2].eXo === 'X' && cntrlr.fireGame.board[2][2].eXo === 'X'){return z = 8, cntrlr.result = "X Won";}
			//Diagonal Check for X
			else if(cntrlr.fireGame.board[0][0].eXo === 'X' && cntrlr.fireGame.board[1][1].eXo === 'X' && cntrlr.fireGame.board[2][2].eXo === 'X'){return z = 8, cntrlr.result = "X Won";}
			else if(cntrlr.fireGame.board[0][2].eXo === 'X' && cntrlr.fireGame.board[1][1].eXo === 'X' && cntrlr.fireGame.board[2][0].eXo === 'X'){return z = 8, cntrlr.result = "X Won";}

			cntrlr.fireGame.$save();
		}
		function checkWinO(){
			//  Horizontal Check for O
			if(cntrlr.fireGame.board[0][0].eXo === 'O' && cntrlr.fireGame.board[0][1].eXo === 'O' && cntrlr.fireGame.board[0][2].eXo === 'O'){return z = 8, cntrlr.result = "O Won";}
			else if(cntrlr.fireGame.board[1][0].eXo === 'O' && cntrlr.fireGame.board[1][1].eXo === 'O' && cntrlr.fireGame.board[1][2].eXo === 'O'){return z = 8, cntrlr.result = "O Won";}
			else if(cntrlr.fireGame.board[2][0].eXo === 'O' && cntrlr.fireGame.board[2][1].eXo === 'O' && cntrlr.fireGame.board[2][2].eXo === 'O'){return z = 8, cntrlr.result = "O Won";}
			// Vertical Check for O
			else if(cntrlr.fireGame.board[0][0].eXo === 'O' && cntrlr.fireGame.board[1][0].eXo === 'O' && cntrlr.fireGame.board[2][0].eXo === 'O'){return z = 8, cntrlr.result = "O Won";}
			else if(cntrlr.fireGame.board[0][1].eXo === 'O' && cntrlr.fireGame.board[1][1].eXo === 'O' && cntrlr.fireGame.board[2][1].eXo === 'O'){return z = 8, cntrlr.result = "O Won";}
			else if(cntrlr.fireGame.board[0][2].eXo === 'O' && cntrlr.fireGame.board[1][2].eXo === 'O' && cntrlr.fireGame.board[2][2].eXo === 'O'){return z = 8, cntrlr.result = "O Won";}
			//Diagonal Check for O
			else if(cntrlr.fireGame.board[0][0].eXo === 'O' && cntrlr.fireGame.board[1][1].eXo === 'O' && cntrlr.fireGame.board[2][2].eXo === 'O'){return z = 8, cntrlr.result = "O Won";}
			else if(cntrlr.fireGame.board[0][2].eXo === 'O' && cntrlr.fireGame.board[1][1].eXo === 'O' && cntrlr.fireGame.board[2][0].eXo === 'O'){return z = 8, cntrlr.result = "O Won";}

			cntrlr.fireGame.$save();
		}


		function checkTie(){
			if(z == 8){
				return cntrlr.result = "Tie";
			}
			else{
				z++; 
			}
			console.log(z);

			cntrlr.fireGame.$save();
		}	

		function resetGame(){
			cntrlr.fireGame.board = newGameBoard();
			z = 0;
			cntrlr.result = '';

			cntrlr.fireGame.$save();
		}

		function newGameBoard(){
			console.log(cntrlr.fireGame);
			cntrlr.fireGame.board = [
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ]
			];

			cntrlr.fireGame.$save();
		}

	}


	














