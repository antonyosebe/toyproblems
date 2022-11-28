var speed = window.prompt("Enter your speed in Km/s");// user input speed
var speedLimit = parseInt(speed, 10);
function speedDetector(speedLimit) { // function that checks the speed limit
    if (speedLimit < 70) {
        return "OK";
    } else if (speedLimit >= 70) {// elseif statement that checks if the speed is greater than 70
        var points = Math.floor((speedLimit - 70) / 5);// user input speed minus 70 and divided by 5, math.floor rounds the number down
        if (points >= 12) { // if statement that checks if the points are greater than 12
            return "License Suspended";
        } else {
            return points;
        }
    }
}
document.write(speedDetector(speedLimit));//displays the speed limit in the html browser and displays the points or license suspended