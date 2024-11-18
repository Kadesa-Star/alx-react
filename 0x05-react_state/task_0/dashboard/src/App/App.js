import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import PropTypes from 'prop-types';

// Shared primary color for styling
const primaryColor = '#E11D3F';

// Aphrodite styles
const bodyStyles = StyleSheet.create({
  App: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },
});

const footerStyles = StyleSheet.create({
  Footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `3px solid ${primaryColor}`,
    padding: '1rem',
    fontStyle: 'italic',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
  }

  // Add event listener when component mounts
  componentDidMount() {
    window.addEventListener('keydown', this.keyDownHandler);
  }

  // Remove event listener when component unmounts
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownHandler);
  }

  // Detect Ctrl + H key combination
  keyDownHandler = (e) => {
    if (e.key === 'h' && e.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  // Toggle notification drawer visibility
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  render() {
    // Destructure props and state
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;

    // Define course and notification lists
    const listCourses = [
      { id: 1, name: 'ES6', credit: '60' },
      { id: 2, name: 'Webpack', credit: '20' },
      { id: 3, name: 'React', credit: '40' },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
    ];

    return (
      <div className={css(bodyStyles.App)}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <Header />
        <div className="App-body">
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Graduation date is January 28th!</p>
          </BodySection>
        </div>
        <div className={css(footerStyles.Footer)}>
          <Footer />
        </div>
      </div>
    );
  }
}

// Default props
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => console.warn('Default logOut function invoked'),
};

// Prop types
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;

