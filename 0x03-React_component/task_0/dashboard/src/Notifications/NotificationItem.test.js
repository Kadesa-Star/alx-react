import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	});

	it('Renders correctly with type and value props', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
		expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
	});

	it('Renders correctly with html prop', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
		expect(wrapper.find('li').children().html()).toBe('dangerouslySetInnerHtml');  // Ensure it's inside the li
	});

	it('Applies correct class based on notification type', () => {
		const wrapper = shallow(<NotificationItem type="urgent" value="Urgent Notification" />);
		expect(wrapper.find('li').hasClass('urgent')).toBe(true);  // Assuming you have a CSS class for urgent notifications
	});

	it('Logs a warning for incorrect prop types', () => {
		const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
		shallow(<NotificationItem type={123} />);  // Invalid type
		expect(spy).toHaveBeenCalled();
		spy.mockRestore();
	});
});
