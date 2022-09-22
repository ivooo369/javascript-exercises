const palindromes = function (string) {
  const re = /[\W_]/g;
  const lowRegString = string.toLowerCase().replace(re, "");
  const reverseString = lowRegString.split("").reverse().join("");
  return reverseString === lowRegString;
};

// Do not edit below this line
module.exports = palindromes;
