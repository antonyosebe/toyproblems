var speed = window.prompt("Enter your speed in Km/s");
var speedLimit = parseInt(speed, 10);
function speedDetector(speedLimit) {
    if (speedLimit < 70) {
        return "OK";
    } else if (speedLimit >= 70) {
        var points = Math.floor((speedLimit - 70) / 5);
        if (points >= 12) {
            return "License Suspended";
        } else {
            return points;
        }
    }
}
document.write(speedDetector(speedLimit));