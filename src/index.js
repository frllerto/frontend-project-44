import readlineSync from 'readline-sync';

function greeting() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
}

function questionCheck(question, correctAnswer) {
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === `${correctAnswer}`) {
        console.log('Correct!');
        return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
}
export { greeting, questionCheck };
