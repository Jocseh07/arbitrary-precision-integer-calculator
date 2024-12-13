import { operators } from "../constants/operators";
import { parseOperators } from "./parseOperators";

export function parseInput(input: string): string[] | undefined {
  // Remove all spaces
  const cleanInput = input.replace(/\s+/g, "");

  if (!cleanInput) {
    console.error("Empty input");
    return;
  }

  const result: string[] = [];
  let currentNumber = "";
  let currentOperators = "";

  for (let i = 0; i < cleanInput.length; i++) {
    const char = cleanInput[i];

    if (operators.includes(char)) {
      // If we have a number stored, add it to result
      if (currentNumber) {
        result.push(currentNumber);
        currentNumber = "";
      }
      currentOperators += char;
    } else {
      // If we have operators stored, parse and add them
      if (currentOperators) {
        const parsedOp = parseOperators(currentOperators);
        if (!parsedOp) return;
        if (typeof parsedOp === "string") {
          result.push(parsedOp);
        } else {
          result.push(parsedOp.operator);
          currentNumber = parsedOp.sign;
        }
        currentOperators = "";
      }
      currentNumber += char;
    }
  }

  // Handle any remaining number or operators
  if (currentNumber) {
    result.push(currentNumber);
  }
  if (currentOperators) {
    const parsedOp = parseOperators(currentOperators);
    if (!parsedOp) return;
    if (typeof parsedOp === "string") {
      result.push(parsedOp);
    } else {
      result.push(parsedOp.operator);
      result[result.length - 1] = "-" + result[result.length - 1];
    }
  }

  return result;
}
