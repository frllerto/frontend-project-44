#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let winCount = 0;
const operators = [];
operators.push('+', '-', '*');
for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);
    const operator = operators[Math.floor(Math.random() * 3)];
    const expression = `${randomNumber1} ${operator} ${randomNumber2}`;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = eval(expression);
    if (Number(answer) === correctAnswer) {
        console.log('Correct!');
        winCount += 1;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        break;
    }
}
if (winCount === 3) {
    console.log(`Congratulations, ${name}!`);
}
