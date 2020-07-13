//This problem solving method is done by dividing a data set into small pieces and from there, repeating the process with a subset data.
// This pattern is VERY useful as it SIGNIFICANTLY decreases time complexity.

//Problem: We have an array of sorted integers. Create a function that accepts the second argument value and returns the index of where the value is found, within the array. If the value is not in the array at all, return -1

const divideAndConquer = (array, number) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.ceil((start + end) / 2);
    let currentValue = array[middle];
    if (currentValue > number) end = middle - 1;
    else if (currentValue < number) start = middle + 1;
    else return middle;
  }

  return -1;
};

//Alternate Solution

// const divideAndConquer = (array, number) => {
//   if (array.length < 1) return -1;

//   let end = array.length - 1;
//   let middle = Math.ceil(end / 2);

//   if (array[middle] === number) return middle;
//   else if (array[middle] < number) {
//     let a = middle;
//     while (array[a] < number) a++;
//     if (array[a] !== number) return -1;
//     else return a;
//   } else if (array[middle] > number) {
//     let a = 0;
//     while (array[middle] > number) a++;
//     if (array[a] !== number) return -1;
//     else return a;
//   } else {
//     return -1;
//   }
// };

console.log(`Answer is: ${divideAndConquer([1, 2, 3, 4, 5, 6], 4)}`); //3
console.log(`Answer is: ${divideAndConquer([1, 2, 3, 4, 5, 6], 6)}`); //5
console.log(`Answer is: ${divideAndConquer([1, 2, 3, 4, 5, 6], 11)}`); //-1
console.log(`Answer is: ${divideAndConquer([11], 11)}`); //0
