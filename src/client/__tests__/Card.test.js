import React from "react";
import { mount, shallow } from "enzyme";
import { ScCard } from "../components/Card";
import "jest-styled-components";

describe("RENDERS CARD", () => {
  it("renders Card", () => {
    const wrapper = shallow(<ScCard />);
    const card = wrapper.find("[data-test-id='card']");
    expect(card.length).toEqual(1);
  });

  it("has correct styles", () => {
    const wrapper = shallow(<ScCard />);
    expect(wrapper).toHaveStyleRule("background-color", "white");
    expect(wrapper).toHaveStyleRule("width", "90%");
    expect(wrapper).toHaveStyleRule("height", "65vh");
  });
});
