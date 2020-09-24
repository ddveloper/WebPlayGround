import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// a class inherient
class App extends React.Component {
  // Javascript class constructor
  // constructor(props) {
  //   super(props);

  //   // this is only time direct assign, others need to call 'setState()'
  //   this.state = { lat: null, errMsg: "" };
  // }

  state = { lat: null, errMsg: "" }; // this line = the constructor logic above

  // load user data in this function
  componentDidMount() {
    // console.log("component mounted");

    // below is a functional component
    window.navigator.geolocation.getCurrentPosition(
      // below call backs will not run immediately
      // they will run after this App created
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => {
        // console.log(err);
        this.setState({ errMsg: err.message });
      }
    );
  }

  // to handle things after each render() refresh
  componentDidUpdate() {
    // console.log("component updated");
  }

  renderContent() {
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>;
    }

    if (!this.state.errMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  // have to override render for React.Component
  // render() will be called quite frequently
  // this function is for returning JSX only
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }

  // to clean up
  componentWillUnmount() {
    // console.log("component to be destroyed");
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
