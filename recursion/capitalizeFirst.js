//Write a function that takes the first letter of each string in the array, and capitalizes it. Assume that all string values in the array are in lower case.

const capitalizeFirst = (array) => {
  if (array.length === 1) {
    return (array[0] = array[0][0].toUpperCase().concat(array[0].slice(1)));
  }

  array[0] = array[0][0].toUpperCase().concat(array[0].slice(1));
  return array[0].split(" ").concat(capitalizeFirst(array.slice(1)));
};

// capitalizeFirst(["batman", "robin", "nightwing"]);
console.log(`Answer: ${capitalizeFirst(["batman", "robin", "nightwing"])}`);
