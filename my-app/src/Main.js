import React, { Component } from "react";

// imports from the NPM package: react-router-dom
import {
  Route,
  NavLink,
  HashRouter
}
from "react-router-dom";

// HashRouter componnet provides the foundation for the navigation and browser history handling that routing is made up of.
import Home from "./Home";
import About from "./About";
import Content from "./Content";

class Main extends Component {
  render() {
    return (
      <HashRouter>
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
    </HashRouter>
    )
  }
}

export default Main;
