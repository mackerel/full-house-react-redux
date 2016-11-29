import request from 'superagent';
import * as actions from '../actions'
import * as constants from '../actions/constants'

const dataService = store => next => action => { 
  /*
  Pass all actions through by default
  */
  next(action)
  
  switch (action.type) {
    case constants.ADD_HOUSEHOLD:
      console.log("dataService: Making POST request to add Household...");
      request
        .post('https://full-house-server-mackerel.c9users.io/households')
        .send(action.household)
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
            })
          }
          const data = JSON.parse(res.text)
          /*
          Once data is received, dispatch an action telling the application
          that data was received successfully, along with the parsed data
          */
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

export default dataService
