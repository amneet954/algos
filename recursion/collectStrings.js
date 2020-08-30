const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const collectStrings = (object) => {
  let final = [];

  for (let key in object) {
    let currentValue = object[key];
    if (typeof currentValue !== "object") final.push(currentValue);
    else final = final.concat(collectStrings(currentValue));
  }
  return final;
};
collectStrings(obj); // ["foo", "bar", "baz"])
