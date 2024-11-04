import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('tests that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Checks that the component renders <NotificationItem /> elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3); // Adjust based on how many NotificationItems you expect
  });

  it('Checks first NotificationItem renders correct value', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotification = wrapper.find(NotificationItem).at(0);
    expect(firstNotification.prop('value')).toBe('New course available');
  });

  it('Checks that the third NotificationItem renders correct html', () => {
    const wrapper = shallow(<Notifications />);
    const thirdNotification = wrapper.find(NotificationItem).at(2);
    expect(thirdNotification.prop('html')).toEqual({ __html: '<u>New resume available</u>' }); // Example; adjust according to your implementation
  });
});
