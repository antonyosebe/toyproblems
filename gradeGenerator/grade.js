// gettiing in put from the user
var marks = window.prompt("Enter students marks");
var results = parseInt(marks, 10);
function gradeGenerator(results) {
    if (results >= 0 && results <= 100) { // checking if the input is valid meets the condition or not
        // nested if else that evaluates the grade of the student
        if (results >= 80 && results <= 100) {
            return "A";
        } else if (results >= 60 && results <= 79) {
            return "B";
        } else if (results >= 60 && results <= 79) {
            return "C";
        } else if (results >= 49 && results <= 59) {
            return "D";
        } else {
            return "E";
        }
    }
}
document.write(`your grade is: ${gradeGenerator(results)}`);// displays students grade in the html browser
