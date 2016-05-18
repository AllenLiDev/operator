//******************************************************************//
/*                       SCREEN LOADER                             */
//****************************************************************//

/*"Load" sets the stage for the scene and stores
the scene data for:
images, hit boxes, draggable items,
drop zones, and strings*/
var audio {
	this.entities = [];
	this.clickable = [];
	this.droppable = [];
	this.strings = [];
	this.loaded = [];
	
	this.audio = [];

	var menuMusic;
	var gameMusic;
	menuMusic = new sound("./assets/audio/menuMusic.mp3");
	gameMusic = new sound("./assets/audio/gameMusic.mp3");
	/**
	var menuMusic = new sound();
	var menuMusic = new sound();
	var menuMusic = new sound();
	var menuMusic = new sound();
	var menuMusic = new sound();
	var menuMusic = new sound();
	var menuMusic = new sound();
	**/

	this.clear = function() {
		this.entities = [];
		this.clickable = [];
		this.droppable = [];
		this.strings = [];
		this.loaded = [];
	};
	this.fill = function() {
		this.loaded.push(this.entities, this.clickable, this.droppable, this.strings);
	};
	this.menuScreen = function() {
		this.clear();
		/**
		menuMusic.play();
		**/
		var background = {
			src : "./assets/menuAssets/background.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var staticImage = {
			src : "./assets/menuAssets/staticBackground.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var timeAtkImage = {
			src : "./assets/menuAssets/timeAttackButton.png",
			width : 480,
			height : 130,
			xPos : 0,
			yPos : 270,
			index: 0
		}

		var timeAtkBox = {
			xMin : 20,
			yMin : 270,
			xMax : 475,
			yMax : 390,
			LOADER : true,
			/*Loads pre-game screen and starts time attack*/
			clicked : function() {
				gameArea.state = 1;
				return load.preGameScreen();
			}
		}
		
		var endlessImage = {
			src : "./assets/menuAssets/endlessButton.png",
			width : 480,
			height : 130,
			xPos : 480,
			yPos : 270,
			index: 0
		}

		var endlessBox = {
			xMin : 485,
			yMin : 270,
			xMax : 940,
			yMax : 390,
			LOADER : true,
			/*Loads pre-game screen and starts endless mode*/
			clicked : function() {
				gameArea.state = 2;
				gameArea.refTime = 3;
				return load.preGameScreen();
			}
		}
		
		var audioImage = {
			src : "./assets/menuAssets/audioButton.png",
			width : 126,
			height : 126,
			xPos : 834,
			yPos : 0,
			index: (function() {
				if (gameArea.sound) {
					return 0;
				} else {
					return 1;
				}
			})(),
			frames: 2
		}

		var audioBox = {
			xMin : 846,
			yMin : 25,
			xMax : 926,
			yMax : 105,
			/*Sets the audio state to on or off*/
			clicked : function() {
				if (gameArea.sound) {
					gameArea.entities[4].index = 1;
					gameArea.sound = false;
				} else {
					gameArea.entities[4].index = 0;
					gameArea.sound = true;
				}
			}
		}

		var leaderImage = {
			src : "./assets/menuAssets/leaderButton.png",
			width : 329,
			height : 140,
			xPos : 631,
			yPos : 400,
			index: 0
		}

		var leaderBox = {
			xMin : 640,
			yMin : 400,
			xMax : 940,
			yMax : 520,
			LOADER : true,
			/*Loads leader screen*/
			clicked : function() {
				return load.leaderScreen();
			}
		}

		var guideImage = {
			src : "./assets/menuAssets/guideButton.png",
			width : 300,
			height : 140,
			xPos : 331,
			yPos : 400,
			index: 0
		}

		var guideBox = {
			xMin : 331,
			yMin : 400,
			xMax : 631,
			yMax : 520,
			LOADER : true,
			/*Load guide screen*/
			clicked : function() {
				return load.guideScreen();
			}
		}

		var settingImage = {
			src : "./assets/menuAssets/settingButton.png",
			width : 331,
			height : 140,
			xPos : 0,
			yPos : 400,
			index: 0
		}

		var settingBox = {
			xMin : 20,
			yMin : 400,
			xMax : 320,
			yMax : 520,
			LOADER : true,
			/*Loads settings screen*/
			clicked : function() {
				return load.settingScreen();
			}
		}

		var symbolAdd = {
			xMin : 348,
			yMin : 174,
			xMax : 413,
			yMax : 243,
			state : false,
			/*Clickable operator addition*/
			clicked : function(){
				if (gameArea.clickable[8].state) {
					gameArea.clickable[6].state = true;
				} else {
					gameArea.clickable[9].state = false;
					gameArea.clickable[8].state = false;
					gameArea.clickable[7].state = false;
					gameArea.clickable[6].state = false;
				}
			}
		}

		var symbolMinus = {
			xMin : 414,
			yMin : 174,
			xMax : 479,
			yMax : 243,
			LOADER : true,
			/*Clickable operator subtraction*/
			clicked : function(){
				if (gameArea.clickable[6].state) {
					return load.easterScreen(Math.floor((Math.random() * 5) + 1));
				}
			}
		}

		var symbolMulti = {
			xMin : 480,
			yMin : 174,
			xMax : 545,
			yMax : 243,
			state : false,
			/*Clickable operator multiplication*/
			clicked : function(){
				if (gameArea.clickable[9].state) {
					gameArea.clickable[8].state = true;
				} else {
					gameArea.clickable[9].state = false;
					gameArea.clickable[8].state = false;
					gameArea.clickable[7].state = false;
					gameArea.clickable[6].state = false;
				}
			}
		}

		var symbolDivide = {
			xMin : 546,
			yMin : 174,
			xMax : 611,
			yMax : 243,
			state : false,
			/*Clickable operator division*/
			clicked : function(){
				gameArea.clickable[9].state = true;
				gameArea.clickable[8].state = false;
				gameArea.clickable[7].state = false;
				gameArea.clickable[6].state = false;
			}
		}

		this.entities.push(background, staticImage, timeAtkImage, endlessImage, audioImage, leaderImage, guideImage, settingImage);
		this.clickable.push(timeAtkBox, endlessBox, audioBox, leaderBox, guideBox, settingBox, symbolAdd, symbolMinus, symbolMulti, symbolDivide);
		this.fill();

		return this.loaded;
	};
	this.easterScreen = function(comicNum) {//Loads menu screen objects
		this.clear();

		var background = {
			src : "./assets/menuAssets/background.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var staticImage = {
			src : "./assets/menuAssets/staticBackground.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var timeAtkImage = {
			src : "./assets/menuAssets/timeAttackButton.png",
			width : 480,
			height : 130,
			xPos : 0,
			yPos : 270,
			index: 0
		}
		
		var endlessImage = {
			src : "./assets/menuAssets/endlessButton.png",
			width : 480,
			height : 130,
			xPos : 480,
			yPos : 270,
			index: 0
		}
		
		var audioImage = {
			src : "./assets/menuAssets/audioButton.png",
			width : 126,
			height : 126,
			xPos : 834,
			yPos : 0,
			index: (function() {
				if (gameArea.sound) {
					return 0;
				} else {
					return 1;
				}
			})(),
			frames: 2
		}

		var leaderImage = {
			src : "./assets/menuAssets/leaderButton.png",
			width : 329,
			height : 140,
			xPos : 631,
			yPos : 400,
			index: 0
		}

		var guideImage = {
			src : "./assets/menuAssets/guideButton.png",
			width : 300,
			height : 140,
			xPos : 331,
			yPos : 400,
			index: 0
		}

		var settingImage = {
			src : "./assets/menuAssets/settingButton.png",
			width : 331,
			height : 140,
			xPos : 0,
			yPos : 400,
			index: 0
		}

		var exitEaster = {
			xMin : 0,
			yMin : 0,
			xMax : 960,
			yMax : 540,
			/*Exit easter egg*/
			clicked : function() {
				gameArea.entities = [];
				gameArea.state = 3;
				gameArea.entities = this.menuScreen();
			}
		}

		var rng = comicNum;

		switch (rng) {
			case 1:
				var easterImage = {
					src : "./assets/menuAssets/easter1.gif",
					width : 640,
					height : 159,
					xPos : 160,
					yPos : 120,
					index: 0
				}
				break;
			case 2:
				var easterImage = {
					src : "./assets/menuAssets/easter2.gif",
					width : 600,
					height : 191,
					xPos : 180,
					yPos : 120,
					index: 0
				}
				break;
			case 3:
				var easterImage = {
					src : "./assets/menuAssets/easter3.png",
					width : 600,
					height : 524,
					xPos : 180,
					yPos : 8,
					index: 0
				}
				break;
			case 4:
				var easterImage = {
					src : "./assets/menuAssets/easter4.gif",
					width : 600,
					height : 190,
					xPos : 180,
					yPos : 120,
					index: 0
				}
				break;
			case 5:
				var easterImage = {
					src : "./assets/menuAssets/easter5.jpg",
					width : 600,
					height : 192,
					xPos : 180,
					yPos : 120,
					index: 0
				}
				break;
		}

		this.entities.push(background, staticImage, timeAtkImage, endlessImage, audioImage, leaderImage, guideImage, settingImage, easterImage);
		this.clickable.push(exitEaster);
		this.fill();

		return this.loaded;
	};
	this.preGameScreen = function() {//Loads pre-game screen objects
		this.clear();

		var background = {
			src : "./assets/preGameAssets/pregame.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var countSprite = {
			src : "./assets/preGameAssets/countdown.png",
			width : 170,
			height : 231,
			xPos : 395,
			yPos : 210,
			index : 0,
			fps : 1,
			frames : 3
		}

		this.entities.push(background, countSprite);
		this.fill();

		return this.loaded;
	},
	this.gameScreen = function() {//Load game screen objects
		this.clear();

		var background = {
			src : "./assets/gameAssets/background.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var gameBorderImage = {
			src : "./assets/gameAssets/gameBorderImage.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var cardsImage = {
			src : "./assets/gameAssets/cardsImage.png",
			width : 920,
			height : 224,
			xPos : 20,
			yPos : 208,
			index: 0,
			frames : 3,
			ticks : 0,
			ticksPer : 130
		}

		var quitImage = {
			src : "./assets/gameAssets/quitImage.png",
			width : 220,
			height : 208,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var quitBox = {
			xMin : 20,
			yMin : 20,
			xMax : 220,
			yMax : 110,
			LOADER : true,
			/*Loads menu screen*/
			clicked : function() {
				gameArea.state = 0;
				gameArea.refTime = 0;
				gameArea.score = 0;
				return load.menuScreen();
			}
		}

		var skipImage = {
			src : "./assets/gameAssets/skipImage.png",
			width : 220,
			height : 208,
			xPos : 740,
			yPos : 0,
			index: 0
		}

		var plusOperator = {
			src : "./assets/gameAssets/plusOperator.png",
			width : 80,
			height : 80,
			xPos : 260,
			yPos : 449,
			xInit : 260,
			yInit : 449,
			index : 0,
			xMin : 260,
			yMin : 449,
			xMax : 340,
			yMax : 529,
			caseOp : 1,
			isDraggable : true,
			isClicked : false,
			parameter : "+",
			z : 1,
			drop : function() {
				window["plusOp" + this.caseOp] = {
					src : "./assets/gameAssets/plusOperator.png",
					width : 80,
					height : 80,
					index : 0,
					position : 0
				}
				gameArea.entities.push(window["plusOp" + this.caseOp]);
				this.caseOp += 1;
			}
		}
		
		var minusOperator = {
			src : "./assets/gameAssets/minusOperator.png",
			width : 80,
			height : 80,
			xPos : 380,
			yPos : 449,
			xInit : 380,
			yInit : 449,
			index : 0,
			xMin : 380,
			yMin : 449,
			xMax : 460,
			yMax : 529,
			caseOp : 1,
			isDraggable : true,
			isClicked : false,
			parameter : "-",
			z : 1,
			drop : function() {
				window["minusOp" + this.caseOp] = {
					src : "./assets/gameAssets/minusOperator.png",
					width : 80,
					height : 80,
					index : 0,
					position : 0
				}
				gameArea.entities.push(window["minusOp" + this.caseOp]);
				this.caseOp += 1;
			}
		}

		var multiOperator = {
			src : "./assets/gameAssets/multiOperator.png",
			width : 80,
			height : 80,
			xPos : 500,
			yPos : 449,
			xInit : 500,
			yInit : 449,
			index : 0,
			xMin : 500,
			yMin : 449,
			xMax : 580,
			yMax : 529,
			caseOp : 1,
			isDraggable : true,
			isClicked : false,
			parameter : "*",
			z : 1,
			drop : function() {
				window["multiOp" + this.caseOp] = {
					src : "./assets/gameAssets/multiOperator.png",
					width : 80,
					height : 80,
					index : 0,
					position : 0
				}
				gameArea.entities.push(window["multiOp" + this.caseOp]);
				this.caseOp += 1;
			}
		}

		var divOperator = {
			src : "./assets/gameAssets/divOperator.png",
			width : 80,
			height : 80,
			xPos : 620,
			yPos : 449,
			xInit : 620,
			yInit : 449,
			index : 0,
			xMin : 620,
			yMin : 449,
			xMax : 700,
			yMax : 529,
			caseOp : 1,
			isDraggable : true,
			isClicked : false,
			parameter : "/",
			z : 1,
			drop : function() {
				window["divOp" + this.caseOp] = {
					src : "./assets/gameAssets/divOperator.png",
					width : 80,
					height : 80,
					index : 0,
					position : 0
				}
				gameArea.entities.push(window["divOp" + this.caseOp]);
				this.caseOp += 1;
			}
		}

		var firstDrop = {
			xMin : 200,
			yMin : 278,
			xMax : 280,
			yMax : 358,
			isFilled : false,
			parameter : "",
			position : 1
		}

		var secondDrop = {
			xMin : 440,
			yMin : 278,
			xMax : 520,
			yMax : 358,
			isFilled : false,
			parameter : "",
			position : 2
		}

		var thirdDrop = {
			xMin : 680,
			yMin : 278,
			xMax : 760,
			yMax : 358,
			isFilled : false,
			parameter : "",
			position : 3
		}

		var timerString = {
			font : "px Digital7",
			sizeInit : 140,
			xPos : 368,
			yPos : 175,
			parameter : gameArea.refTime,
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var card1 = {
			font : "px Calibri",
			sizeInit : 200,
			xPos : 67,
			xInit : 67,
			yPos : 378,
			parameter : 0,
			maxWidth : 141,
			colour : "#FFFFFF"
		}

		var card2 = {
			font : "px Calibri",
			sizeInit : 200,
			xPos : 307,
			xInit : 307,
			yPos : 378,
			parameter : 0,
			maxWidth : 141,
			colour : "#FFFFFF"
		}

		var card3 = {
			font : "px Calibri",
			sizeInit : 200,
			xPos : 548,
			xInit : 548,
			yPos : 378,
			parameter : 0,
			maxWidth : 141,
			colour : "#FFFFFF"
		}

		var card4 = {
			font : "px Calibri",
			sizeInit : 200,
			xPos : 788,
			xInit : 788,
			yPos : 378,
			parameter : 0,
			maxWidth : 141,
			colour : "#FFFFFF"
		}

		this.entities.push(background, gameBorderImage, scoreImage, cardsImage, quitImage, skipImage, plusOperator, minusOperator, multiOperator, divOperator);
		this.clickable.push(quitBox);
		this.droppable.push(firstDrop, secondDrop, thirdDrop);
		this.strings.push(timerString, card1, card2, card3, card4);

		switch (gameArea.state) {
			case 1:
				var score = {
					src : "./assets/gameAssets/progress.png",
					width : 198,
					height : 32,
					xPos : 491,
					yPos : 30,
					index: 0,
					frames: 11
				}

				var scoreImage = {
					src : "./assets/gameAssets/scoreboard.png",
					width : 439,
					height : 178,
					xPos : 260,
					yPos : 20,
					index: 0
				}

				var skipBox = {
					xMin : 740,
					yMin : 20,
					xMax : 940,
					yMax : 110,
					/*Loads new problem and resets operators*/
					clicked : function() {
						getProblem(timeAttackDifficulty(gameArea.score + 1, gameArea.difficulty), gameArea.difficulty);
						for (var i = 0; i < gameArea.droppable.length; i++) {
							if (gameArea.droppable[i].isFilled) {
								gameArea.entities.pop();
							}
							gameArea.droppable[i].parameter = "";
							gameArea.droppable[i].isFilled = false;
						}

						gameArea.entities[6].caseOp = 1;
						gameArea.entities[7].caseOp = 1;
						gameArea.entities[8].caseOp = 1;
						gameArea.entities[9].caseOp = 1;
					}
				}

				this.entities[2] = scoreImage;
				this.entities.push(score);
				this.clickable.push(skipBox);
				break;

			case 2:

				var scoreImage = {
					src : "./assets/gameAssets/scoreImage.png",
					width : 520,
					height : 208,
					xPos : 215,
					yPos : 0,
					index: 0
				}

				var skipBox = {
					xMin : 740,
					yMin : 20,
					xMax : 940,
					yMax : 110,
					/*Loads new problem and resets operators*/
					clicked : function() {
						getProblem(timeAttackDifficulty(gameArea.score + 1, gameArea.difficulty), gameArea.difficulty);
						for (var i = 0; i < gameArea.droppable.length; i++) {
							if (gameArea.droppable[i].isFilled) {
								gameArea.entities.pop();
							}
							gameArea.droppable[i].parameter = "";
							gameArea.droppable[i].isFilled = false;
						}

						gameArea.entities[6].caseOp = 1;
						gameArea.entities[7].caseOp = 1;
						gameArea.entities[8].caseOp = 1;
						gameArea.entities[9].caseOp = 1;
					}
				}

				this.entities[2] = scoreImage;
				this.clickable.push(skipBox);
				break;

			default:
		}
		this.fill();

		return this.loaded;

	};
	this.settingScreen = function() {//Load settings screen objects
		this.clear();

		var background = {
			src : "./assets/menuAssets/background.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var border = {
			src : "./assets/settingsAssets/border.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var quitImage = {
			src : "./assets/gameAssets/quitImage.png",
			width : 220,
			height : 208,
			xPos : 0,
			yPos : 0,
			index: 0

		}

		var quitBox = {
			xMin : 20,
			yMin : 20,
			xMax : 220,
			yMax : 110,
			LOADER : true,
			/*Loads menu screen*/
			clicked : function() {
				return load.menuScreen();
			}
		}

		var settingsTitle = {
			src : "./assets/settingsAssets/settingsLabel.png",
			width : 392,
			height : 110,
			xPos : 284,
			yPos : 48,
			index : 0
		}

		var difficultyWindow = {
			src : "./assets/settingsAssets/difficultyWindow.png",
			width : 365,
			height : 180,
			xPos : 84,
			yPos : 225,
			index : 0
		}

		var difficultyOptions = {
			src : "./assets/settingsAssets/difficultyOptions.png",
			width : 280,
			height : 68,
			xPos : 130,
			yPos : 325,
			index: (function() {
				if (gameArea.difficulty == 1) {
					return 1
				} else {
					return 0;
				}
			})(),
			frames: 2
		}

		var easyBox = {
			xMin : 116,
			yMin : 326,
			xMax : 246,
			yMax : 390,
			/*Enables easy mode*/
			clicked : function() {
				if (gameArea.difficulty == 1) {
					gameArea.entities[5].index = 0;
					gameArea.difficulty = 0;
				}
			}
		}

		var hardBox = {
			xMin : 284,
			yMin : 326,
			xMax : 410,
			yMax : 390,
			/*Enable hard mode*/
			clicked : function() {
				if (gameArea.difficulty == 0) {
					gameArea.entities[5].index = 1;
					gameArea.difficulty = 1;
				}
			}
		}


		var audioWindow = {
			src : "./assets/settingsAssets/audioWindow.png",
			width : 365,
			height : 180,
			xPos : 515,
			yPos : 225,
			index : 0
		}

		var audioOptions = {
			src : "./assets/settingsAssets/audioOptions.png",
			width : 280,
			height : 68,
			xPos : 563,
			yPos : 325,
			index: (function() {
				if (gameArea.sound) {
					return 0;
				} else {
					return 1;
				}
			})(),
			frames: 2
		}

		var onBox = {
			xMin : 576,
			yMin : 326,
			xMax : 676,
			yMax : 390,
			isClicked : true,
			/*Enable sound*/
			clicked : function() {
				if (!gameArea.sound) {
					gameArea.sound = true;
					gameArea.entities[7].index = 0;
					//code needs to be here one day
				}
			}
		}

		var offBox = {
			xMin : 713,
			yMin : 326,
			xMax : 813,
			yMax : 390,
			isClicked : false,
			/*Disable sound*/
			clicked : function() {
				if (gameArea.sound) {
					gameArea.sound = false;
					gameArea.entities[7].index = 1;
				}
			}
		}


		this.entities.push(background, border, quitImage, settingsTitle, difficultyWindow, difficultyOptions, audioWindow, audioOptions);
		this.clickable.push(quitBox, easyBox, hardBox, onBox, offBox);
		this.fill();

		return this.loaded;

	};
	this.leaderScreen = function() {//Loads leader screen objects
		this.clear();
		var score = getScores(5);

		var background = {
			src : "./assets/leaderboardAssets/leaderboard.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var quitImage = {
			src : "./assets/gameAssets/quitImage.png",
			width : 220,
			height : 208,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var quitBox = {
			xMin : 20,
			yMin : 20,
			xMax : 220,
			yMax : 110,
			LOADER : true,
			/*Loads menu screen*/
			clicked : function() {
				return load.menuScreen();
			}
		}

		var easyTime1 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 105,
			yPos : 241,
			parameter : score[0][0] + " " + score[1][0],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var easyTime2 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 105,
			yPos : 292,
			parameter : score[0][1] + " " + score[1][1],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var easyTime3 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 105,
			yPos : 344,
			parameter : score[0][2] + " " + score[1][2],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var easyTime4 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 105,
			yPos : 396,
			parameter : score[0][3] + " " + score[1][3],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var easyTime5 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 105,
			yPos : 448,
			parameter : score[0][4] + " " + score[1][4],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardTime1 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 285,
			yPos : 241,
			parameter : score[2][0] + " " + score[3][0],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardTime2 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 285,
			yPos : 292,
			parameter : score[2][1] + " " + score[3][1],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardTime3 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 285,
			yPos : 344,
			parameter : score[2][2] + " " + score[3][2],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardTime4 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 285,
			yPos : 396,
			parameter : score[2][3] + " " + score[3][3],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardTime5 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 285,
			yPos : 448,
			parameter : score[2][4] + " " + score[3][4],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var easyMara1 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 555,
			yPos : 241,
			parameter : score[4][0] + " " + score[5][0],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var easyMara2 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 555,
			yPos : 292,
			parameter : score[4][1] + " " + score[5][1],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var easyMara3 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 555,
			yPos : 344,
			parameter : score[4][2] + " " + score[5][2],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var easyMara4 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 555,
			yPos : 396,
			parameter : score[4][3] + " " + score[5][3],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var easyMara5 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 555,
			yPos : 448,
			parameter : score[4][4] + " " + score[5][4],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardMara1 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 735,
			yPos : 241,
			parameter : score[6][0] + " " + score[7][0],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardMara2 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 735,
			yPos : 292,
			parameter : score[6][1] + " " + score[7][1],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardMara3 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 735,
			yPos : 344,
			parameter : score[6][2] + " " + score[7][2],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardMara4 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 735,
			yPos : 396,
			parameter : score[6][3] + " " + score[7][3],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		var hardMara5 = {
			font : "px Calibri",
			sizeInit : 22,
			xPos : 735,
			yPos : 448,
			parameter : score[6][4] + " " + score[7][4],
			maxWidth : 304,
			colour : "#5C5C5C"
		}

		this.entities.push(background, quitImage);
		this.clickable.push(quitBox);
		this.strings.push(easyTime1, easyTime2, easyTime3, easyTime4, easyTime5, hardTime1, hardTime2, hardTime3, hardTime4, hardTime5, easyMara1, easyMara2, easyMara3, easyMara4, easyMara5, hardMara1, hardMara2, hardMara3, hardMara4, hardMara5);
		this.fill();

		return this.loaded;

	};
	this.guideScreen = function() {//Loads guide screen objects
		this.clear();

		var background = {
			src : "./assets/guideAssets/guide.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var quitImage = {
			src : "./assets/gameAssets/quitImage.png",
			width : 220,
			height : 208,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var quitBox = {
			xMin : 20,
			yMin : 20,
			xMax : 220,
			yMax : 110,
			LOADER : true,
			/*Loads menu screen*/
			clicked : function() {
				return load.menuScreen();
			}
		}

		this.entities.push(background, quitImage);
		this.clickable.push(quitBox);
		this.fill();

		return this.loaded;
	};
	this.scoreScreen = function() {//Loads score screen objects
		this.clear();

		var background = {
			src : "./assets/scoreAssets/timeAttackScore.png",
			width : 960,
			height : 540,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var replayImage = {
			src : "./assets/scoreAssets/replay.png",
			width : 200,
			height : 90,
			xPos : 740,
			yPos : 20,
			index: 0
		}

		var submitImage = {
			src : "./assets/scoreAssets/submit.png",
			width : 300,
			height : 67,
			xPos : 330,
			yPos : 413,
			index: 0
		}

		var quitImage = {
			src : "./assets/gameAssets/quitImage.png",
			width : 220,
			height : 208,
			xPos : 0,
			yPos : 0,
			index: 0
		}

		var quitBox = {
			xMin : 20,
			yMin : 20,
			xMax : 220,
			yMax : 110,
			LOADER : true,
			/*Loads menu screen*/
			clicked : function() {
				gameArea.refTime = 0;
				gameArea.score = 0;
				gameArea.state = 0;
				return load.menuScreen();
			}
		}

		var finalTime = {
			font : "px Calibri",
			sizeInit : 50,
			xPos : 527,
			yPos : 203,
			parameter : "",
			maxWidth : 141,
			colour : "#5C5C5C"
		}

		var completed = {
			font : "px Calibri",
			sizeInit : 50,
			xPos : 527,
			yPos : 261,
			parameter : "",
			maxWidth : 141,
			colour : "#5C5C5C"
		}

		this.entities.push(background, replayImage, submitImage, quitImage);
		this.clickable.push(quitBox);
		this.strings.push(finalTime, completed);

		switch (gameArea.state) {
			case 3:
				var replayBox = {
					xMin : 740,
					yMin : 20,
					xMax : 940,
					yMax : 110,
					LOADER : true,
					/*Reloads pre-game screen and game mode*/
					clicked : function() {
						gameArea.refTime = 0;
						gameArea.state = 1;
						gameArea.score = 0;
						return load.preGameScreen();
					}
				}

				this.clickable.push(replayBox);
				break;

			case 4:
				var replayBox = {
					xMin : 740,
					yMin : 20,
					xMax : 940,
					yMax : 110,
					LOADER : true,
					/*Reloads pre-game screen and game mode*/
					clicked : function() {
						gameArea.refTime = 3;
						gameArea.state = 2;
						gameArea.score = 0;
						return load.preGameScreen();
					}
				}

				this.clickable.push(replayBox);
				break;
		}

		this.fill();

		return this.loaded;
	};
}