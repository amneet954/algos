//Write a function that takes a multidimensional sum array and flattens it. Leaving only values in the array, each value in the array should not be an array with value nested in it.

const flatten = (array) => {
  let final = [];

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (!Array.isArray(currentValue)) final.push(currentValue);
    else final = final.concat(flatten(currentValue));
  }
  return final;
};

console.log(`Answer: ${flatten([1, 2, 3, [4, 5]])}`);
console.log(`Answer: ${flatten([1, [2, [3, 4]]])}`);
console.log(`Answer: ${flatten([1], [2], [3])}`);
console.log(`Answer: ${flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])}`);

const capitalizeFirst = (arr) => {
  let final = [];

  const helper = (array) => {
    if (array.length === 1)
      return (array[0] = array[0][0].toUpperCase().concat(array[0].slice(1)));
    array[0] = array[0][0].toUpperCase().concat(array[0].slice(1));
    final.push[array[0]];
  };

  return final.concat(capitalizeFirst(array.slice(1)));
};

capitalizeFirst(["batman", "robin", "nightwing"]);


const capitalizeFirst = (arr) => {
  let final = [];

  const helper = (array) => {
    if (array.length === 1)
      return (array[0] = array[0][0].toUpperCase().concat(array[0].slice(1)));
    array[0] = array[0][0].toUpperCase().concat(array[0].slice(1));
    final.push[array[0]];
    return final.concat(capitalizeFirst(array.slice(1)));
  };
  helper(arr)
  return final
};

capitalizeFirst(["batman", "robin", "nightwing"]);
