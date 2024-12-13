export function convertBigInt(input: string) {
  try {
    return BigInt(input);
  } catch (error) {
    console.error("Invalid input");
    return;
  }
}
