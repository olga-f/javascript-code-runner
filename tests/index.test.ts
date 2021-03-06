import JSrunner from "../dist/index";

const fibonacciCode = `
const result = [];
const fibonacci = (n, result) => {
  var a = 1, b = 1, sum;
  for (var i = 0; i < n; i++) {
    result.push(a);
    sum = a + b;
    a = b;
    b = sum;
  }
}
fibonacci(12, result);
result.join(', ');
`;
const fibonacciResult = `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144`;

const syntaxErrorCode = `
Math.ceil(4.9;
`;

const syntaxErrorResult = `SyntaxError: unknown: Unexpected token, expected "," (2:13)

  1 |
> 2 | Math.ceil(4.9;
    |              ^
  3 |`;

const typeErrorCode = `
  window.printme();`;
const typeErrorResult = `TypeError: undefined is not a function`;

const codeWithComment = `
function squareArrayOutOfPlace(intArray) {
  // We allocate a new array that we'll fill in with the new values
  const squaredArray = [];

  intArray.forEach((int, index) => {
    squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}
const originalArray = [2, 3, 4, 5];
squareArrayOutOfPlace(originalArray);`;
const codeWithCommentResult = `4,9,16,25`;

const codeWithUndefined = `
const result = [];
const fibonacci = (n, result) => {
  var a = 1, b = 1, sum;
  for (var i = 0; i < n; i++) {
    result.push(a);
    sum = a + b;
    a = b;
    b = sum;
  }
}
fibonacci(12, result);
`;
const resultWithUndefined = `Undefined function or variable`;

const emptyCode = `    `;
const resultEmptyCode = `There's no code to execute.`;

const codeNoRun = `
function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
`;
const resultCodeNoRun = `The code does not execute.`;

const codeObjectAssign = `
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const output = Object.assign(target, source);
JSON.stringify(output);
`;
const assignResult = '{"a":1,"b":4,"c":5}';

test("fibonacci code to equal result", () => {
  const { result, message } = JSrunner(fibonacciCode);
  expect(result).toBe(fibonacciResult);
  expect(message).toBe(null);
});

test("code with syntax error to equal syntax message", () => {
  const { result, message } = JSrunner(syntaxErrorCode);
  expect(result).toBe(null);
  expect(message).toBe(syntaxErrorResult);
});

test("code with type error to equal type message", () => {
  const { result, message } = JSrunner(typeErrorCode);
  expect(result).toBe(null);
  expect(message).toBe(typeErrorResult);
});

test("code with comment to equal result array", () => {
  const { result, message } = JSrunner(codeWithComment);
  expect(result).toBe(codeWithCommentResult);
  expect(message).toBe(null);
});

test("code with undefined", () => {
  const { result, message } = JSrunner(codeWithUndefined);
  expect(result).toBe(null);
  expect(message).toBe(resultWithUndefined);
});

test("empty code", () => {
  const { result, message } = JSrunner(emptyCode);
  expect(result).toBe(null);
  expect(message).toBe(resultEmptyCode);
});

test("code not called", () => {
  const { result, message } = JSrunner(codeNoRun);
  expect(result).toBe(null);
  expect(message).toBe(resultCodeNoRun);
});

test("code with Object.assign() to equal assignResult", () => {
  const { result, message } = JSrunner(codeObjectAssign);
  expect(result).toBe(assignResult);
  expect(message).toBe(null);
});
