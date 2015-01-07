angular
	.module('eXoApp')
	.controller('ExoController', ExoController);

ExoController.$inject = ['$firebase'];

	function ExoController($firebase){
//firebase function
		function flameGame() {
     		var ref = new Firebase('https://exo.firebaseio.com/');
      		return $firebase(ref).$asObject();
      	}

      	this.fireGame = flameGame();	

//intialize and set variables
		var k = this;

		this.newGameBoard = newGameBoard;
		this.click = click;	
		this.checkWin = checkWin;
		this.submit = submit;
		this.fireGame.playerTurn = 'P1';
		this.enter = enter;	
		this.gameStart = gameStart;

		// this.fireGame.test = 'test';
		// this.fireGame.$save();

		k.fireGame.showOne = false;
		k.fireGame.hideOne = false;
		k.fireGame.showTwo = false;
		k.fireGame.hideTwo = false;
		k.fireGame.firstName = "";
		k.fireGame.secondName = "";
		k.fireGame.start1 = false; //turns to true when players submit their names
		k.fireGame.start2 = false;
		k.fireGame.result = "";
		k.fireGame.playerStatus = "";

		function newGameBoard(){

			k.fireGame.board = [
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ],
				[ {eXo: ''}, {eXo: ''}, {eXo: ''} ]
			];
			
			k.fireGame.$save();
		}

		this.fireGame.z = 0;
		function click(row, col){
			if(k.fireGame.board[row][col].eXo === ''){

				if (k.fireGame.playerTurn === 'P1') {
					k.fireGame.board[row][col].eXo = 'X';
					k.fireGame.playerTurn = 'P2'; 

					checkWin();
				}

				else if(k.fireGame.playerTurn === 'P2'){
					k.fireGame.board[row][col].eXo = 'O';
					k.fireGame.playerTurn = 'P1';

					checkWin();
				}
			}

			else{
				alert("invalid");
			}



			console.log(k.fireGame.z);
			console.log(k.fireGame.playerTurn);
			
			k.fireGame.$save();
		};

		//function to check wins. 
		function checkWin(){
			X = k.fireGame.firstName;
			O = k.fireGame.secondName;

			k.fireGame.z++;
			// Hortizontal Check for X
				 if(k.fireGame.board[0][0].eXo === 'X' && k.fireGame.board[0][1].eXo === 'X' && k.fireGame.board[0][2].eXo === 'X'){k.fireGame.result = X + " Won";}
			else if(k.fireGame.board[1][0].eXo === 'X' && k.fireGame.board[1][1].eXo === 'X' && k.fireGame.board[1][2].eXo === 'X'){k.fireGame.result = X + " Won";}
			else if(k.fireGame.board[2][0].eXo === 'X' && k.fireGame.board[2][1].eXo === 'X' && k.fireGame.board[2][2].eXo === 'X'){k.fireGame.result = X + " Won";}
			// Vertical Check for X
			else if(k.fireGame.board[0][0].eXo === 'X' && k.fireGame.board[1][0].eXo === 'X' && k.fireGame.board[2][0].eXo === 'X'){k.fireGame.result = X + " Won";}
			else if(k.fireGame.board[0][1].eXo === 'X' && k.fireGame.board[1][1].eXo === 'X' && k.fireGame.board[2][1].eXo === 'X'){k.fireGame.result = X + " Won";}
			else if(k.fireGame.board[0][2].eXo === 'X' && k.fireGame.board[1][2].eXo === 'X' && k.fireGame.board[2][2].eXo === 'X'){k.fireGame.result = X + " Won";}
			//Diagonal Check for X
			else if(k.fireGame.board[0][0].eXo === 'X' && k.fireGame.board[1][1].eXo === 'X' && k.fireGame.board[2][2].eXo === 'X'){k.fireGame.result = X + " Won";}
			else if(k.fireGame.board[0][2].eXo === 'X' && k.fireGame.board[1][1].eXo === 'X' && k.fireGame.board[2][0].eXo === 'X'){k.fireGame.result = X + " Won";}
			//  Horizontal Check for O
			else if(k.fireGame.board[0][0].eXo === 'O' && k.fireGame.board[0][1].eXo === 'O' && k.fireGame.board[0][2].eXo === 'O'){k.fireGame.result = O + " Won";}
			else if(k.fireGame.board[1][0].eXo === 'O' && k.fireGame.board[1][1].eXo === 'O' && k.fireGame.board[1][2].eXo === 'O'){k.fireGame.result = O + " Won";}
			else if(k.fireGame.board[2][0].eXo === 'O' && k.fireGame.board[2][1].eXo === 'O' && k.fireGame.board[2][2].eXo === 'O'){k.fireGame.result = O + " Won";}
			// Vertical Check for O
			else if(k.fireGame.board[0][0].eXo === 'O' && k.fireGame.board[1][0].eXo === 'O' && k.fireGame.board[2][0].eXo === 'O'){k.fireGame.result = O + " Won";}
			else if(k.fireGame.board[0][1].eXo === 'O' && k.fireGame.board[1][1].eXo === 'O' && k.fireGame.board[2][1].eXo === 'O'){k.fireGame.result = O + " Won";}
			else if(k.fireGame.board[0][2].eXo === 'O' && k.fireGame.board[1][2].eXo === 'O' && k.fireGame.board[2][2].eXo === 'O'){k.fireGame.result = O + " Won";}
			//Diagonal Check for O
			else if(k.fireGame.board[0][0].eXo === 'O' && k.fireGame.board[1][1].eXo === 'O' && k.fireGame.board[2][2].eXo === 'O'){k.fireGame.result = O + " Won";}
			else if(k.fireGame.board[0][2].eXo === 'O' && k.fireGame.board[1][1].eXo === 'O' && k.fireGame.board[2][0].eXo === 'O'){k.fireGame.result = O + " Won";}
			else if(k.fireGame.z === 9 && k.fireGame.result === ""){k.fireGame.result = "Tie";}

			k.fireGame.$save();
		}

		function enter(player){
			if(player === '1'){
				k.disableTwo = true;
				k.player = player;
				k.fireGame.showOne = true;

				console.log(k.player);
				console.log("Player One Entered");
			}

			else if(player === '2'){
				k.disableOne = true;
				k.player = player;
				k.fireGame.showTwo = true;

				console.log(player);
				console.log("Player Two Entered");
			}
			k.fireGame.$save();
		}

		function submit(player){

			if(player === "1"){
				k.fireGame.firstName = k.playerOneName;
				k.fireGame.playerTurn = 'P1';
				k.fireGame.hideOne = true;
				k.fireGame.start1 = true;

				console.log(player);
				console.log(k.fireGame.start1);
				console.log(k.fireGame.playerTurn);
				console.log(k.playerOneName);
			}

			else if(player === "2"){
				k.fireGame.secondName = k.playerTwoName;
				k.fireGame.playerTurn = 'P2';
				k.fireGame.hideTwo = true;
				k.fireGame.start2 = true;

				console.log(player);
				console.log(k.fireGame.playerTurn);
				console.log(k.playerTwoName);
			}

			k.fireGame.$save();
		}

		function gameStart(){
			if(k.fireGame.start1 === true && k.fireGame.start2 === true){
				k.startGame = true;
				k.newGameBoard();
				k.fireGame.playerStatus = "ready";
			}
			else if(k.fireGame.start1 === false && k.fireGame.start2 === false){
				k.startGame = false;
				k.fireGame.playerStatus = "No one is Ready";
			}
			else if(k.fireGame.start1 === false && k.fireGame.start2 === true){
				k.fireGame.playerStatus = "Player 1 is not yet Ready";
			}
			else if(k.fireGame.start1 === true && k.fireGame.start2 === false){
				k.fireGame.playerStatus = "Player 2 is not yet Ready";
			}

			k.fireGame.$save();
		}

		k.fireGame.$save();
	}

	//add ready function to check individual player if they are ready in submit function


	














