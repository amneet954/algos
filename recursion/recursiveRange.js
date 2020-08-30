//Write a function that takes a number and returns the number of all the number from that number, all the way down to 0

const recursiveRange = (number) => {
  if (number === 1) return 1;

  return number + recursiveRange((number -= 1));
};

console.log(`Answer: ${recursiveRange(6)}`);
console.log(`Answer: ${recursiveRange(10)}`);
