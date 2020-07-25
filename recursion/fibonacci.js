const fib = (number) => {
  if (number <= 2) return 1;
  return fib(number - 1) + fib(number - 2);
};

console.log(`Answer:${fib(4)}`);
console.log(`Answer:${fib(10)}`);
