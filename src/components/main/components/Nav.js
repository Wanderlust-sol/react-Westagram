import React, { Component } from "react";
import logo from "./logo_text.png";
import "../Main.css";
import "./css/Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav_header">
        <div className="nav_header-box">
          <div className="nav_left">
            <div className="nav_left-imglogo">
              <img
                className="imglogo"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              />
            </div>
            <div className="nav_left-line"></div>
            <div className="nav_left-textlogo">
              <img className="textlogo" src={logo} />
            </div>
          </div>
          <div className="search-bar">
            <input
              className="search-bar_place"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="nav_right">
            <div className="nav_right-icon">
              <img
                className="nav_right-icons explore"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
            </div>
            <div className="nav_right-icon">
              <img
                className="nav_right-icons heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </div>
            <div className="nav_right-icon">
              <img
                className="nav_right-icons profile"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
