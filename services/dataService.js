import request from 'superagent';
import * as constants from '../actions/constants'

const dataService = store => next => action => { 
  /*
  Pass all actions through by default
  */
  next(action)
  
  switch (action.type) {
    case constants.SUBMIT_DATA:
      console.log("dataService: Making POST request to add Household...");
      request
        .post('https://full-house-server-mackerel.c9users.io/households')
        .send({household:action.household})
        .set('Authorization', 'Basic bWlrZUBmdWxsc3RhY2tsYWJzLmNvOmZ1bGxzdGFjaw==')
        .set('Accept', 'application/json')  
        .end((err, res) => {
          if (err) {
            /*
            in case there is any error, dispatch an action containing the error
            */
            return next({
              type: constants.POST_HOUSEHOLD_ERROR,
              err
            });
          }
          const data = JSON.parse(res.text);
          /*
          Once data is received, dispatch an action telling the application
          that data was received successfully, along with the parsed data
          */
          console.log("dataService: Heard back from Household. Adding Residents");
          let household = JSON.parse(data.record);
          action.residents.map(res => {
            res.household_id = household.id;
            let req = generateReq("residents", res);
            console.log("Trying to send Resident to API. Req = "+req);
            req.end((err, res) => {
              if ( err ) {
                console.log("ERR! A resident barfed.");
              }
              const response = JSON.parse(res.text);
              const new_resident = JSON.parse(response.record);
              
              console.log("Got Reponse about Resident "+new_resident.id);
            });
          });
          
          
          next({
            type: constants.POST_HOUSEHOLD_RECEIVED,
            data
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
        .post('https://full-house-server-mackerel.c9users.io/'+endpointName)
        .send(jsonObj)
        .set('Authorization', 'Basic bWlrZUBmdWxsc3RhY2tsYWJzLmNvOmZ1bGxzdGFjaw==')
        .set('Accept', 'application/json')
}

export default dataService
