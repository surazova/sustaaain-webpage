import React, { Component } from "react";

// imports from the NPM package: react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Link
}
from "react-router-dom";

// HashRouter componnet provides the foundation for the navigation and browser history handling that routing is made up of.
import Home from "./Home";
import About from "./About";
import Content from "./Content";

class Main extends Component {
  render() {
    return (
      <Router>
      <div>
        <h1>SUSTAAAIN.</h1>
        <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/content">Content</a></li>
        </ul>
        <div className="all">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" componet={About} />
          <Route exact path="/content" componet={Content} />
        
        </div>
      </div>
    </Router>
    )
  }
}

export default Main;
