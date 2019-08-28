import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SimpleSwiper from "./SimpleSwiper";
class Guide extends Component {
  state = {
    userName: "",
    password: ""
  };
  inputUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };
  inputPassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  login = () => {
    // console.log(this);
    const { userName, password } = this.state;
    const re = /^[1]{6}$/;
    if (re.test(userName) && re.test(password)) {
      // console.log(111);
      this.props.history.push("./home");
    }
  };
  render() {
    const { userName, password } = this.state;
    return (
      <div>
        <SimpleSwiper
          userName={userName}
          passwor={password}
          inputUserName={this.inputUserName}
          inputPassword={this.inputPassword}
          login={this.login}
        />
      </div>
    );
  }
}
export default withRouter(Guide);
