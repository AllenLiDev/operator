/*
calcTime(int problemNumber)
calculates the amount of time to add to the timer in marathon mode
@param problemNumber problem number
@return time in seconds
*/
function calcTime(problemNumber) {
    var initialTime = 20;
    var minimumTime = 10;
    var time = initialTime - (problemNumber - 1) / 2;
    time = Math.floor(time);
    time = Math.max(time, minimumTime);
    return time;
}