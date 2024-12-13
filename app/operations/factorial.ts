export function getFactorial(input: bigint) {
  let result = 1n;
  for (let i = 2n; i <= input; i++) {
    result *= i;
  }
  return result;
}
