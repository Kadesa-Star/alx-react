import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

describe("<BodySectionWithMarginBottom />", () => {
  it("should render a BodySection component and pass the correct props", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="Course list">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    
    // Check that BodySection is rendered inside BodySectionWithMarginBottom
    const bodySectionWrapper = wrapper.find(BodySection);
    expect(bodySectionWrapper).toHaveLength(1);

    // Check that the title prop is passed correctly
    expect(bodySectionWrapper.prop("title")).toBe("Course list");

    // Check that children are passed correctly
    expect(bodySectionWrapper.contains(<p>test children node</p>)).toBe(true);
  });

  it("should have the correct margin-bottom applied", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="Course list">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check that the div has the correct CSS class for margin-bottom
    expect(wrapper.find("div").hasClass("bodySectionWithMargin")).toBe(true);
  });
});
