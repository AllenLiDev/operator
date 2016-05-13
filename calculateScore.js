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