import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the correct header text', () => {
    expect(wrapper.text()).toContain('Your notifications');
  });

  it('renders menuItem when displayDrawer is false', () => {
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('does not render Notifications div when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('.Notifications').length).toBe(0);
  });

  it('renders menuItem when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('renders Notifications div when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.Notifications').length).toBe(1);
  });

  // Test for marking a notification as read
  it('calls markAsRead and logs the correct message when a notification is clicked', () => {
    // Mock the console.log function
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Add a notification to the list for testing
    const notification = { id: 1, html: { __html: 'Test Notification' }, type: 'default', value: 'Test' };
    wrapper.setProps({ listNotifications: [notification] });

    // Find the NotificationItem and simulate a click on it
    const notificationItem = wrapper.find(NotificationItem);
    notificationItem.simulate('click');

    // Check if console.log was called with the correct message
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    // Restore the console.log function
    spy.mockRestore();
  });

  // Test: Component does not rerender when the listNotifications prop is the same
  it('does not rerender when the listNotifications prop is the same', () => {
    const initialRender = wrapper.debug(); // Capture the initial render output

    // Simulate props update with the same listNotifications
    wrapper.setProps({
      listNotifications: [
        { id: 1, type: 'default', value: 'New notification' },
      ],
    });

    const updatedRender = wrapper.debug(); // Capture updated render output

    // Expect no rerender (the output should be the same)
    expect(initialRender).toEqual(updatedRender);
  });

  // Test: Component rerenders when the listNotifications prop is longer
  it('rerenders when the listNotifications prop is longer', () => {
    const initialRender = wrapper.debug(); // Capture the initial render output

    // Simulate props update with a longer listNotifications
    wrapper.setProps({
      listNotifications: [
        { id: 1, type: 'default', value: 'New notification' },
        { id: 2, type: 'urgent', value: 'Another notification' },
      ],
    });

    const updatedRender = wrapper.debug(); // Capture updated render output

    // Expect rerender (the output should be different)
    expect(initialRender).not.toEqual(updatedRender);
  });
});
