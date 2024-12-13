const opOperators = ["*", "/", "%"];
const midOperators = ["+", "-"];

interface OperatorResult {
  operator: string;
  sign: string;
}

export const parseOperators = (
  operators: string
): string | OperatorResult | undefined => {
  if (!operators) {
    return "";
  }

  // First check for opOperator
  const opOperator = operators.split("").find((op) => opOperators.includes(op));

  if (opOperator) {
    // Verify opOperator is first and only one exists
    const operatorIndex = operators.indexOf(opOperator);

    if (operatorIndex > 0) {
      console.error("Invalid operator order - operator not at start");
      return;
    }

    const secondOpOperator = operators
      .slice(1)
      .split("")
      .find((op) => opOperators.includes(op));

    if (secondOpOperator) {
      console.error("Multiple operation operators found");
      return;
    }

    // Count number of minus signs in remaining operators
    const remainingOperators = operators.slice(1);
    const minusCount = (remainingOperators.match(/-/g) || []).length;

    // If odd number of minus signs, return operator with minus
    if (minusCount % 2 === 1) {
      return {
        operator: opOperator,
        sign: "-",
      };
    }

    // If even number of minus signs, return just the operator
    return opOperator;
  }

  // If no opOperator, just count minus signs
  const minusCount = (operators.match(/-/g) || []).length;
  const result = minusCount % 2 === 1 ? "-" : "+";
  return result;
};
