import { greeting, questionCheck } from '../index.js';

function brainCalc() {
    const name = greeting();
    console.log('What is the result of the expression?');
    let winCount = 0;
    const operators = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
        const randomNumber1 = Math.round(Math.random() * 100);
        const randomNumber2 = Math.round(Math.random() * 100);
        const operator = operators[Math.floor(Math.random() * 3)];
        const expression = `${randomNumber1} ${operator} ${randomNumber2}`;
        const correctAnswer = eval(expression);
        const win = questionCheck(expression, correctAnswer);
        if (win === true) {
            winCount += 1;
        } else {
            console.log(`Let's try again, ${name}!`);
            break;
        }
    }
    if (winCount === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}

export default brainCalc;
