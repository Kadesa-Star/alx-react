import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';  // Assuming App is connected and exported correctly

describe('App component', () => {
  let wrapper;
  const mockHandleDisplayDrawer = jest.fn();
  const mockHandleHideDrawer = jest.fn();
  const mockFetchNotifications = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <App
        displayDrawer={false}
        listNotifications={[]}
        handleDisplayDrawer={mockHandleDisplayDrawer}
        handleHideDrawer={mockHandleHideDrawer}
        fetchNotifications={mockFetchNotifications}
      />
    );
  });

  it('should call fetchNotifications when the component is mounted', () => {
    expect(mockFetchNotifications).toHaveBeenCalled();
  });

  it('should render the Notification component', () => {
    expect(wrapper.find('Notification')).toHaveLength(1);
  });

  it('should call handleDisplayDrawer when the button is clicked', () => {
    wrapper.find('#notiP').simulate('click');
    expect(mockHandleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when the close button is clicked', () => {
    wrapper.find('#x_button').simulate('click');
    expect(mockHandleHideDrawer).toHaveBeenCalled();
  });
});

