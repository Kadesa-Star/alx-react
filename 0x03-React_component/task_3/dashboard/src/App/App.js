import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import "./App.css";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { getLatestNotification } from "../utils/utils";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handlePress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handlePress);
  }

  handlePress(event) {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    return (
      <>
        <Notifications listNotifications={listNotifications} />

        <div className="App">
          <Header />
        </div>

        {/* Wrap CourseList with BodySectionWithMarginBottom */}
        <BodySectionWithMarginBottom>
          <CourseList listCourses={listCourses} title="Course list" />
        </BodySectionWithMarginBottom>

        {/* Wrap Login with BodySectionWithMarginBottom */}
        <BodySectionWithMarginBottom>
          <Login title="Log in to continue" />
        </BodySectionWithMarginBottom>

        {/* Add News from the School block */}
        <BodySection title="News from the School">
          <p>
            Welcome to our school! We have a variety of exciting events lined
            up for this semester. Stay tuned for more updates!
          </p>
        </BodySection>

        <div className="App-footer">
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
