
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

//ES5 Solution
var num1 = prompt('Enter a number');
var num2 = prompt('Enter another number');
var SUM = Number(num1) + Number(num2);

alert(SUM);

//ES6 Solution
let num1 = prompt('Enter a number');
let num2 = prompt('Enter another number');
const SUM = Number(num1) + Number(num2);

alert(SUM);

//Solution with function ES5
function calculate(){
    var num1 = prompt('Enter a number');
    var num2 = prompt('Enter another number');
    
    function inputCheck(){
        if(isNaN(num1) || isNaN(num2)){
            alert('Please use only numbers');
        }
        else{
            add(num1, num2);
        }
    }

    function add(num1, num2){
        var SUM = Number(num1) + Number(num2);
        alert(SUM);
    }

    inputCheck();
}

calculate();

//Solution with function ES6
const calculate = () => {
    let num1 = prompt('Enter a number');
    let num2 = prompt('Enter another number');

    const inputCheck = (num1, num2) => {
        if(isNaN(num1) || isNaN(num2)){
            alert('Please enter a number');
        }
        else{
            add(num1, num2);            
        }
    }

    const add = (num1, num2) => {
        const SUM = Number(num1) + Number(num2);
        alert(SUM);
    }

    inputCheck(num1, num2);
}

calculate();

// BONUS: Make a program that can subtract, multiply, and also divide!



