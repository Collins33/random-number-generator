import React from "react";
import { shallow } from "enzyme";
import Generator from "../generator";

describe("Generator form component", () => {
  it("renders correctly", () => {
    const generatorComponent = shallow(<Generator />);
    expect(generatorComponent).toMatchSnapshot();
  });
});
