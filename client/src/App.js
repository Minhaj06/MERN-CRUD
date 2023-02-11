import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/common/AppNavbar";
import ReadPage from "./pages/studentCRUD/ReadPage";
import CreatePage from "./pages/studentCRUD/CreatePage";
import UpdatePage from "./pages/studentCRUD/UpdatePage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<ReadPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/update" element={<UpdatePage />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
