import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./Main";

// Call to render the Main component 
// React Router helps you choose which components to show and which to hide 
// Makes navigating look seamless
ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);
