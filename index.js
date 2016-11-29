import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './components/App'
import HouseholdForm from './components/HouseholdForm'
import ResidentForm from './components/ResidentForm'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)
const reactElement = document.getElementById('react')

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HouseholdForm}/>
        <Route path="/household" component={HouseholdForm}/>
        <Route path="/resident" component={ResidentForm}/>
      </Route>
    </Router>
  </Provider>
), reactElement);