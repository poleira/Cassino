import { BrowserRouter } from "react-router-dom";
import { Component } from "react";
import * as React from "react";
import "./App.css";
import { hot } from "react-hot-loader/root";
import RouteManager from "./RouterManager";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RouteManager />
      </BrowserRouter>
    );
  }
}

export default hot(App);
