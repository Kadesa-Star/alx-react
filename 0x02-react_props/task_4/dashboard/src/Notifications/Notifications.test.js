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
});
