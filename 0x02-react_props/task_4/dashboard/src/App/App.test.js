import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

describe('<App />', () => {
    it('Tests that App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Contains Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notifications />)).toBeTruthy();
    });

    it('Contains Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).length).toBe(1);
    });

    it('Contains Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).length).toBe(1);
    });

    it('Tests that CourseList is not displayed when logged out', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList).length).toBe(0);
    });

    it('Tests that Login component is rendered when not logged in', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toBeTruthy();
    });

    // Test cases when isLoggedIn is true
    describe('when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);

        it('Tests that the Login component is not rendered', () => {
            expect(wrapper.contains(<Login />)).toBe(false);
        });

        it('Tests that CourseList component is rendered', () => {
            expect(wrapper.contains(<CourseList />)).toBeTruthy();
        });
    });
});
