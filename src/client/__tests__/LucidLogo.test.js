import React from "react";
import { shallow } from "enzyme";
import LucidLogo from "../components/LucidLogo";
import "jest-styled-components";

describe("RENDERS LOGO", () => {
  it("renders logo", () => {
    const wrapper = shallow(<LucidLogo />);
    const logo = wrapper.find("[data-test-id='logo']");
    expect(logo.length).toEqual(1);
  });

  it("has logo styles", () => {
    const wrapper = shallow(<LucidLogo />);
    expect(wrapper).toHaveStyleRule("width", "250px");
  });

  it("has correct width", () => {
    const wrapper = shallow(<LucidLogo width="200px" />);
    expect(wrapper).toHaveStyleRule("width", "200px");
  });
});
