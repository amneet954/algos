//Write a function that capitalizes all letters of the string values within the array

const capitalizeWords = (array) => {
  if (array.length === 1) {
    return (array[0] = array[0].toUpperCase());
  }

  array[0] = array[0].toUpperCase();
  return array[0].split(" ").concat(capitalizeWords(array.slice(1)));
};

// capitalizeWords(["i", "am", "learning", "recursion"]);
console.log(`Answer: ${capitalizeWords(["i", "am", "learning", "recursion"])}`);

