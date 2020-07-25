//write a function called power that takes base and exponent. returns power of the base to the exponent

const power = (number, exponent) => {
  if (exponent === 0) return 1;

  return number * power(number, exponent - 1);
};

console.log(`Answer: ${power(2, 0)}`);
console.log(`Answer: ${power(2, 5)}`);
