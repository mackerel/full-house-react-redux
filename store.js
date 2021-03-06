import { compose, createStore, applyMiddleware } from 'redux';
import dataService from './services/dataService'
import { reducers } from './reducers'
import persistState from 'redux-localstorage'

const preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const enhancer = compose(
  applyMiddleware(dataService),
  persistState()
)

const store = createStore(reducers, preloadedState, enhancer )
export default store