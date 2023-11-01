export class Elf {
  constructor(public calories: number[], public number: number) {}

  total() {
    return this.calories.reduce((a, b) => a + b, 0);
  }
}

export function transform(input: string): Elf[] {
  let lines: string[] = input.trim().split("\n");
  const elves: Elf[] = [];

  let elfNumber = 0;
  while (lines.indexOf("") != -1) {
    let calories = lines.slice(0, lines.indexOf("")).map((n) => Number(n));
    const elf = new Elf(calories, ++elfNumber);
    lines = lines.splice(lines.indexOf("") + 1);
    elves.push(elf);
  }
  elves.push(
    new Elf(
      lines.map((n) => Number(n)),
      ++elfNumber
    )
  );
  return elves;
}

export function maxElf(elves: Elf[]) {
  return elves.sort((a, b) => b.total() - a.total())[0];
}
