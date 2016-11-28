import * as constants from './constants'
export function addHousehold(household) {
    return {
        type: constants.ADD_HOUSEHOLD,
        household
    }
}