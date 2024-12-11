import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header'; // Assuming the stateless Header component now accepts props

describe('<Header />', () => {

  it('Tests that Header renders without crashing', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false, email: '' }} logOut={jest.fn()} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that the component renders <img> and <h1> tags', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false, email: '' }} logOut={jest.fn()} />);
    expect(wrapper.exists('img')).toBe(true);
    expect(wrapper.exists('h1')).toBe(true);
  });

  it('Tests that the component displays login message when not logged in', () => {
    const wrapper = shallow(
      <Header user={{ isLoggedIn: false, email: '' }} logOut={jest.fn()} />
    );
    expect(wrapper.text()).toContain('School dashboard');
    expect(wrapper.text()).not.toContain('Welcome');
  });

  it('Tests that the component displays logout message when logged in', () => {
    const wrapper = shallow(
      <Header user={{ isLoggedIn: true, email: 'user@example.com' }} logOut={jest.fn()} />
    );
    expect(wrapper.text()).toContain('Welcome user@example.com');
    expect(wrapper.text()).toContain('(logout)');
  });

  it('Tests that clicking logout calls logOut function', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(
      <Header user={{ isLoggedIn: true, email: 'user@example.com' }} logOut={logOutMock} />
    );

    // Simulate the logout click
    wrapper.find('a').simulate('click', { preventDefault: () => {} });
    expect(logOutMock).toHaveBeenCalled();
  });
});
