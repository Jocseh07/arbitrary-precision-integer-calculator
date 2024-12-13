import { parseInput } from "./parsers/parseInput";
import { parseRegular } from "./parsers/parseRegular";
import { parseSpecial } from "./parsers/parseSpecial";

export function start(input: string) {
  const result = parseInput(input);
  if (!result) return;
  const parsedSpecial = parseSpecial(result);
  if (!parsedSpecial) return;
  const parsedRegular = parseRegular(parsedSpecial);
  if (!parsedRegular) return;
  console.log(parsedRegular?.toString());
}
