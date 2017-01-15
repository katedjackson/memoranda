'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'

import Navbar from './Navbar'

export default (props) => {
  return (
    <div id="main" className="container-fluid">
      <div>
        <Navbar />
      </div>
      <div>
        {
          props.children && React.cloneElement(props.children, props)
        }
      </div>
    </div>
  )
}

