import Immutable from 'immutable'
import * as constants from '../actions/constants'

export default (state = Immutable.Map({}), action) => {
    switch (action.type) {
        case constants.ADD_HOUSEHOLD:
            return Immutable.Map(action.household)
        default:
            return state
    }
}