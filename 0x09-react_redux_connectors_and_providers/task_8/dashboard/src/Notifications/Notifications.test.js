import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors';

jest.mock('../actions/notificationActionCreators', () => ({
  markAsRead: jest.fn(),
  setNotificationFilter: jest.fn(),
}));

jest.mock('../selectors', () => ({
  getUnreadNotifications: jest.fn(),
}));

describe('Notifications component', () => {
  let wrapper;
  const mockHandleDisplayDrawer = jest.fn();
  const mockHandleHideDrawer = jest.fn();

  beforeEach(() => {
    getUnreadNotifications.mockReturnValue([
      { id: 1, value: 'New notification', isRead: false },
    ]);
    wrapper = shallow(
      <Notifications
        unreadNotifications={[{ id: 1, value: 'New notification', isRead: false }]}
        displayDrawer={true}
        handleDisplayDrawer={mockHandleDisplayDrawer}
        handleHideDrawer={mockHandleHideDrawer}
        markAsRead={markAsRead}
        setFilter={setNotificationFilter}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the notifications', () => {
    expect(wrapper.find('li').length).toBe(1); // There should be one notification
  });

  it('should call markAsRead when a notification is clicked', () => {
    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(1); // Check if markAsRead was called with the correct id
  });

  it('should display "No notification available yet" when no notifications', () => {
    wrapper.setProps({ unreadNotifications: [] });
    expect(wrapper.find('p').text()).toBe('No notification available yet');
  });

  it('Clicking on the first button should call setNotificationFilter with URGENT', () => {
    const urgentButton = wrapper.find('button').at(0); // First button
    urgentButton.simulate('click');
    expect(setNotificationFilter).toHaveBeenCalledWith('urgent');
  });

  it('Clicking on the second button should call setNotificationFilter with DEFAULT', () => {
    const defaultButton = wrapper.find('button').at(1); // Second button
    defaultButton.simulate('click');
    expect(setNotificationFilter).toHaveBeenCalledWith('default');
  });
});

