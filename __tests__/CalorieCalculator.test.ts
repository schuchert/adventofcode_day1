import "react-native";
import { beforeEach, describe, expect, it } from "@jest/globals";
import { Elf, maxElf, transform } from "../Transform"; // Note: test renderer must be required after react-native.

const input = `
    1000
    2000
    3000

    4000

    5000
    6000

    7000
    8000
    9000

    10000
    `;

describe("calorie calculator", () => {
  let elves: Elf[];

  beforeEach(() => {
    elves = transform(input);
  });

  it("gets first elf calories", () => {
    expect(elves[0]).toEqual(new Elf([1000, 2000, 3000], 1));
  });

  it("has the 5 elves", () => {
    expect(elves.length).toEqual(5);
  });

  it("has a final elf with 10000 calories", () => {
    expect(elves[4]).toEqual(new Elf([10000], 5));
  });

  it("knows the elf with the mostest", () => {
    const elf: Elf = maxElf(elves);
    expect(elf.number).toEqual(4);
    expect(elf.total()).toEqual(24000);
  });
});

describe("elf", () => {
  it("knows its total calories", () => {
    expect(new Elf([1000, 2000], 0).total()).toEqual(3000);
  });
});
