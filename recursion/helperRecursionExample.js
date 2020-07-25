//Example of using helper Recursion functions

const example = (arr) => {
  let result = [];

  const helperFunction = (input) => {
    if (input.length === 0) return;

    if (input[0] % 2 === 0) result.push(input[0]);

    helperFunction(input.slice(1));
  };

  helperFunction(arr);
  console.log(result);
  return result;
};

console.log(`Answer: ${example([1, 2, 4, 5, 7, 8, 9])}`);
