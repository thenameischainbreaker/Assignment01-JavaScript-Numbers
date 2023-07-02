const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter an array of two variables (comma-separated): ", function(userInput) {
    let [first, second] = JSON.parse(userInput);
    r1.close();
    //execute swap function in callback
   

    [first, second] = swap(first, second);
   
    console.log("First variable is now " + first);
    console.log("Second variable is now " + second);



  });


  function swap(first, second){
    let temp;
    temp = first;
    first = second;
    second = temp;
    return [first,second];
 
}
