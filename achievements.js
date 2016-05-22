/* note: everything relies on cookies.js */

/* getters retrieve values from cookies */

function getFastestTimeEasy() {
    var fastestTime = getCookie("fastestTimeEasy");
    if (fastestTime === "") {
        fastestTime = null;
    }
    return fastestTime;
}

function getFastestTimeHard() {
    var fastestTime = getCookie("fastestTimeHard");
    if (fastestTime === "") {
        fastestTime = null;
    }
    return fastestTime;
}

function getHighScoreEasy() {
    var highScore = getCookie("highScoreEasy");
    if (highScore === "") {
        highScore = null;
    }
    return highScore;
}

function getHighScoreHard() {
    var highScore = getCookie("highScoreHard");
    if (highScore === "") {
        highScore = null;
    }
    return highScore;
}

function getMarathonProblemsHard() {
    var marathonProblems = getCookie("marathonProblemsHard");
    if (marathonProblems === "") {
        marathonProblems = null;
    }
    return marathonProblems;
}

function getMaxCombo() {
    var maxCombo = getCookie("maxCombo");
    if (maxCombo === "") {
        maxCombo = null;
    }
    return maxCombo;
}

/* checkers check to see if the user has unlocked a certain achievement*/

function checkTime1Easy() {
    var threshhold = 180;
    var fastestTimeEasy = getFastestTimeEasy();
    var fastestTimeHard = getFastestTimeHard();
    if (fastestTimeEasy != null
            && fastestTimeEasy < threshhold) {
        return true;
    }
    if (fastestTimeHard != null
            && fastestTimeHard < threshhold) {
        return true;
    }
    return false;
}

function checkTime2Easy() {
    var threshhold = 120;
    var fastestTimeEasy = getFastestTimeEasy();
    var fastestTimeHard = getFastestTimeHard();
    if (fastestTimeEasy != null
            && fastestTimeEasy < threshhold) {
        return true;
    }
    if (fastestTimeHard != null
            && fastestTimeHard < threshhold) {
        return true;
    }
    return false;
}

function checkTime3Easy() {
    var threshhold = 60;
    var fastestTimeEasy = getFastestTimeEasy();
    var fastestTimeHard = getFastestTimeHard();
    if (fastestTimeEasy != null
            && fastestTimeEasy < threshhold) {
        return true;
    }
    if (fastestTimeHard != null
            && fastestTimeHard < threshhold) {
        return true;
    }
    return false;
}

function checkTime1Hard() {
    var threshhold = 180;
    var fastestTimeHard = getFastestTimeHard();
    if (fastestTimeHard != null
            && fastestTimeHard < threshhold) {
        return true;
    }
    return false;
}

function checkTime2Hard() {
    var threshhold = 120;
    var fastestTimeHard = getFastestTimeHard();
    if (fastestTimeHard != null
            && fastestTimeHard < threshhold) {
        return true;
    }
    return false;
}

function checkTime3Hard() {
    var threshhold = 60;
    var fastestTimeHard = getFastestTimeHard();
    if (fastestTimeHard != null
            && fastestTimeHard < threshhold) {
        return true;
    }
    return false;
}

function checkMileHighClub() {
    var highScoreEasy = getHighScoreEasy();
    var highScoreHard = getHighScoreHard();
    if (highScoreEasy >= 5280
            || highScoreHard >= 5280) {
        return true;
    }
    return false;
}

function checkMillionaire() {
    var highScoreHard = getHighScoreHard();
    if (highScoreHard >= 1000000) {
        return true;
    }
    return false;
}

function checkJackBauer() {
    var marathonProblemsHard = getMarathonProblemsHard();
    if (marathonProblemsHard >= 24) {
        return true;
    }
    return false;
}

function checkSatan() {
    var satan = getCookie("satan");
    if (satan === "true") {
        return true;
    }
    return false;
}

function checkLEET() {
    var leet = getCookie("leet");
    if (leet === "true") {
        return true;
    }
    return false;
}

function checkCombo1() {
    var threshhold = 10;
    var maxCombo = getMaxCombo();
    if (maxCombo >= threshhold) {
        return true;
    }
    return false;
}

function checkCombo2() {
    var threshhold = 25;
    var maxCombo = getMaxCombo();
    if (maxCombo >= threshhold) {
        return true;
    }
    return false;
}

function checkCombo3() {
    var threshhold = 50;
    var maxCombo = getMaxCombo();
    if (maxCombo >= threshhold) {
        return true;
    }
    return false;
}

function checkCombo4() {
    var threshhold = 100;
    var maxCombo = getMaxCombo();
    if (maxCombo >= threshhold) {
        return true;
    }
    return false;
}

/* setters */

function setFastestTimeEasy(seconds) {
    setCookie("fastestTimeEasy", seconds, 30);
}

function setFastestTimeHard(seconds) {
    setCookie("fastestTimeHard", seconds, 30);
}

function setHighScoreEasy(score) {
    setCookie("highScoreEasy", score, 30);
}

function setHighScoreHard(score) {
    setCookie("highScoreHard", score, 30);
}

function setMarathonProblemsHard(problems) {
    setCookie("marathonProblemsHard", problems, 30)
}

function setMaxCombo(combo) {
    setCookie("maxCombo", combo, 30);
}

/* These set achievements to unlocked */
function unlockSatan() {
    setCookie("satan", "true", 30);
}

function unlockLEET() {
    setCookie("leet", "true", 30);
}

/* These functions compares values with those already stored in the cookies */
function validateSetFastestTimeEasy(seconds) {
    var fastestTime = getFastestTimeEasy();
    if (fastestTime == null
            || seconds < fastestTime) {
        setCookie("fastestTimeEasy", seconds, 30);
    }
}

function validateSetFastestTimeHard(seconds) {
    var fastestTime = getFastestTimeHard();
    if (fastestTime == null
            || seconds < fastestTime) {
        setCookie("fastestTimeHard", seconds, 30);
    }
}

function validateSetHighScoreEasy(score) {
    var highScore = getHighScoreEasy();
    if (highScore == null
            || score > highScore) {
        setCookie("highScoreEasy", score, 30);
    }
}

function validateSetHighScoreHard(score) {
    var highScore = getHighScoreHard();
    if (highScore == null
            || score > highScore) {
        setCookie("highScoreHard", score, 30);
    }
}

function validateSetMarathonProblemsHard(problems) {
    var marathonProblems = getMarathonProblemsHard();
    if (marathonProblems == null
            || problems > marathonProblems) {
        setCookie("marathonProblems", problems, 30);
    }
}

function validateSetMaxCombo(combo) {
    var maxCombo = getMaxCombo();
    if (maxCombo == null
            || combo > maxCombo) {
        setCookie("maxCombo", combo, 30);
    }
}