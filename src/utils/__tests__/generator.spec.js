import generatePhoneNumbers from "../generator";

describe("Generator function", () => {
  it("Generates an array of numbers", () => {
    const numbers = generatePhoneNumbers(["09876543"], 4);
    const amountOfNumbers = numbers.length;
    expect(amountOfNumbers).toBe(4);
  });
});
