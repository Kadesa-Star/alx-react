import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';
import { AppContext } from '../App/AppContext'; // Import the AppContext

describe('<Footer />', () => {
  // Helper function to render Footer with context value
  const renderWithContext = (value) => {
    return shallow(
      <AppContext.Provider value={value}>
        <Footer />
      </AppContext.Provider>
    );
  };

  it('Tests that Footer renders without crashing', () => {
    const wrapper = renderWithContext({ user: { isLoggedIn: false } });
    expect(wrapper.exists()).toBe(true);
  });

  it('Contains the text "Copyright"', () => {
    const wrapper = renderWithContext({ user: { isLoggedIn: false } });
    expect(wrapper.text()).toContain('Copyright');
  });

  it('Does not display "Contact us" link when user is logged out', () => {
    const wrapper = renderWithContext({ user: { isLoggedIn: false } });
    expect(wrapper.text()).not.toContain('Contact us');
  });

  it('Displays "Contact us" link when user is logged in', () => {
    const wrapper = renderWithContext({ user: { isLoggedIn: true } });
    expect(wrapper.text()).toContain('Contact us');
  });
});
