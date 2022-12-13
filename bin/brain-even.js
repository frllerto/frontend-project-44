import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let winCount = 0;
for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 1000);
    const isEven = (randomNumber % 2 === 0);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && isEven === true) || (answer === 'no' && isEven === false)) {
        console.log('Correct!');
        winCount += 1;
    } else {
        if (answer === 'yes') {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'`);
        } else if (answer === 'no') {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'`);
        }
        console.log(`Let's try again, ${name}!`);
        break;
    }
}
if (winCount === 3) {
    console.log(`Congratulations, ${name}!`);
}
