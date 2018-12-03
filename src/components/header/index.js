import React from 'react'
import {NavbarBrand, Nav, NavItem, NavLink, Navbar} from 'reactstrap'

const Header = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Swapi</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="#1">People</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#0">Planets</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#starshops">Starsips </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
)

export default Header
