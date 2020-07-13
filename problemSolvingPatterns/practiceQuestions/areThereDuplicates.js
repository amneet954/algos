//create a function called areThereDuplicates. The function can take a variable amount of arguments and checks whether or not there are duplicates in the argument passed in.

const areThereDuplicates = (...arguments) => {
  let counter = {};

  for (let i = 0; i < arguments.length; i++) {
    let currentValue = arguments[i];
    counter[currentValue] = (counter[currentValue] || 0) + 1;
  }

  for (let key in counter) {
    if (counter[key] > 1) return true;
  }

  return false;
};

//Test Code
console.log(`Answer: ${areThereDuplicates(1, 2, 3)}`);
console.log(`Answer: ${areThereDuplicates(1, 2, 2)}`);
console.log(`Answer: ${areThereDuplicates("a", "b", "c", "d")}`);

// Time: O(n) Space O(n)
