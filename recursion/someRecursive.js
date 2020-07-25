//Write a function that takes the values in an array and runs it through a function. If any one of those values return true, the main function should return true

const someRecursive = (array, callback) => {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
};

const isOdd = (value) => {
  return value % 2 !== 0;
};

const over10 = (value) => {
  return value > 10;
};

console.log(`Answer: ${someRecursive([1, 2, 3, 4], isOdd)}`);
console.log(`Answer: ${someRecursive([4, 6, 8, 9], isOdd)}`);
console.log(`Answer: ${someRecursive([4, 6, 8], isOdd)}`);
console.log(`Answer: ${someRecursive([4, 6, 8], over10)}`);
