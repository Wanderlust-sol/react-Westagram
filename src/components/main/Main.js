import React, { Component } from "react";
import Nav from "./components/Nav";
import Feed from "./components/Feed";
import MainRight from "./components/MainRight";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <main>
          <div className="mainpage">
            <Feed />
            <MainRight />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
