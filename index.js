import React from 'react'
let reactElement = document.getElementById('react')
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App'
import HouseholdForm from './components/HouseholdForm'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HouseholdForm}/>
      <Route path="/household" component={HouseholdForm}/>
    </Route>
  </Router>
), reactElement);