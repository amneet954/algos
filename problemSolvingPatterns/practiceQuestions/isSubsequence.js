const isSubsequence = (string1, string2) => {
  let stringLength = string1.length;

  let a = 0;

  for (let i = 0; i < string2.length; i++) {
    let currentValue = string2[i];
    if (currentValue === string1[a] && a <= stringLength) a += 1;
  }

  if (a !== stringLength) return false;
  else return true;
};

console.log(`Answer: ${isSubsequence("hello", "hello world")}`); //true
console.log(`Answer: ${isSubsequence("sing", "sting")}`); //true
console.log(`Answer: ${isSubsequence("abc", "abracadabra")}`); //true
console.log(`Answer: ${isSubsequence("abc", "acb")}`); //false (order matters)
