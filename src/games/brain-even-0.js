import { greeting, questionCheck } from '../index.js';

function brainEven() {
    const name = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let winCount = 0;
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = Math.round(Math.random() * 1000);
        const isEven = (randomNumber % 2 === 0);
        let correctAnswer;
        if (isEven === true) {
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

export default brainEven;
