import React from "react";
import { mount, shallow } from "enzyme";
import Header from "../components/Header";
import "jest-styled-components";

describe("RENDERS HEADER", () => {
  it("renders Hedear", () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find("[data-test-id='header']");
    expect(header.length).toEqual(1);
  });
  it("renders logo", () => {
    const wrapper = mount(<Header />);
    const logo = wrapper.find("[data-test-id='logo']").hostNodes();
    expect(logo.length).toEqual(1);
  });

  it("has correct styles", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveStyleRule("width", "100%");
    expect(wrapper).toHaveStyleRule("background-color", "black");
  });
});
