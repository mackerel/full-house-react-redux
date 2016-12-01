import * as constants from './constants'
let nextVehicleID = 0;
let nextResidentID = 0;
export function addHousehold(household) {
    household.id = 0
    return {
        type: constants.ADD_HOUSEHOLD,
        household
    }
}

export function submitData(household, residents, vehicles) {
    return {
        type: constants.SUBMIT_DATA,
        household,
        residents,
        vehicles
    }
}

export function addResident(resident) {
    resident.id = nextResidentID++;
    return {
        type: constants.ADD_RESIDENT,
        resident
    }
}

export function addVehicle(vehicle) {
    vehicle.id = nextVehicleID++;
    return {
        type: constants.ADD_VEHICLE,
        vehicle
    }
}