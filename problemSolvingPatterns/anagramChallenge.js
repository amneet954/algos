//Given 2 string, write a function to find out if the second string is an anagram of the first.

const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    console.log("False. String Lengths do not match.");
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < string1.length; i++) {
    let current = string1[i];
    counter1[current] = (counter1[current] || 0) + 1;
    counter1[current]++;
  }

  for (let i = 0; i < string2.length; i++) {
    let current = string2[i];
    counter2[current] = (counter2[current] || 0) + 1;
    counter2[current]++;
  }

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      console.log("False. Frequency of values are not identical");
      return false;
    }
  }

  return true;
};

//Test Cases
validAnagram("", ""); //true
validAnagram("aaz", "zza"); //false
validAnagram("anagram", "nagaram"); //true
validAnagram("rat", "car"); //false
validAnagram("awesome", "awesom"); //false
validAnagram("qwerty", "qeywrt"); //true
validAnagram("texttwisttime", "timetwisttext"); //true

//Best Complexity O(1) & Worst Complexity O(n)
