import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header'; // Make sure to import Header
import Login from '../Login/Login';
import Footer from '../Footer/Footer'; // Make sure to import Footer

// shallow render app component
describe('<App />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('Tests that App renders without crashing', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('Contains Notifications component', () => {
		expect(wrapper.contains(<Notifications />)).toBe(true);
	});

	it('Contains Header component', () => {
		expect(wrapper.find(Header).length).toBe(1); // Using the Header component
	});

	it('Contains Login component', () => {
		expect(wrapper.contains(<Login />)).toBe(true);
	});

	it('Contains Footer component', () => {
		expect(wrapper.find(Footer).length).toBe(1); // Using the Footer component
	});
});
