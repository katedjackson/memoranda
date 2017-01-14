'use strict'
import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavDropdown, MenuItem, FormGroup, FormControl, bsStyle, Glyphicon } from 'react-bootstrap'
import { bootstrapUtils } from 'react-bootstrap/lib/utils'
import {LinkContainer} from 'react-router-bootstrap'

export default () => {
  return (
    <div className="nav-bar">
      <div className="black-bar">
        <p>Made in the USA - Sweatshop Free</p>
      </div>
      <Navbar>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown noCaret eventKey={3} title="Account /&nbsp;" id="basic-nav-dropdown" className="navbar-login">
              <LinkContainer to={'/account/login'}><MenuItem eventKey={3.1}>Login</MenuItem></LinkContainer>
              <LinkContainer to={'/account/login'}><MenuItem eventKey={3.1}><Link to={'/account/login'}>Sign Up</Link></MenuItem></LinkContainer>
              <MenuItem eventKey={3.1}>Order Status</MenuItem>
              <MenuItem eventKey={3.1}>Wishlist</MenuItem>
            </NavDropdown>
            <NavDropdown noCaret eventKey={3} title={<Glyphicon glyph="shopping-cart" />} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Your Cart is empty.</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">Animal Apparel<sup>®</sup></IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Women/" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
            <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Men/" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
            <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Kids/" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
            <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Cats/" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
            <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Dogs/" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
            <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Sale" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/*<Navbar className="search">
        <Nav pullRight>
          <Navbar.Text>Search</Navbar.Text>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Style# or Keyword" />
            </FormGroup>
            {' '}
          </Navbar.Form>
        </Nav>
      </Navbar>*/}
    </div>
  )
}
