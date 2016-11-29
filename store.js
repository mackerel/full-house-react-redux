import { createStore, combineReducers, applyMiddleware } from 'redux';
import dataService from './services/dataService'
import { routerReducer } from 'react-router-redux'
import fullHouseApp from './reducers'
import { reducer as formReducer } from 'redux-form'

const preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = {
    fullHouseApp,
    form: formReducer,
    routing:routerReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer, preloadedState, applyMiddleware(dataService))
export default store