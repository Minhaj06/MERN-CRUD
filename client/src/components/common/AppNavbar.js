import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function AppNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container className="container-sm">
          <Navbar.Brand className="fw-bold fs-3" href="#home">
            CRUD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5">
              <li className="nav-item ms-lg-4">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-lg-4">
                <NavLink className="nav-link" to="/create">
                  Create
                </NavLink>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
