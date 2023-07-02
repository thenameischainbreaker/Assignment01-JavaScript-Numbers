var maybePrime;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Please a prime candidate: ", function(userInput) {
    maybePrime = userInput;
    rl.close();
    isPrime(maybePrime);
});




function isPrime(candidate) { 
var maybePrimeSqrt = Math.sqrt(candidate); 
for (let i = 2; i<= maybePrimeSqrt; i++) {
  if (maybePrime % i === 0) {
    console.log(maybePrime + " is not prime");
    return;
  }

}
console.log(maybePrime + " is prime");

}
