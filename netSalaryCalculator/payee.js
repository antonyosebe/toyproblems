let basicSalary = prompt("What's basic salary");//user enters basic salary
let benefits = prompt("Any other benefits");//user inputs benefits
let grossSalary = parseInt(basicSalary) + parseInt(benefits);//calculates of grossSalary and stores it in a variable
let netSalary = grossSalary - (paye()) - nhif() - nssf(); //calculates netSalary and stores it in a variable
// calculates PAYE in respect to grossSalary
function paye() {

    if (grossSalary <= 288000) {
        return (0.1 * grossSalary);
    }
    else if (grossSalary > 288000 && grossSalary <= 388000) {
        return (0.25 * grossSalary);
    }
    else if (grossSalary > 388000) {
        return (0.3 * grossSalary);
    }
}

// function that calculates NSSF deductions in respect to grossSalary
function nhif() {
    if (grossSalary <= 5999) {
        return 150;
    }
    else if (grossSalary > 5999 && grossSalary <= 7999) {
        return 300;
    }
    else if (grossSalary > 7999 && grossSalary <= 11999) {
        return 400;
    }
    else if (grossSalary > 11999 && grossSalary <= 14999) {
        return 500;
    }
    else if (grossSalary > 14999 && grossSalary <= 19999) {
        return 600;
    }
    else if (grossSalary > 19999 && grossSalary <= 24999) {
        return 750;
    }
    else if (grossSalary > 24999 && grossSalary <= 29999) {
        return 850;
    }
    else if (grossSalary > 29999 && grossSalary <= 34999) {
        return 900;
    }
    else if (grossSalary > 34999 && grossSalary <= 39999) {
        return 950
    }
    else if (grossSalary > 39999 && grossSalary <= 44999) {
        return 1000;
    }
    else if (grossSalary > 44999 && grossSalary <= 49999) {
        return 1100;
    }
    else if (grossSalary > 49999 && grossSalary <= 59999) {
        return 1200;
    }
    else if (grossSalary > 59999 && grossSalary <= 69999) {
        return 1300;
    }
    else if (grossSalary > 69999 && grossSalary <= 79999) {
        return 1400;
    }
    else if (grossSalary > 79999 && grossSalary <= 89999) {
        return 1500;
    }
    else if (grossSalary > 89999 && grossSalary <= 99999) {
        return 1600;
    }
    else if (grossSalary > 100000) {
        return 1700;
    }
}


//function that calculates NSSF deductions in respect to grossSalary

function nssf() {

    if (grossSalary <= 3000) {
        return 180;
    }
    else if (grossSalary > 3000 && grossSalary <= 4500) {
        return 270;
    }
    else if (grossSalary > 4500) {
        return 360;
    }

}

// calls function on  click of the button   
function calculator() {
    return `GROSS SALARY:${grossSalary}</br></br> NET SALARY:${netSalary} </br></br>  PAYE:${paye()} </br></br> NHIF:${nhif()} </br></br> NSSF:${nssf()}`;
}


// function that displays the results in the html browser
const calculate = () => document.getElementById('results').innerHTML = calculator(); 