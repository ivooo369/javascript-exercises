const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((num1, num2) => num1 + num2);
};

const multiply = function (numbers) {
  return numbers.reduce((num1, num2) => num1 * num2);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let factorialTotal = 1;
  for (let i = 1; i <= num; i++) {
    factorialTotal *= i;
  }
  return factorialTotal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
