//Write a function called sameFrequency, given 2 positive integers. Find out if 2 numbers have the same frequency of digits in them.

const sameFrequency = (number1, number2) => {
  let number1String = number1.toString();
  let number2String = number2.toString();

  if (number1String.length !== number2String.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < number1String.length; i++) {
    let currentValue = number1String[i];
    counter1[currentValue] = (counter1[currentValue] || 0) + 1;
  }

  for (let i = 0; i < number2String.length; i++) {
    let currentValue = number2String[i];
    counter2[currentValue] = (counter2[currentValue] || 0) + 1;
  }

  for (let key in counter1) {
    if (!counter2[key]) return false;
    if (counter1[key] !== counter2[key]) return false;
  }
  return true;
};

//Test Code
console.log(`Answer: ${sameFrequency(182, 281)}`); //true
console.log(`Answer: ${sameFrequency(34, 14)}`); //false
console.log(`Answer: ${sameFrequency(3589578, 5879385)}`); //true
console.log(`Answer: ${sameFrequency(22, 222)}`); //false

//Time Complexity: O(n)
