'use strict'

import React, { PropTypes } from 'react'
import {Link} from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

const Homepage = (props) => {
  return (
    <Grid fluid={true}>
      <Row>
        <Col xs={12} sm={12} md={10} lg={10}>
          <h3>Notes</h3>
          <Row>
            {
              props.notes.map(note => (
                <Col
                  className="note"
                  key={ note.id }
                  xs={12} sm={6} md={4} lg={4}>
                  <h5>{note.title}</h5>
                  <h6>{note.tags}</h6>
                  <p>{note.message}</p>
                  <Link to={`/notes/${note.id}`}>Edit</Link>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </Grid>
  );
}

Homepage.propTypes = {
  notes: PropTypes.array.isRequired
}

export default Homepage
