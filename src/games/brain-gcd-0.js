import { greeting, questionCheck } from '../index.js';

function findGCD(x, y) {
    let gcd = 1;
    for (let i = 2; i < (Math.min(x, y)) + 1; i += 1) {
        if (x % i === 0 && y % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

function brainGCD() {
    const name = greeting();
    console.log('Find the greatest common divisor of given numbers.');
    let winCount = 0;
    for (let i = 0; i < 3; i += 1) {
        const randomNumber1 = Math.round(Math.random() * 100);
        const randomNumber2 = Math.round(Math.random() * 100);
        const correctAnswer = findGCD(randomNumber1, randomNumber2);
        const numbers = `${randomNumber1} ${randomNumber2}`;
        const win = questionCheck(numbers, correctAnswer);
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

export default brainGCD;
