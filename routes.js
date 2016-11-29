import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/App';  
import HouseholdForm from './components/HouseholdForm';

export default (  
  <Route path="/" component={App}>
    <IndexRoute component={HouseholdForm} />
    <Route path="/cats" component={HouseholdForm} />
  </Route>
);