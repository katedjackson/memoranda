'use strict'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import axios from 'axios';

import store from './store'

import App from './components/App'
import Home from './components/Homepage'
import NoteForm from './components/NoteForm'

export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/newnote" component={NoteForm}/>
          <Route path="/:id" component={NoteForm}/>
        </Route>
      </Router>
    </Provider>
  )
}
