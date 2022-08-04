/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again: 
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

// your code here!
function interrupter(interruptingWord) {
  return sentence => {
    const arr = sentence.split(' ');
    let res = '';
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      const word = arr[i];
      res += word + ' ' + interruptingWord + ' ';
    }
    res += arr[n - 1];
    return res;
  };
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
