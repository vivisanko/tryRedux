import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUser } from "./actions/userActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input onChange={this.onUpdateUser} />
          <div>{this.props.user}</div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  };
};

const mapActionsToProps = (dispatch, props) => {
  console.log("props", props);
  return bindActionCreators({ onUpdateUser: updateUser }, dispatch);
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return Object.assign({}, propsFromState, propsFromDispatch, ownProps);
// };

// console.log("mergeProps", mergeProps());

export default connect(
  mapStateToProps,
  mapActionsToProps
  // mergeProps
)(App);
