# JavaScript Code Runner

<span class="badge-npmversion"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://img.shields.io/npm/v/javascript-code-runner.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/badges" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/javascript-code-runner.svg" alt="NPM downloads" /></a></span>

JavaScript Code Runner allows the execution of JavaScript code.
This package base on an awesome [JS-Interpreter](https://github.com/NeilFraser/JS-Interpreter) written by Google's Neil Fraser.

Execution is completely isolated from the global JavaScript environment.
None of the DOM APIs are exposed. That is the point of a sandbox.

## Installation

```
npm i javascript-code-runner
```

## Usage

```javascript
import JSrunner from "javascript-code-runner";

const code = `function squareArrayOutOfPlace(intArray) {
  // We allocate a new array that we'll fill in with the new values
  const squaredArray = [];

  intArray.forEach((int, index) => {
    squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}
const originalArray = [2, 3, 4, 5];
squareArrayOutOfPlace(originalArray);`;

const { result, message } = JSrunner(code);
console.log(result); // 4,9,16,25
console.log(message); // null (error message)
```

## Limitation

Original Neil Fraser interpreter that used in this package understand only ES5 syntax.
This package uses [Babel Standalone](https://babeljs.io/docs/en/babel-standalone) for transpiling newer versions of JavaScript to ES5. You might run code snippets with modern syntax in Javascript Code Runner, but some polyfills may be missing.
