var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

const nestedEvenSum = (obj) => {
  let result = 0;

  const helper = (object) => {
    for (let key in object) {
      let currentValue = object[key];
      if (typeof currentValue === "object")
        result += nestedEvenSum(currentValue);
      else if (typeof currentValue === "number" && currentValue % 2 === 0) {
        result += currentValue;
      }
    }
  };

  helper(obj);

  return result;
};
nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
