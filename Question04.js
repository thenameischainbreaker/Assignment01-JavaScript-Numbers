const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter a number :", function(userInput) {
    let number = userInput;
    r1.close();
    //execute findPrimes function in callback
   console.log("The prime factors of input are " + findPrimes(number));

   


  });


  function findPrimes(number){
    let array = [];
    
    for(let i =2; i<=number;) {
        if(number % i === 0) {
            array.push(i);
            number = number / i;

        }
        else {
            i++;
        }
    }
    return array;



  }
