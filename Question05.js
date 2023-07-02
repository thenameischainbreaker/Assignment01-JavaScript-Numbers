const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter a number :", function(userInput) {
    let number = userInput;
    r1.close();
    //execute reverseInteger function in callback
   console.log("The reversed Integer input is " + reverseInteger(number));

   


  });


  function reverseInteger(number) {
   let reversed = 0;
    let i = 0;
   for(;number>0;) {
    reversed = reversed + (number % 10);
    number = Math.floor(number / 10);
    reversed = reversed * 10;
    i++;
   }
   reversed = reversed / 10;
   console.log(i);
   return reversed;


  }
