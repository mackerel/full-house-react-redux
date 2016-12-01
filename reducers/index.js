import * as constants from '../actions/constants'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const initialState = {household:{}, residents:[], vehicles:[]}

function household(state={}, action) {
    switch ( action.type ) {
        case constants.ADD_HOUSEHOLD:
            return action.household
        default:
            return state;      
    }
}

function residents(state = [], action) {
    switch (action.type) {
        case constants.ADD_RESIDENT:
            return [...state, action.resident]
        default:
            return state
    }
}

function vehicles(state=[], action) {
    return state;
}

export const reducers = combineReducers( {
    household,
    residents,
    vehicles,
    form: formReducer,
    routing:routerReducer
})