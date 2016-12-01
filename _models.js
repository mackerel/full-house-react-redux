import {
  fk,
  many,
  Model,
  Schema
}
from 'redux-orm';
import * as constants from '../actions/constants'

///HOUSEHOLD.
export class Household extends Model {
  static reducer(state, action, Household) {
    switch (action.type) {
      case constants.ADD_HOUSEHOLD:
        Household.create(action.household);
        break;
      case constants.ADD_RESIDENT:
        Household.withId(action.household).residents.add(action.resident);
        break;
    }
  }
  toString() {
      return `Household: ${this.name}`;
    }
    // Declare any static or instance methods you need.
}
Household.modelName = 'Household';
Household.fields = {
  residents: many('Resident', 'household')
};

//RESIDENT
export class Resident extends Model {
  toString() {
      return `Resident: ${this.name}`;
    }
    // Declare any static or instance methods you need.
}
Resident.modelName = 'Resident';
Resident.fields = {
  vehicles: many('Vehicle', 'resident'),
  household: fk('Household', 'residents')
};

///VEHICLE.
export class Vehicle extends Model {
  toString() {
      return `Vehicle: ${this.name}`;
    }
    // Declare any static or instance methods you need.
}
Vehicle.modelName = 'Vehicle';
Vehicle.fields = {
  residents: fk('Resident', 'vehicles')
};


export const schema = new Schema();
schema.register(Household, Resident, Vehicle);

export default schema;
