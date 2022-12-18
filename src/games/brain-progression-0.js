import { greeting, questionCheck } from '../index.js';

function generateProgression(n) {
    const start = Math.round(Math.random() * 24);
    const leap = Math.ceil(Math.random() * 13);
    const progression = [start];
    let current = start;
    for (let i = 0; i < n - 1; i += 1) {
        current += leap;
        progression.push(current);
    }
    return progression;
}

function brainProgression() {
    const name = greeting();
    console.log('What number is missing in the progression?');
    let winCount = 0;
    for (let i = 0; i < 3; i += 1) {
        const missing = Math.floor(Math.random() * 10);
        const progression = generateProgression(10);
        const correctAnswer = progression[missing];
        progression[missing] = '..';
        const question = progression.join(' ');
        const win = questionCheck(question, correctAnswer);
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

export default brainProgression;
