import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

const App = ({ isLoggedIn }) => {
    return (
        <>
            <Notifications />
            <Header />
            <div className="App-body">
                {isLoggedIn ? <CourseList /> : <Login />}
            </div>
            <div className="App-footer">
                <Footer />
            </div>
        </>
    );
};

App.defaultProps = {
    isLoggedIn: false,
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};

export default App;
