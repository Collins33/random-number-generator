import React from "react";
import { shallow } from "enzyme";
import Header from "../header";

describe("header", () => {
  it("renders correctly", () => {
    const headerComponent = shallow(<Header />);
    expect(headerComponent).toMatchSnapshot();
  });
});
