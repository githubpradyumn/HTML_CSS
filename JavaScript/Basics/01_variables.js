/*
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const

*/


const accountId = 123654 //can not change
let accountEmail = "singhpradyumn@gmail.com"
var accountPassword = "123654789"
accountCity = "Jaipur"
let accountState;
// accountId = 2  // not allowed
console.log(accountId);

accountEmail = "kjhgfds@gmail.com"
accountPassword = "789654123"
accountCity = "Delhi"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope

When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

*/

let x = 9;
x=5
console.log(x);


// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
