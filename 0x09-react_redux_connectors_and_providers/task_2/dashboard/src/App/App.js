import React, { Component } from 'react';
import { connect } from 'react-redux'; // Import connect
import { loginRequest } from '../actions'; // Import the action creator
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDrawer: false,
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
        const { displayDrawer, listNotifications, login } = this.props; // Get login from props
        const listCourses = [
            { id: 1, name: 'ES6', credit: '60' },
            { id: 2, name: 'Webpack', credit: '20' },
            { id: 3, name: 'React', credit: '40' }
        ];

        return (
            <div className="App">
                <Notifications
                    listNotifications={listNotifications}
                    displayDrawer={displayDrawer}
                    markNotificationAsRead={this.markNotificationAsRead}
                />
                <Header />
                <div className="App-body">
                    {this.props.isLoggedIn
                        ? <BodySectionWithMarginBottom title="Course list">
                            <CourseList listCourses={listCourses} />
                          </BodySectionWithMarginBottom>
                        : <BodySectionWithMarginBottom title="Login in to continue">
                            <Login logIn={login} /> {/* Use login from props */}
                          </BodySectionWithMarginBottom>
                    }
                    <BodySection title="News from the School">
                        <p>Boring random text</p>
                    </BodySection>
                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

// mapStateToProps function
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.ui.isLoggedIn,
        listNotifications: state.notifications.listNotifications,
        displayDrawer: state.ui.isNotificationDrawerVisible,
    };
};

// mapDispatchToProps function
const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(loginRequest()), // Map loginRequest to login prop
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
