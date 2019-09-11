/*

Problem:

Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/

let user = {};

user.name = "John";

user.sername = "Smith";

user.name = "Pete";

delete user.name;

/*

JavaScript.info:

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

*/


/*

Problem:

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

*/

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let prop in obj) {
        if (obj[prop] == undefined) {
            return false;
        } else {
            return true;
        }
    }
    
}

