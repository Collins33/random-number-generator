import checkArray from "../arrayCheck";

describe("Check array values", () => {
  it("returns state of the array", () => {
    const stateOfArray = checkArray([]);
    expect(stateOfArray).toBeFalsy();
  });
});
