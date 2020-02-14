import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import logo from "./logo_text.png";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pwd: ""
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e);
  };

  handleClick = () => {
    if (this.state.id === "taesol" && this.state.pwd === "1234") {
      alert("Login success");
      this.props.history.push("/main");
    } else {
      alert("This is wrong. Type agian. Please");
    }
  };

  render() {
    return (
      <div>
        <div className="login">
          <div className="logo_image">
            <img src={logo} width="178px" height="55px" />
          </div>
          <div className="login_main">
            <input
              type="text"
              className="input_id"
              placeholder="Phone number, username or email"
              onChange={this.handleChange}
              value={this.state.id}
              name="id"
            />
            <input
              type="password"
              className="input_password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.pwd}
              name="pwd"
            />

            <button
              className="login-btn"
              onClick={this.handleClick}
              style={{
                backgroundColor:
                  this.state.id !== "" && this.state.pwd !== ""
                    ? "#3798F0"
                    : "#c6dffa"
              }}
            >
              Log in
            </button>
          </div>
          <span className="forgotpassword">Forgot password?</span>
        </div>
        <div className="signup">
          <span>Don't have an account?</span>
          <span className="signup_btn">Sign up</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
