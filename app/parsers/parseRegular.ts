import { operators } from "../constants/operators";

export function parseRegular(input: (bigint | string)[]) {
  let total: bigint = BigInt(0);
  let currentOperator: string | null = null;
  for (const item of input) {
    if (typeof item === "bigint") {
      try {
        if (currentOperator) {
          switch (currentOperator) {
            case "+":
              total += item;
              break;
            case "-":
              total -= item;
              break;
            case "*":
              total *= item;
              break;
            case "/":
              total /= item;
              break;
            case "%":
              total %= item;
              break;
          }
        } else {
          total = item;
        }
      } catch (error) {
        console.error("Invalid operator");
        return;
      }
    } else {
      if (operators.includes(item)) {
        currentOperator = item;
      } else {
        console.error("Invalid input");
        return;
      }
    }
  }
  return total;
}
