import Immutable from 'immutable'
import * as constants from './constants'

export default (state = Immutable.Object({}), action) => {
    switch (action.type) {
        case constants.ADD_HOUSEHOLD:
            return new Immutable.Object(action.household)
        default:
            return state
    }
}