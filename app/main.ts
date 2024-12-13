import * as readline from "readline";
import { start } from "./start";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function startREPL() {
  console.log('BigInteger Calculator (type "exit" to quit)');
  console.log("Supported operations:");
  console.log("  +  : Addition");
  console.log("  -  : Subtraction");
  console.log("  *  : Multiplication");
  console.log("  /  : Division");
  console.log("  %  : Modulo (or 'mod')");
  console.log("  ^  : Exponentiation");
  console.log("  !  : Factorial");

  rl.prompt();

  rl.on("line", (input) => {
    if (input.toLowerCase() === "exit") {
      rl.close();
      return;
    }

    start(input);

    rl.prompt();
  });

  rl.on("close", () => {
    console.log("\nGoodbye!");
    process.exit(0);
  });
}

startREPL();
