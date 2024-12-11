import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { displayNotificationDrawer, hideNotificationDrawer } from '../../actions/uiActions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listNotifications: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, html: { __html: getLatestNotification() }, type: "urgent" }
            ]
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyDownHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDownHandler);
    }

    keyDownHandler = (e) => {
        if (e.keyCode === 72 && e.ctrlKey) {
            alert('Logging you out');
            this.props.logOut();
        }
    };

    markNotificationAsRead = (id) => {
        const listNotifications = this.state.listNotifications.filter(
            notification => notification.id !== id
        );
        this.setState({ listNotifications });
    };

    render() {
        const { displayDrawer, isLoggedIn, displayNotificationDrawer, hideNotificationDrawer } = this.props;
        const listCourses = [
            { id: 1, name: 'ES6', credit: '60' },
            { id: 2, name: 'Webpack', credit: '20' },
            { id: 3, name: 'React', credit: '40' }
        ];

        return (
            <div className={css(bodyStyles.App)}>
                <Notifications
                    listNotifications={this.state.listNotifications}
                    displayDrawer={displayDrawer}
                    handleDisplayDrawer={displayNotificationDrawer} // Now handled via Redux
                    handleHideDrawer={hideNotificationDrawer} // Now handled via Redux
                    markNotificationAsRead={this.markNotificationAsRead}
                />
                <Header />
                <div className="App-body">
                    {isLoggedIn
                        ? <BodySectionWithMarginBottom title="Course list">
                            <CourseList listCourses={listCourses} />
                          </BodySectionWithMarginBottom>
                        : <BodySectionWithMarginBottom title="Login in to continue">
                            <Login logIn={this.logIn} />
                          </BodySectionWithMarginBottom>
                    }
                    <BodySection title="News from the School">
                        <p>Boring random text</p>
                    </BodySection>
                </div>
                <div className={css(footerStyles.Footer)}>
                    <Footer />
                </div>
            </div>
        );
    }
}

// Define propTypes for the component
App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    displayDrawer: PropTypes.bool.isRequired,
    displayNotificationDrawer: PropTypes.func.isRequired,
    hideNotificationDrawer: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
};

// Define defaultProps for the component
App.defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    logOut: () => {} // Default noop function for logOut
};

// mapStateToProps function
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.ui.isLoggedIn,
        displayDrawer: state.ui.isNotificationDrawerVisible
    };
};

// mapDispatchToProps function (simplified version)
const mapDispatchToProps = {
    displayNotificationDrawer,
    hideNotificationDrawer
};

// Connect App to Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);

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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderTop: `3px solid ${primaryColor}`,
        padding: '1rem',
        fontStyle: 'italic',
    }
});
