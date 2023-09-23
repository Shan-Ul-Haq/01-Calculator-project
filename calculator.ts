#! /usr/bin/env node

import {add} from "./add.js"
import {subtraction} from "./subtraction.js"
import {multiply} from "./multiply.js"
import {divide} from "./divide.js"
import {modulus} from "./modulus.js"



import inquirer from "inquirer";

let answer = await inquirer.prompt([{
    message: "Enter your first number",
    type: "number",
    name: "num1"
},

{message: "Enter your second number",
    type: "number",
    name: "num2"
},

{message: "Select Operator",
    type: "list",
    choices: ["+", "-", "*", "/", "%"],
    name: "operator"

}]
)

if (answer.operator === "+"){
let result = add(answer.num1, answer.num2)
console.log(`add ${answer.num1} + ${answer.num2} = ${result}`);
    }

   else if (answer.operator === "-"){
    let result = subtraction(answer.num1, answer.num2)
    console.log(`subtraction ${answer.num1} - ${answer.num2} = ${result}`);
    }

else if (answer.operator === "*"){
    let result = multiply(answer.num1, answer.num2)
    console.log(`multiply ${answer.num1} * ${answer.num2} = ${result}`);
    }

else if (answer.operator === "/"){
    let result = divide(answer.num1, answer.num2)
    console.log(`divide ${answer.num1} / ${answer.num2} = ${result}`);
    }
    
else if (answer.operator === "%"){
    let result = modulus(answer.num1, answer.num2)
    console.log(`modulus ${answer.num1} % ${answer.num2} = ${result}`);
    }
    