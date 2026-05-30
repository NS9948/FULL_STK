let number = Math.floor(Math.random() * 100) + 1;
let guess = Number(prompt("Guess any no bw 1 to 100: "));

while (guess != number) {
    (guess > number)
        ? console.log("Guess is too high")
        : console.log("Guess is too low");

    guess = Number(prompt("Guess any no bw 1 to 100: "));
}

console.log("🎉 You won!");