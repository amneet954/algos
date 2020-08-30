//Take a string and return the string in reverse using recursion

const reverse = (string) => {
  if (string.length <= 1) return string;

  return reverse(string.slice(1)) + string[0];
};

console.log(`Answer: ${reverse("robin")}`);
