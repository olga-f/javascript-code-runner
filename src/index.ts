import { transform } from "@babel/standalone";
import Interpreter from "js-interpreter";
import { assignPolyfill } from "./polyfills";

type Props = {
  result: string | null;
  message: string | null;
};

export const JSrunner: (code: string) => Props = (code: string): Props => {
  const output: Props = { result: null, message: null };
  if (code.trim().length < 1) {
    output.message = "There's no code to execute.";
    return output;
  }
  try {
    // check if we need a polyfill for Object.assign()
    if (code?.includes(" Object.assign(")) {
      code = assignPolyfill + code;
    }
    const codeToRun = transform(code, {
      presets: [["env", { useBuiltIns: "entry", corejs: 3 }]],
    }).code;

    const jsInterpreter = new Interpreter(codeToRun);

    jsInterpreter.run();
    if (jsInterpreter.value == "use strict") {
      output.message = "The code does not execute.";
      return output;
    }
    jsInterpreter.value !== undefined
      ? (output.result = jsInterpreter.value.toString())
      : (output.message = "Undefined function or variable");
    return output;
  } catch (error) {
    output.message = error.toString();
    return output;
  }
};

export default JSrunner;

/**
 * @fileoverview JavaScript Code Runner
 * @author olgafesh@hotmail.com (Olga F. Andreiko)
 * @license  MIT
 */
