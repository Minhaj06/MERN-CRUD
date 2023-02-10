import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
