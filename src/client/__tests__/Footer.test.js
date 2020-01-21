import React from "react";
import { mount, shallow } from "enzyme";
import Footer from "../components/Footer";

describe("RENDERS ELEMENTS", () => {
  it("renders Footer", () => {
    const wrapper = shallow(<Footer />);
    const footer = wrapper.find("[data-test-id='footer']");
    expect(footer.length).toEqual(1);
  });
  it("renders logo", () => {
    const wrapper = mount(<Footer />);
    const logo = wrapper.find("[data-test-id='logo']").hostNodes();
    expect(logo.length).toEqual(1);
  });
});
