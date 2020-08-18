//write a recursive function that returns true if string passed, is a palindrome

const isPalindrome = (string) => {
  if (string.length <= 1) return true;

  let first = string[0];
  let last = string[string.length - 1];

  if (first === last) return isPalindrome(string.slice(first, last));
  else return false;
};

console.log(`Answer: ${isPalindrome("awesome")}`); //false
console.log(`Answer: ${isPalindrome("foobar")}`); //false
console.log(`Answer: ${isPalindrome("tacocat")}`); //true
console.log(`Answer: ${isPalindrome("amanaplanacanalpanama")}`); //true
console.log(`Answer: ${isPalindrome("amanaplanacanalpandemonium")}`); //false
