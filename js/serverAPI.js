//******************************************************************/
/*                         SERVER API                             */
//****************************************************************/

/*
getProblem(int difficulty, int hard).
Server script for pulling problems sets
@param difficulty integer from 1 to 5.
@param hard 1 for 1-13, 0 for 1-9
@return array containing the card numbers
*/
function getProblem(difficulty, hard) {
    var cards = [];
    $.ajax({
        async: true,
        type: "GET",
        url: "getProblem.php",
        dataType: "json",
        data: {difficulty: difficulty, hard: hard},
        success: function(data) {
        	callback(data);
        }
    });
}

/*On AJAX success, calls this function
to feed the data into the card data*/
function callback(data) {
	gameArea.strings[1].parameter = data.card1;
	gameArea.strings[2].parameter = data.card2;
	gameArea.strings[3].parameter = data.card3;
	gameArea.strings[4].parameter = data.card4;
}

/*Validates the problem set and operators in BEDMAS order*/
function validate(c1, c2, c3, c4, op1, op2, op3) {
    var string = c1 + op1 + c2 + op2 + c3 + op3 + c4;
    if (eval(string) == 24) {
        return true;
    }
    return false;
}

/*
timeAttackDifficulty(int problemNum, boolean hard)
@param problemNum problem number
@param hard true is hard, false is easy
@return difficulty for problem number
*/
function timeAttackDifficulty(problemNum, hard) {
    var difficulty = 1;
    var twoPoint = 2;
    var threePoint = 5;
    var fourPoint = 9;
    var fivePoint = 11;
    if (hard) {
        twoPoint = 1;
        threePoint = 3;
        fourPoint = 5;
        fivePoint = 8;
    }
    if (problemNum >= fivePoint) {
        difficulty = 5;
    } else if (problemNum >= fourPoint) {
        difficulty = 4;
    } else if (problemNum >= threePoint) {
        difficulty = 3;
    } else if (problemNum >= twoPoint) {
        difficulty = 2;
    }
    return difficulty;
}

/*
genDifficulty(double average, double spread)
helper function
@param average average difficulty
@param spread +- this amount
@return random difficulty
*/
function genDifficulty(average, spread) {
    var min = average - spread;
    var max = average + spread;
    var rng = Math.random();
    var addThing = rng * spread;
    var difficulty = min + addThing;
    difficulty = Math.round(difficulty);
    difficulty = Math.min(difficulty, 5);
    difficulty = Math.max(difficulty, 1);
    return difficulty;
}

/*
difficultyCurve(int problemNum, boolean hard)
@param problemNum problem number
@param hard true is hard, false is easy
@return random difficulty
*/
function difficultyCurve(problemNum, hard) {
    var exponent = 0.45;
    var upperBound = 4.5;
    if (hard) {
        exponent = 0.5;
        upperBound = 4.75
    }
    var average = Math.pow(problemNum, exponent);
    average = Math.min(average, upperBound);
    var difficulty = genDifficulty(average, 0.5);
    return difficulty;
}

/*
getScores(int limit).
retrieves top x scores for time attack
@limit the number of scores to retrieve
@return array with names and scores.
TIME ATTACK IS SORTED BY TIME IN ASCENDING ORDER
MARATHON IS SORTED BY SCORE IN DESCENDING ORDER
INDEX NUMBER
0: Time Attack Easy Names
1: Time Attack Easy Scores
2: Time Attack Hard Names
3: Time Attack Hard Scores
4: Marathon Easy Names
5: Marathon Easy Scores
6: Marathon Hard Names
7: Marathon Hard Scores
*/
function getScores(limit) {
    var namesTimeEasy;
    var namesTimeHard;
    var scoresTimeEasy;
    var scoresTimeHard;
    var namesMarathonEasy;
    var namesMarathonHard;
    var scoresMarathonEasy;
    var scoresMarathonHard;
    $.ajax({
        async: false,
        type: "GET",
        url: "getScores.php",
        dataType: "json",
        data: {limit: limit},
        success: function(data) {
            namesTimeEasy = data.namesTimeEasy;
            scoresTimeEasy = data.scoresTimeEasy;
            namesTimeHard = data.namesTimeHard;
            scoresTimeHard = data.scoresTimeHard;
            namesMarathonEasy = data.namesMarathonEasy;
            scoresMarathonEasy = data.scoresMarathonEasy;
            namesMarathonHard = data.namesMarathonHard;
            scoresMarathonHard = data.scoresMarathonHard;
        }
    });
    return [namesTimeEasy, scoresTimeEasy, namesTimeHard, scoresTimeHard,
        namesMarathonEasy, scoresMarathonEasy, namesMarathonHard, scoresMarathonHard];
}

/*
calcScore(int difficulty, double timeTaken, int comboMultiplier)
calculates the score for any given problem in marathon mode
@param difficulty difficulty of the problem from 1-5
@param timeTaken time it takes to solve the problem in seconds
@param comboMultiplier score multiplier
@return score
*/
function calcScore(difficulty, timeTaken, comboMultiplier) {
    var score = 100;
    var estimatedTime = 15 * difficulty;
    var timeScore = Math.max(estimatedTime - timeTaken, 0);
    var timeMultiplier = 5;
    timeScore *= timeMultiplier;
    score += timeScore;
    var difficultyMultiplier = 1 + (difficulty - 1) * 0.1;
    score *= difficultyMultiplier;
    score *= comboMultiplier;
    return score;
}