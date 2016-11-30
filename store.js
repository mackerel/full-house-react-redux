import { createStore, applyMiddleware } from 'redux';
import dataService from './services/dataService'
import { reducers } from './reducers'
const preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, preloadedState, applyMiddleware(dataService))
export default store