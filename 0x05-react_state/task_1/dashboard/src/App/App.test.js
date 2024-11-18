import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import NotificationItem from '../Notifications/NotificationItem';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

window.alert = jest.fn();

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
    if (wrapper) wrapper.unmount();
  });

  describe('Rendering Components', () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('contains <Header /> component', () => {
      expect(wrapper.find('Header').exists()).toBe(true);
    });

    it('contains <Footer /> component', () => {
      expect(wrapper.find('Footer').exists()).toBe(true);
    });

    it('contains <Login /> component by default', () => {
      expect(wrapper.find(Login).exists()).toBe(true);
    });

    it('does not display <CourseList /> by default', () => {
      expect(wrapper.find('CourseList').exists()).toBe(false);
    });

    it('contains <Notifications />', () => {
      expect(wrapper.find(Notifications).exists()).toBe(true);
    });

    it('does not render <NotificationItem />', () => {
      expect(wrapper.find(NotificationItem).exists()).toBe(false);
    });

    it('renders one <BodySection /> and one <BodySectionWithMarginBottom />', () => {
      expect(wrapper.find(BodySection)).toHaveLength(1);
      expect(wrapper.find(BodySectionWithMarginBottom)).toHaveLength(1);
    });
  });

  describe('When isLoggedIn is true', () => {
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn />);
    });

    it('does not render <Login />', () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('renders <CourseList />', () => {
      expect(wrapper.find('CourseList').exists()).toBe(true);
    });
  });

  describe('Keyboard Events', () => {
    it('calls alert when Ctrl+H is pressed', () => {
      const mockLogOut = jest.fn();
      const events = {};
      window.addEventListener = jest.fn((event, callback) => {
        events[event] = callback;
      });

      wrapper = mount(<App isLoggedIn logOut={mockLogOut} />);
      events.keydown({ ctrlKey: true, key: 'h' });

      expect(window.alert).toHaveBeenCalledWith('Logging you out');
      expect(mockLogOut).toHaveBeenCalled();
    });
  });

  describe('State Management', () => {
    beforeEach(() => {
      wrapper = mount(<App />);
    });

    it('sets `displayDrawer` to false by default', () => {
      expect(wrapper.state().displayDrawer).toBe(false);
    });

    it('sets `displayDrawer` to true when handleDisplayDrawer is called', () => {
      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state().displayDrawer).toBe(true);
    });

    it('sets `displayDrawer` to false when handleHideDrawer is called', () => {
      wrapper.setState({ displayDrawer: true });
      wrapper.instance().handleHideDrawer();
      expect(wrapper.state().displayDrawer).toBe(false);
    });

    it('toggles `displayDrawer` with handleDisplayDrawer and handleHideDrawer', () => {
      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state().displayDrawer).toBe(true);

      wrapper.instance().handleHideDrawer();
      expect(wrapper.state().displayDrawer).toBe(false);
    });
  });
});

