import request from 'superagent';
import * as constants from '../actions/constants';

const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action);

  switch (action.type) {
    case constants.SUBMIT_DATA:
      //ADD HOUSEHOLD
      console.log("dataService: Making POST request to add Household...");
      generateReq("households", {
          household: action.household
        })
        .end((err, res) => {
          if (err) {
            return next({
              type: constants.POST_HOUSEHOLD_ERROR,
              err
            });
          }
          const data = JSON.parse(res.text);

          //ADD RESIDENTS
          console.log("dataService: Heard back from Household. Adding Residents");
          const household = JSON.parse(data.record);
          action.residents.map(res => {
            res.household_id = household.id;
            let cur_resident_id = res.id.toString();

            let req = generateReq("residents", res);
            req.end((err, res) => {
              if (err) {
                console.log("ERR! A resident barfed.");
              }
              const response = JSON.parse(res.text);
              const new_resident = JSON.parse(response.record);
              console.log("Got Reponse about Resident " + new_resident.id);

              //ADD VEHICLES FOR EACH RESIDENT
              let resident_vehicles = action.vehicles.filter(vehicle => {
                console.log("resident_id = "+vehicle.resident_id+", cur_resident_id = "+cur_resident_id);
                return vehicle.resident_id ? vehicle.resident_id.toString() == cur_resident_id.toString() : false;
              });
              console.log(" found " + resident_vehicles.length + " vehicles for resident " + cur_resident_id + " out of " + action.vehicles.length);
              
              resident_vehicles.map(resident_vehicle => {

                //Set our resident id and write it.
                let vehicle = Object.assign({}, resident_vehicle, {resident_id:new_resident.id});
                generateReq("vehicles", vehicle).end((err, res) => {
                  if (err) {
                    console.log("ERR! A vehicle barfed: " + err);
                  }
                  const response = JSON.parse(res.text);
                  const new_vehicle = JSON.parse(response.record);
                  console.log("Got Reponse about Vehicle " + new_vehicle.id);
                });
              });
            });
          });

          next({
            type: constants.POST_HOUSEHOLD_RECEIVED,
            household
          })
        })
      break
      /*
      Do nothing if the action does not interest us
      */
    default:
      break
  }
};

const generateReq = (endpointName, jsonObj) => {
  return request
    .post('https://full-house-server-mackerel.c9users.io/' + endpointName)
    .send(jsonObj)
    .set('Authorization', 'Basic bWlrZUBmdWxsc3RhY2tsYWJzLmNvOmZ1bGxzdGFjaw==')
    .set('Accept', 'application/json')
}

export default dataService
