

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.question("Please enter a potential palindrome string: ", function(userInput) {
    let maybePalindrome = userInput;
    //execute palindrome functin in callback
    r1.close();
    isPalindrome(maybePalindrome);



  });

function isPalindrome(candidate){
if( typeof candidate.length === 'undefined'){
    console.log("Length of input is undefined: Please check you entered a string.");
    return;_
}

for (let i = 0; i<=candidate.length/2; i++ ){
    if (candidate[i] !== candidate[candidate.length-i-1]) {
        console.log("Input is not a palindrome");
        console.log(i);
        console.log("candidate[i] :" + candidate[i]);
        console.log("candidate[candidate.length-i] :" + candidate[candidate.length-i-1]);
        return;
    }
}
console.log("Input is a palindrome");
return;
}
