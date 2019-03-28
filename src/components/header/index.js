import React from 'react'
import {Nav, NavItem, Navbar} from 'reactstrap'
import {Link} from 'react-router-dom'

const Header = () => (
  <Navbar color="light" light expand="md">
    <Link to="/" className="navbar-brand">Swapi</Link>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link to="/people" className="nav-link">People</Link>
      </NavItem>
      <NavItem>
        <Link to="/planets"  className="nav-link">Planets</Link>
      </NavItem>
      <NavItem>
        <Link to="/starships"  className="nav-link">Starships </Link>
      </NavItem>
      <NavItem>
        <Link to="/secret-page"  className="nav-link">Secret page </Link>
      </NavItem>
      <NavItem>
        <Link to="/login"  className="nav-link">Login </Link>
      </NavItem>
    </Nav>
  </Navbar>
)

export default Header
