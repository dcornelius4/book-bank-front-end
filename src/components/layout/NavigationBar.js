import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Book Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link >
              <Link to="/">
                Home
              </Link>
            </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>
              <Link to="/library">
                My Library
              </Link>
            </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>
              <Link to="/add">
                Add
              </Link>
            </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>
              <Link to="/littlefreelib">
                Little Free Library
              </Link>
            </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="https://littlefreelibrary.org/registration-process/">
                Register
            </Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
