//******************************************************************//
/*                          STATE LOGIC                            */
//****************************************************************//

/*Handles state logic for:
- Time Attack
- Endless Mode
- Easter Egg*/
function update(dt) {

	switch (gameArea.state) {
		case 1: //time attack logic

			gameArea.refTime += dt;

			/*Naive animation update for preloading screen*/
			if (gameArea.refTime > 1 && gameArea.entities.length == 2 && gameArea.entities[1].index < gameArea.entities[1].frames - 1) {
				gameArea.refTime -= 1;
				gameArea.entities[1].index += 1;
			} else if (gameArea.refTime > 1 && gameArea.entities.length == 2 && gameArea.entities[1].index == gameArea.entities[1].frames - 1) {
				gameArea.clear();
				gameArea.refTime = 0;
				gameArea.loaded = load.gameScreen();
				gameArea.parse();
				getProblem(timeAttackDifficulty(gameArea.score + 1, gameArea.difficulty), gameArea.difficulty);
			} else if (gameArea.strings.length > 0) {//loaded game logic
				if (gameArea.refTime < 1) {
					gameArea.strings[0].parameter = Math.floor(gameArea.refTime) + "." + Math.floor(gameArea.refTime * 10);
				} else {
					gameArea.strings[0].parameter = Math.floor(gameArea.refTime) + "." + (Math.floor(gameArea.refTime * 10) % (Math.floor(gameArea.refTime) * 10));
				}

				for (var i = 1; i < gameArea.strings.length; i++) {
					if (gameArea.strings[i].parameter > 9) {
						gameArea.strings[i].xPos = gameArea.strings[i].xInit - (gameArea.strings[i].maxWidth / 6);
					} else {
						gameArea.strings[i].xPos = gameArea.strings[i].xInit;
					}
				}

				if (gameArea.entities[3].ticks != 0) {
					gameArea.entities[3].ticks += 1;
				}

				if (gameArea.entities[10].ticks != 0) {
					gameArea.entities[10].ticks += 1;
				}

				if (gameArea.entities[3].ticks > gameArea.entities[3].ticksPer) {
					if(gameArea.entities[3].index == 1){						
						getProblem(timeAttackDifficulty(gameArea.score + 1, gameArea.difficulty), gameArea.difficulty);
					}
					gameArea.entities[3].index = 0;
					gameArea.entities[3].ticks = 0;
				}
				if (gameArea.entities[10].ticks > gameArea.entities[10].ticksPer) {
					gameArea.entities[10].index = 0;
					gameArea.entities[10].ticks = 0;
				}
				
				if (gameArea.droppable[0].isFilled && gameArea.droppable[1].isFilled && gameArea.droppable[2].isFilled) {

					if (validate(gameArea.strings[1].parameter, gameArea.strings[2].parameter, gameArea.strings[3].parameter, gameArea.strings[4].parameter, gameArea.droppable[0].parameter, gameArea.droppable[1].parameter, gameArea.droppable[2].parameter)) {

						gameArea.entities[3].index = 1;
						gameArea.entities[10].index = 1;

						gameArea.entities[3].ticks = 1;
						gameArea.entities[10].ticks = 1;

						gameArea.score += 1;

						if (gameArea.score == 10) {
							gameArea.clear();
							gameArea.state = 3;
							gameArea.loaded = load.scoreScreen();
							gameArea.parse();
							gameArea.strings[0].parameter = Math.floor(gameArea.refTime) + "." + (Math.floor(gameArea.refTime * 10) % (Math.floor(gameArea.refTime) * 10));
							gameArea.strings[1].parameter = gameArea.score;
						} else {
							gameArea.entities[11].index = gameArea.score;
							for (var i = 0; i < gameArea.droppable.length; i++) {
								gameArea.droppable[i].parameter = "";
								gameArea.droppable[i].isFilled = false;
							}

							gameArea.entities[6].caseOp = 1;
							gameArea.entities[7].caseOp = 1;
							gameArea.entities[8].caseOp = 1;
							gameArea.entities[9].caseOp = 1;
							gameArea.entities.pop();
							gameArea.entities.pop();
							gameArea.entities.pop();
						}
					} else {

						gameArea.entities[3].index = 2;						
						gameArea.entities[10].index = 2;

						gameArea.entities[3].ticks = 1;
						gameArea.entities[10].ticks = 1;

						for (var i = 0; i < gameArea.droppable.length; i++) {
							gameArea.droppable[i].parameter = "";
							gameArea.droppable[i].isFilled = false;
						}

						gameArea.entities[6].caseOp = 1;
						gameArea.entities[7].caseOp = 1;
						gameArea.entities[8].caseOp = 1;
						gameArea.entities[9].caseOp = 1;
						gameArea.entities.pop();
						gameArea.entities.pop();
						gameArea.entities.pop();
						
					}
				}
			}
			break;

		case 2: //Endless logic ONLY DIFFERENCE SO FAR IS DIFFICULTY CURVE

			gameArea.refTime -= dt;

			/*Naive animation update for preloading screen*/
			if (gameArea.strings.length > 0) {
				gameArea.problemTime += dt;
				gameArea.totalTime += dt;
				for (var i = 1; i < gameArea.strings.length - 1; i++) {
					if (gameArea.strings[i].parameter > 9) {
						gameArea.strings[i].xPos = gameArea.strings[i].xInit - (gameArea.strings[i].maxWidth / 6);
					} else {
						gameArea.strings[i].xPos = gameArea.strings[i].xInit;
					}
				}

				if (gameArea.entities[3].ticks != 0) {
					gameArea.entities[3].ticks += 1;
				}

				// if (gameArea.entities[10].ticks != 0) {
				// 	gameArea.entities[10].ticks += 1;
				// }

				if (gameArea.entities[3].ticks > gameArea.entities[3].ticksPer) {
					// if(gameArea.entities[3].index == 1){						
					// 	getProblem(timeAttackDifficulty(gameArea.score + 1, gameArea.difficulty), gameArea.difficulty);
					// }
					gameArea.entities[3].index = 0;
					gameArea.entities[3].ticks = 0;
				}

				// if (gameArea.entities[10].ticks > gameArea.entities[10].ticksPer) {
				// 	gameArea.entities[10].index = 0;
				// 	gameArea.entities[10].ticks = 0;
				// }

				if (gameArea.refTime < 1) {
					gameArea.strings[0].parameter = Math.floor(gameArea.refTime) + "." + (Math.floor(gameArea.refTime * 10));
				} else {
					gameArea.strings[0].parameter = Math.floor(gameArea.refTime) + "." + (Math.floor(gameArea.refTime * 10) % (Math.floor(gameArea.refTime) * 10));
				}
				
				if (gameArea.droppable[0].isFilled && gameArea.droppable[1].isFilled && gameArea.droppable[2].isFilled) {

					if (validate(gameArea.strings[1].parameter, gameArea.strings[2].parameter, gameArea.strings[3].parameter, gameArea.strings[4].parameter, gameArea.droppable[0].parameter, gameArea.droppable[1].parameter, gameArea.droppable[2].parameter)) {

						gameArea.entities[3].index = 1;
						// gameArea.entities[10].index = 1;

						gameArea.entities[3].ticks = 1;
						// gameArea.entities[10].ticks = 1;

						gameArea.score += 1;
						gameArea.scoreTotal += calcScore(difficultyCurve(gameArea.score + 1, gameArea.difficulty), gameArea.problemTime, gameArea.combo);
						gameArea.problemTime = 0;
						gameArea.refTime += calcTime(gameArea.score);
						gameArea.strings[5].parameter = gameArea.scoreTotal;

						// gameArea.entities[10].index = gameArea.score;
						getProblem(difficultyCurve(gameArea.score + 1, gameArea.difficulty), gameArea.difficulty);
						for (var i = 0; i < gameArea.droppable.length; i++) {
							gameArea.droppable[i].parameter = "";
							gameArea.droppable[i].isFilled = false;
						}
						gameArea.combo += 1;

						gameArea.entities[6].caseOp = 1;
						gameArea.entities[7].caseOp = 1;
						gameArea.entities[8].caseOp = 1;
						gameArea.entities[9].caseOp = 1;
						gameArea.entities.pop();
						gameArea.entities.pop();
						gameArea.entities.pop();
					} else {

						gameArea.combo = 1;

						gameArea.entities[3].index = 2;
						// gameArea.entities[10].index = 2;

						gameArea.entities[3].ticks = 1;
						// gameArea.entities[10].ticks = 1;

						for (var i = 0; i < gameArea.droppable.length; i++) {
							gameArea.droppable[i].parameter = "";
							gameArea.droppable[i].isFilled = false;
						}

						gameArea.entities[6].caseOp = 1;
						gameArea.entities[7].caseOp = 1;
						gameArea.entities[8].caseOp = 1;
						gameArea.entities[9].caseOp = 1;
						gameArea.entities.pop();
						gameArea.entities.pop();
						gameArea.entities.pop();
						
					}
				}

				if (gameArea.refTime <= 0.0) {
					gameArea.clear();
					gameArea.state = 4;
					gameArea.problemTime = 0;
					gameArea.loaded = load.scoreScreen();
					gameArea.parse();
					gameArea.strings[0].parameter = gameArea.scoreTotal;
					gameArea.strings[1].parameter = Math.floor(gameArea.totalTime) + "." + (Math.floor(gameArea.totalTime * 10) % (Math.floor(gameArea.totalTime) * 10));
					gameArea.strings[2].parameter = gameArea.score;
				}

			} else if (gameArea.refTime < 0 && gameArea.entities.length == 2 && gameArea.entities[1].index == 2) {//Pre-load screen
				gameArea.clear();
				gameArea.refTime = 24;
				gameArea.loaded = load.gameScreen();
				gameArea.parse();
				getProblem(difficultyCurve(gameArea.score + 1, gameArea.difficulty), gameArea.difficulty);
			} else if (gameArea.refTime < 1 && gameArea.entities.length == 2 && gameArea.entities[1].index == 1) {//Pre-load screen
				gameArea.entities[1].index += 1;
			} else if (gameArea.refTime < 2 && gameArea.entities.length == 2 && gameArea.entities[1].index == 0) {//Pre-load screen
				gameArea.entities[1].index += 1;
			}

			break;
	}

	handleInput(dt);
}