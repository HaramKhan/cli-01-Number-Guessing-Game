#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const computerGuess = Math.floor(Math.random() * 10 + 1);
const message = (chalk.yellow.bgWhite(`\n\t*WELCOME TO NUMBER GUESSING GAME*\n`)); 
console.log(message);
 const guessing = await inquirer.prompt({
     name: "userGuessNumber",
     type: "number",
     message: (chalk.green.bgRed("Please guess a number between 1-10 : ")),
 });
 if (guessing.userGuessNumber == "Number"){
     console.log(chalk.blue.bgGreenBright("you win"));
 } else {
     console.log(chalk.yellow.bgBlack("Please try again"));
  }
