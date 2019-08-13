import React from "react";
import { shallow } from "enzyme";
import Number from "../numbers";

describe("Generator form component", () => {
  it("renders correctly", () => {
    const props = {
      generatedPhoneNumbers: ["89777788"]
    };
    const generatorComponent = shallow(<Number {...props} />);
    expect(generatorComponent).toMatchSnapshot();
  });
});
