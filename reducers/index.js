import * as constants from '../actions/constants'

const initialState = {household:{}, residents:[], vehicles:[]}

const fullHouseApp = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_RESIDENT:
            //Add a resident to the residents array
            return Object.assign({}, state, {
                residents: [...state.residents, action.resident]
            })
        case constants.ADD_HOUSEHOLD:
            return Object.assign({}, state, {household:action.household});
        default:
            return state
    }
}

export default fullHouseApp;