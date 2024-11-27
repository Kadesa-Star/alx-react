import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Login />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection(); // Suppress Aphrodite style injection during tests
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection(); // Clean up Aphrodite style buffer
  });

  it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true); // Check if the component renders
  });

  it("Verifies that the components render 2 input fields", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("input")).toHaveLength(3); // Two inputs (email and password) and one submit
  });

  it("Verifies that the components render 2 labels", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("label")).toHaveLength(2); // Two labels for email and password
  });

  it("Disables the submit button when email or password is empty", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true); // Button should be disabled initially

    // Simulate filling the email and password fields
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@test.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password123' } });

    // After filling the fields, the submit button should be enabled
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it("Triggers handleLoginSubmit when the form is submitted", () => {
    const handleLoginSubmit = jest.fn(); // Mock the handleLoginSubmit function
    const wrapper = shallow(<Login />);

    // Pass the mock function as a prop (if it's passed down, otherwise test state changes directly)
    wrapper.instance().handleLoginSubmit = handleLoginSubmit;

    // Simulate the form submission
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    // Check if handleLoginSubmit was called
    expect(handleLoginSubmit).toHaveBeenCalled();
  });
});

