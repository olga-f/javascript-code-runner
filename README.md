# JavaScript Code Runner

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/javascript-code-runner" title="View this project on NPM"><img src="https://img.shields.io/npm/v/javascript-code-runner.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://www.npmjs.com/package/javascript-code-runner" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/javascript-code-runner.svg" alt="NPM downloads" /></a></span>

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
result.join(', ');`;

const { result, message } = JSrunner(fibonacciCode);
console.log(result); // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
console.log(message); // null (error message)
```

#### Example with a web worker

_worker.js_

```javascript
import JSrunner from "javascript-code-runner";

addEventListener("message", (e) => {
  postMessage(JSrunner(e.data));
});
```
