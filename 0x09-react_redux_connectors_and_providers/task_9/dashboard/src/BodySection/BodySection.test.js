import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("<BodySection />", () => {
  it("should render correctly with a title and children", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    
    // Check that the h2 element contains the correct title
    expect(wrapper.find("h2").text()).toBe("test title");

    // Check that the p element contains the correct children text
    expect(wrapper.find("p").text()).toBe("test children node");
  });
});
