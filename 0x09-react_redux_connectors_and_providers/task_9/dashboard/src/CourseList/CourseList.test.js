import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from "aphrodite";

const mockStore = configureMockStore([thunk]);

describe("<CourseList />", () => {
  let store;
  let initialState;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  beforeEach(() => {
    initialState = {
      courses: {
        list: [],
      },
    };
    store = mockStore(initialState);
  });

  it("renders without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct rows when courses are provided", () => {
    initialState.courses.list = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false },
    ];
    store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const rows = wrapper.find("CourseListRow");
    expect(rows).toHaveLength(5);

    // Check headers
    expect(rows.at(0).prop("textFirstCell")).toBe("Available courses");
    expect(rows.at(1).prop("textFirstCell")).toBe("Course name");

    // Check course rows
    expect(rows.at(2).prop("textFirstCell")).toBe("ES6");
    expect(rows.at(3).prop("textFirstCell")).toBe("Webpack");
    expect(rows.at(4).prop("textFirstCell")).toBe("React");
  });

  it("renders the correct rows when no courses are provided", () => {
    const wrapper = mount(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const rows = wrapper.find("CourseListRow");
    expect(rows).toHaveLength(3);

    // Check headers
    expect(rows.at(0).prop("textFirstCell")).toBe("Available courses");
    expect(rows.at(1).prop("textFirstCell")).toBe("Course name");

    // Check "No course available" row
    expect(rows.at(2).prop("textFirstCell")).toBe("No course available yet");
  });
});

