import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
}
from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Content from "./Content";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>SUSTAAAIN.</h1>
        <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Content">Content</a></li>
        </ul>
        <div className="all">
        
        </div>
      </div>
    )
  }
}

export default Main;
