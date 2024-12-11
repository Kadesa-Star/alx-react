import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer'; // Assuming the stateless component now accepts props

describe('<Footer />', () => {

  it('Tests that Footer renders without crashing', () => {
    const wrapper = shallow(
      <Footer user={{ isLoggedIn: false }} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('Contains the text "Copyright"', () => {
    const wrapper = shallow(
      <Footer user={{ isLoggedIn: false }} />
    );
    expect(wrapper.text()).toContain('Copyright');
  });

  it('Does not display "Contact us" link when user is logged out', () => {
    const wrapper = shallow(
      <Footer user={{ isLoggedIn: false }} />
    );
    expect(wrapper.text()).not.toContain('Contact us');
  });

  it('Displays "Contact us" link when user is logged in', () => {
    const wrapper = shallow(
      <Footer user={{ isLoggedIn: true }} />
    );
    expect(wrapper.text()).toContain('Contact us');
  });
});

