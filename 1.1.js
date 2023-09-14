function transformNumbers(numbers, func) {
  return numbers.map(func);
}

function transformNumbers(numbers, func) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const transformedNumber = func(number);
    result.push(transformedNumber);
  }
  return result;
}

// Usage
const numbers = [1, 2, 3, 4, 5];

// Declarative
const doubleNumbers = transformNumbers(numbers, (num) => num * 2);
console.log(doubleNumbers);

// Imperative
const tripleNumbers = transformNumbers(numbers, (num) => num * 3);
console.log(tripleNumbers);
