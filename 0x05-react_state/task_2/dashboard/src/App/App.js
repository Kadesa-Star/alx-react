import React, { useState, useEffect, useContext } from 'react';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import propTypes from 'prop-types';
import { AppContext } from '../AppContext';  // Importing context

const primaryColor = '#E11D3F';

const bodyStyles = StyleSheet.create({
    App: {
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
    }
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
    }
});

const App = () => {
    const { user, logOut } = useContext(AppContext);  // Accessing context values
    const [displayDrawer, setDisplayDrawer] = useState(false);

    // handle keydown events for logout
    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.keyCode === 72 && e.ctrlKey) {
                alert('Logging you out');
                logOut();  // Call logout from context
            }
        };

        window.addEventListener('keydown', keyDownHandler);

        // Clean up event listener when component is unmounted
        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [logOut]);

    const handleDisplayDrawer = () => {
        setDisplayDrawer(true);
    };

    const handleHideDrawer = () => {
        setDisplayDrawer(false);
    };

    const listCourses = [
        { id: 1, name: 'ES6', credit: '60' },
        { id: 2, name: 'Webpack', credit: '20' },
        { id: 3, name: 'React', credit: '40' }
    ];

    const listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, html: { __html: getLatestNotification() }, type: "urgent" }
    ];

    return (
        <div className={css(bodyStyles.App)}>
            <Notifications
                listNotifications={listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={handleDisplayDrawer}
                handleHideDrawer={handleHideDrawer}
            />
            <Header />
            <div className="App-body">
                {user.isLoggedIn ? (
                    <BodySectionWithMarginBottom title="Course list">
                        <CourseList listCourses={listCourses} />
                    </BodySectionWithMarginBottom>
                ) : (
                    <BodySectionWithMarginBottom title="Login in to continue">
                        <Login />
                    </BodySectionWithMarginBottom>
                )}
                <BodySection title="News from the School"><p>Boring random text</p></BodySection>
            </div>
            <div className={css(footerStyles.Footer)}>
                <Footer />
            </div>
        </div>
    );
};

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => { console.log('logOut function console log for testing') }
};

App.propTypes = {
    isLoggedIn: propTypes.bool,
    logOut: propTypes.func,
};

export default App;

