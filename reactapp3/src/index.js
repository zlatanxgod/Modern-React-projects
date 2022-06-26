import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Hello</div>;
// };

class App extends React.Component {
  state = { lat: null, errmsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      // we did not
      //this.state.lat = position.coords.latitude
      (err) => this.setState({ errmsg: err.message })
    );
  }

  renderContent() {
    if (this.state.errmsg && !this.state.lat)
      return <div>Error : {this.state.errmsg}</div>;
    else if (!this.state.errmsg && this.state.lat)
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    else return <Spinner />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
