const prompt = require("prompt-sync")();

const target = Math.round(Math.random()*100); // it will give random number between 0 and 100

let guesses = 0;
console.log(target);

while(true){
    guesses++;
    const guess = Number(prompt("Guess the number (0-100): "));
    if(guess > target){
        console.log("Your guess is too high");
        continue;
    } else if(guess < target){
        console.log("Your guess is too low");
        continue;
    } else {
        console.log("You guessed it!");
        break;
    } 
}

console.log("You guessed the number in", guesses, "tries!");

