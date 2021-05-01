import { transform } from "@babel/standalone";
import Interpreter from "js-interpreter";

type Props = {
  result: string | null;
  message: string | null;
};
export const JSrunner: (code: string) => Props = (code: string): Props => {
  const output: Props = { result: null, message: null };
  try {
    const codeToRun = transform(code, {
      presets: [["env", { useBuiltIns: "entry", corejs: 3 }]],
    }).code;
    const jsInterpreter = new Interpreter(codeToRun);
    jsInterpreter.run();
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
