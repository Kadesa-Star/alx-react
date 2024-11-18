import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();  // Clear mocks after each test
    jest.restoreAllMocks(); // Restore all mocks to avoid affecting other tests
  });

  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
  ];

  const listNotifications2 = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: 'HTML' } }
  ];

  // Normal Notifications component tests
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('checks first item renders correct HTML', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Your notifications');
  });

  // Notifications component props tests
  it('does not render Notifications div when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').length).toBe(0);
  });

  it('renders new divs when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    const lengthBefore = wrapper.find('div').length;

    const wrapper2 = shallow(<Notifications displayDrawer listNotifications={[]} />);
    const lengthAfter = wrapper2.find('div').length;

    expect(lengthAfter).toBeGreaterThan(lengthBefore);
  });

  it('renders correct elements when passing an empty array to listNotifications', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find('.NotificationItem').length).toBe(0);
  });

  it('renders correct elements when listNotifications is not passed', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.NotificationItem').length).toBe(0);
  });

  // Event listener tests
  it('calls markAsRead when a notification is clicked', () => {
    const consoleSpy = jest.spyOn(global.console, 'log');
    const wrapper = mount(<Notifications displayDrawer listNotifications={[]} />);
    wrapper.instance().markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been read');
    wrapper.unmount();
  });

  it('calls handleDisplayDrawer when clicking "Your notifications"', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('#notiP').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleHideDrawer={handleHideDrawer} />);
    wrapper.find('#x_button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  // shouldComponentUpdate tests
  it('does not rerender when props listNotifications are the same', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    wrapper.setProps({ listNotifications });
    expect(wrapper.find(NotificationItem).length).toBe(2);
  });

  it('rerenders when props listNotifications are updated', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    wrapper.setProps({ listNotifications: listNotifications2 });
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  // Test rendering of NotificationItems with correct data
  it('renders correct NotificationItems when passing a longer listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications2} />);
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.length).toBe(3);
    expect(notificationItems.at(0).prop('value')).toEqual('New course available');
    expect(notificationItems.at(1).prop('value')).toEqual('New resume available');
    expect(notificationItems.at(2).prop('html').__html).toEqual('HTML');
  });

  // Test for default message when there are no notifications
  it('renders a default message when listNotifications is empty or missing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('No new notification for now');
  });
});

