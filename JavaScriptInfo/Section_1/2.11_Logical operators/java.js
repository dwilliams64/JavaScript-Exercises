// What is the code below going to output?

alert(null || 2 || undefined); // 2

// Answer is 2 the first truthy value



// What is the code below going to output?

alert(alert(1) || 2 || alert(3)); // alert(1) then 2

/*

The answer: first 1, then 2.

 alert( alert(1) || 2 || alert(3) );
The call to alert does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates it’s left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3). 

*/

// What is the code below going to output?

alert(1 && null && 2); // null

// Answer is null because it is the first falsy statement


// What is the code below going to output?

alert(alert(1) && alert(2)); // 1 and then undefinded

/*

The answer: 1, and then undefined.

 alert( alert(1) && alert(2) );
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.

*/


// What is the code below going to output?

alert( null || 2 && 3 || 4 ); // 3

/*

The answer: 3.

 alert( null || 2 && 3 || 4 );
The precedence of AND && is higher than ||, so it executes first.

The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4
Now the result is the first truthy value: 3.

*/


// Write an “if” condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

if(age >= 14 || age <= 90)


// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

if()

if(age < 14 || age > 90)
