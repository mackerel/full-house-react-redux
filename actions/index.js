import * as constants from './constants'
export function addHousehold(household) {
    return {
        type: constants.ADD_HOUSEHOLD,
        household
    }
}

export function addResident(resident) {
    return {
        type: constants.ADD_RESIDENT,
        resident
    }
}