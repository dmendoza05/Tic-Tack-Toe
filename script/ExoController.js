angular
	.module('eXoApp')
	.controller('ExoController', ExoController);

ExoController.$inject = ['$firebase'];

	function ExoController($firebase){
//firebase function
		function fireGame() {
     		var ref = new Firebase('https://exo.firebaseio.com/');
      		return $firebase(ref).$asObject();
      	}

      	this.fireGame = fireGame();	

//intialize and set variables
		var k = this;
		var	result = null;

		this.click = click;	
		this.checkWin = checkWin;
		this.submit = submit;
		this.playerTurn = null;
		this.enter = enter;	
		this.newGameBoard = newGameBoard;

		// this.fireGame.test = 'test';
		// this.fireGame.$save();

		function newGameBoard(){
			k.fireGame.showOne = false;
			k.fireGame.showTwo = false;
			k.fireGame.firstName = "";
			k.fireGame.secondName = "";
			k.fireGame.start1 = "false"; //turns to true when players submit their names
			k.fireGame.start2 = "false";
			k.fireGame.result = " ";

			k.fireGame.board = [
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ]
			];
			
			k.fireGame.$save();
		}

		z = 0;
		function click(row, col){
			if(k.fireGame.board[row][col].eXo === ''){

				if (k.fireGame.playerTurn === 'P1') {
					k.fireGame.board[row][col].eXo = 'X';
					k.fireGame.playerTurn = 'P2'; 
					k.fireGame.$save();
				}

				else{
					k.fireGame.board[row][col].eXo = 'O';
					k.fireGame.playerTurn = 'P1';
					k.fireGame.$save();	
				}
			}

			else{

				alert("invalid");
				k.fireGame.$save();
			}
			z++;
			checkWin();

			console.log(z);
			console.log(k.fireGame.playerTurn);
			console.log(checkWin());
			
			k.fireGame.$save();
		};

		//function to check wins. 
		function checkWin(){
			// Hortizontal Check for X
				 if(k.fireGame.board[0][0].eXo === 'X' && k.fireGame.board[0][1].eXo === 'X' && k.fireGame.board[0][2].eXo === 'X'){return z = 8, k.fireGame.result = "X Won";}
			else if(k.fireGame.board[1][0].eXo === 'X' && k.fireGame.board[1][1].eXo === 'X' && k.fireGame.board[1][2].eXo === 'X'){return z = 8, k.fireGame.result = "X Won";}
			else if(k.fireGame.board[2][0].eXo === 'X' && k.fireGame.board[2][1].eXo === 'X' && k.fireGame.board[2][2].eXo === 'X'){return z = 8, k.fireGame.result = "X Won";}
			// Vertical Check for X
			else if(k.fireGame.board[0][0].eXo === 'X' && k.fireGame.board[1][0].eXo === 'X' && k.fireGame.board[2][0].eXo === 'X'){return z = 8, k.fireGame.result = "X Won";}
			else if(k.fireGame.board[0][1].eXo === 'X' && k.fireGame.board[1][1].eXo === 'X' && k.fireGame.board[2][1].eXo === 'X'){return z = 8, k.fireGame.result = "X Won";}
			else if(k.fireGame.board[0][2].eXo === 'X' && k.fireGame.board[1][2].eXo === 'X' && k.fireGame.board[2][2].eXo === 'X'){return z = 8, k.fireGame.result = "X Won";}
			//Diagonal Check for X
			else if(k.fireGame.board[0][0].eXo === 'X' && k.fireGame.board[1][1].eXo === 'X' && k.fireGame.board[2][2].eXo === 'X'){return z = 8, k.fireGame.result = "X Won";}
			else if(k.fireGame.board[0][2].eXo === 'X' && k.fireGame.board[1][1].eXo === 'X' && k.fireGame.board[2][0].eXo === 'X'){return z = 8, k.fireGame.result = "X Won";}
			//  Horizontal Check for O
			else if(k.fireGame.board[0][0].eXo === 'O' && k.fireGame.board[0][1].eXo === 'O' && k.fireGame.board[0][2].eXo === 'O'){return z = 8, k.fireGame.result = "O Won";}
			else if(k.fireGame.board[1][0].eXo === 'O' && k.fireGame.board[1][1].eXo === 'O' && k.fireGame.board[1][2].eXo === 'O'){return z = 8, k.fireGame.result = "O Won";}
			else if(k.fireGame.board[2][0].eXo === 'O' && k.fireGame.board[2][1].eXo === 'O' && k.fireGame.board[2][2].eXo === 'O'){return z = 8, k.fireGame.result = "O Won";}
			// Vertical Check for O
			else if(k.fireGame.board[0][0].eXo === 'O' && k.fireGame.board[1][0].eXo === 'O' && k.fireGame.board[2][0].eXo === 'O'){return z = 8, k.fireGame.result = "O Won";}
			else if(k.fireGame.board[0][1].eXo === 'O' && k.fireGame.board[1][1].eXo === 'O' && k.fireGame.board[2][1].eXo === 'O'){return z = 8, k.fireGame.result = "O Won";}
			else if(k.fireGame.board[0][2].eXo === 'O' && k.fireGame.board[1][2].eXo === 'O' && k.fireGame.board[2][2].eXo === 'O'){return z = 8, k.fireGame.result = "O Won";}
			//Diagonal Check for O
			else if(k.fireGame.board[0][0].eXo === 'O' && k.fireGame.board[1][1].eXo === 'O' && k.fireGame.board[2][2].eXo === 'O'){return z = 8, k.fireGame.result = "O Won";}
			else if(k.fireGame.board[0][2].eXo === 'O' && k.fireGame.board[1][1].eXo === 'O' && k.fireGame.board[2][0].eXo === 'O'){return z = 8, k.fireGame.result = "O Won";}
			else if(z === 8 && k.fireGame.result === ""){ return z = 8, k.result = "Tie";}

			k.fireGame.$save();
		}


		function checkTie(){

			if(z == 8){
				return k.result = "Tie";
			}

			else{
				z++; 
			}
			console.log(z);

			k.fireGame.$save();
		}	

		function enter(player){
			if(player === '1'){
				k.disableTwo = true;
				k.fireGame.showOne = true;

				console.log("Player One Entered");
			}

			else if(player === '2'){
				k.disableOne = true;
				k.fireGame.showTwo = true;

				console.log("Player Two Entered");
			}
			k.fireGame.$save();
		}

		function submit(player){

			if(player === "1"){
				k.fireGame.firstName = k.playerOneName;
				k.fireGame.playerTurn = 'P1';

				console.log(player);
				console.log(k.fireGame.playerTurn);
				console.log(k.playerOneName);
			}

			else if(player === "2"){
				k.fireGame.secondName = k.playerTwoName;
				k.fireGame.playerTurn = 'P2';

				console.log(player);
				console.log(k.fireGame.playerTurn);
				console.log(k.playerTwoName);
			}

			k.fireGame.$save();
		}

		




		k.fireGame.$save();
	}

	//add ready function to check individual player if they are ready in submit function


	














