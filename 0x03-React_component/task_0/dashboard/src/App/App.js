import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

// Define the course list and notifications list outside the component for better readability
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3,
    html: {
      __html: getLatestNotification(),
    },
    type: "urgent",
  },
];

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">
        <Notifications listNotifications={listNotifications} />
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

// Set default props for isLoggedIn
App.defaultProps = {
  isLoggedIn: false,
};

// Define prop types for better type checking
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
