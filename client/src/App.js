import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
