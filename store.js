import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineForms } from 'react-redux-form';
import dataService from './services/dataService'
import { routerReducer } from 'react-router-redux'

const initialHousehold = { address:"", zip:"", us_state:"", city:"", number_of_bedrooms: 1 };
const initialResident = { first_name:"", last_name:"", gender:"", age:0, email:"" }

const reducer = combineForms({
  household: initialHousehold,
  resident: initialResident
})
const preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(combineReducers({form_objs:reducer, routing: routerReducer}), preloadedState, applyMiddleware(dataService));
export default store;