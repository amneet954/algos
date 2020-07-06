//This problem solving method uses objects or sets to collect values/frequencies of values.
//A definite advantage over use nested loops that will cause an O(n^2) complexity
//This method is usually O(n)

//Problem: A function named "same" that accepts 2 arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log("False. Array lengths are not the same");
    return false;
  }
  arr1.sort();
  arr2.sort();
  let a = 0;

  for (let i = 0; i < arr2.length; i++) {
    let current = arr2[i];

    if (arr1[a] * arr1[a] === current) {
      a++;
    } else {
      console.log("False. Frequency of values are not identical");
      return false;
    }
  }
  console.log("True");
};

//Alternative Solution

// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;

//   let counter1 = {};
//   let counter2 = {};

//   for (let value of arr1) {
//     counter1[value] = (counter1[value] || 0) + 1;
//   }
//   for (let value of arr2) {
//     counter2[value] = (counter2[value] || 0) + 1;
//   }
//   for (let key in counter1) {
//     if (!(key ** 2 in counter2)) return false;
//     if (counter2[key ** 2] !== counter1[key]) return false;
//   }
// };

//Test Cases
same([1, 2, 3], [4, 1, 9]);
same([1, 2, 3], [1, 9]);
same([1, 2, 1], [4, 4, 1]);
