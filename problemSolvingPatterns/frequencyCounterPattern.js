//This problem solving method uses objects or sets to collect values/frequencies of values.
//A definite advantage over use nested loops that will cause an O(n^2) complexity
//This method is usually O(n)

//Problem: A function named "same" that accepts 2 arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log("False. Array lengths are not the same");
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    let current = arr1[i];
    counter1[current] = (counter1[current] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    let current = arr2[i];
    counter2[current] = (counter2[current] || 0) + 1;
  }

  for (let key in counter1) {
    if (counter1[key] !== counter2[key ** 2]) {
      console.log("False. Frequency of values are not identical");
      return false;
    }
  }

  console.log("True");
};

//Test Cases
same([1, 2, 3], [4, 1, 9]);
same([1, 2, 3], [1, 9]);
same([1, 2, 1], [4, 4, 1]);
same([12, 5, 11, 5, 5], [25, 25, 25, 121, 144]);

//Best Complexity O(1) & Worst Complexity O(n)
