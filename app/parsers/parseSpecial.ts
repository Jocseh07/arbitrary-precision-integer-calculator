import { convertBigInt } from "../helpers";
import { getFactorial } from "../operations/factorial";
import { getPower } from "../operations/power";
import { operators } from "../constants/operators";

export function parseSpecial(input: string[]) {
  const parsedInput: (bigint | string)[] = [];
  for (const item of input) {
    if (item.includes("^")) {
      const power = parsePower(item);
      if (!power) return;
      parsedInput.push(power);
    } else if (item.includes("!")) {
      const factorial = parseFactorial(item);
      if (!factorial) return;
      parsedInput.push(factorial);
    } else {
      if (operators.includes(item)) {
        parsedInput.push(item);
      } else {
        const number = convertBigInt(item);
        if (!number) return;
        parsedInput.push(number);
      }
    }
  }
  return parsedInput;
}

const parsePower = (input: string) => {
  const [base, exponent] = input.split("^");
  const baseBigInt = convertBigInt(base);
  const parsedExponent = convertBigInt(exponent);
  if (!baseBigInt || !parsedExponent) return;
  const power = getPower(baseBigInt, parsedExponent);
  return power;
};

const parseFactorial = (input: string) => {
  const [number] = input.split("!");
  const numberBigInt = convertBigInt(number);
  if (!numberBigInt) return;
  const factorial = getFactorial(numberBigInt);
  return factorial;
};
