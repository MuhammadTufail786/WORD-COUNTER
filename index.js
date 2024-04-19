#!usr/bin/env node  // this line is called shabang . it tells the os to run it with node js,,
//import the 'inquirer' modules. which is command line infrence for node .js
import inquirer from "inquirer";
//decleare the constant "answer " the asign it to the result of "inquirer" propmt.function.
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count to word"
    }
]);
const words = answers.sentence.trim().split(" ").length;
//print the arrey of word to the console
console.log(words);
