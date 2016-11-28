import { createStore, applyMiddleware } from 'redux';
import { combineForms } from 'react-redux-form';
import dataService from './services/dataService'

const initialHousehold = { address:"", zip:"", us_state:"" };
const reducer = combineForms({
  household: initialHousehold,
})
const preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, preloadedState, applyMiddleware(dataService));
export default store;