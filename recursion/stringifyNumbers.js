//Write a function that takes an object. Every number value in that object should be turned into a string value

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const stringifyNumbers = (object) => {
  for (let key in object) {
    let currentValue = object[key];
    if (typeof currentValue === "object") stringifyNumbers(currentValue);
    else if (typeof currentValue === "number")
      object[key] = currentValue.toString();
  }
  return object;
};

stringifyNumbers(obj);
// {
//   num: '1',
//   test: [],
//   data: { val: '4', info: { isRight: true, random: '66' } }
// }
