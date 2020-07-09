//This problem solving method uses objects or sets to collect values/frequencies of values.
//A definite advantage over use nested loops that will cause an O(n^2) complexity
//This method is usually O(n)

//Problem: Given 2 string, write a function to find out if the second string is an anagram of the first.

const validAnagram = (str1, str2) => {
  string1.toLowerCase();
  string2.toLowerCase();
  if (str1.length !== str2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    let current = str1[i];
    counter1[current] = (counter1[current] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let current = str2[i];
    counter2[current] = (counter2[current] || 0) + 1;
  }

  for (let key in counter1) {
    if (!counter2[key]) return false;
    if (counter1[key] !== counter2[key]) return false;
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

//Best Time Complexity: O(1) & Worst TimeComplexity: O(n)
