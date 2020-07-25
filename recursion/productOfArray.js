//Write a recursive function that takes the array of numbers and returns the product of them all

const productOfArray = (array) => {
  if (array.length === 1) return array;

  return array[0] * productOfArray(array.slice(1));
};

console.log(`Answer: ${productOfArray([1, 2, 3])}`);
console.log(`Answer: ${productOfArray([1, 2, 3, 10])}`);
