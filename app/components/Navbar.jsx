'use strict'
import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavDropdown, MenuItem, FormGroup, FormControl, bsStyle, Glyphicon } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default () => {
  return (
    <div className="nav-bar">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">Memoranda</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown noCaret eventKey={3} title={<Glyphicon glyph="icon-ellipsis-vertical" />} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Color</MenuItem>
              <MenuItem eventKey={3.1}>Font</MenuItem>
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
