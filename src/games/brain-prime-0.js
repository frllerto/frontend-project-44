import { greeting, questionCheck } from '../index.js';

function isPrime(n) {
    for (let i = 2; i < n + 1; i += 1) {
        if (n % i === 0 && n !== i) {
            return false;
        }
    }
    return true;
}

function brainPrime() {
    const name = greeting();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let winCount = 0;
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = Math.ceil(Math.random() * 99) + 1;
        let correctAnswer;
        if (isPrime(randomNumber) === true) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }
        const win = questionCheck(randomNumber, correctAnswer);
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

export default brainPrime;
