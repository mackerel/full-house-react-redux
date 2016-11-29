import { Control, Form } from 'react-redux-form';
import { connect } from 'react-redux';
import React from 'react';
import StatePicker from './StatePicker'
import * as actions from '../actions'

let createHandlers = function(dispatch) {
  let onSubmit = function(data) {
    dispatch(actions.addHousehold(data))
  };

  return {
    onSubmit,
    // other handlers
  };
}


class HouseholdForm extends React.Component {
    constructor(props) {
        super(props);
        this.handlers = createHandlers(this.props.dispatch);
    }
  
    render() {
        return (
            <div className="row columns">
                <h2>Let's describe your humble abode.</h2>
                
                <Form model="household" onSubmit={(household) => this.handlers.onSubmit(household)}>
                    
                    <div className="row columns">
                        <label>Street Address</label>
                        <Control.text type="text" model="household.address" />
                    </div>
                    
                    <div className="row">
                        <div className="medium-6 columns">
                            <label>City</label>
                            <Control.text type="text" model="household.city" />
                        </div>
                        
                        <div className="medium-3 columns">
                            <label>State</label>
                            <StatePicker />
                        </div>
                        
                        <div className="medium-3 columns">
                            <label>Zip</label>
                            <Control.text type="text" model="household.zip" />  
                        </div>
                    </div>
                    
                    <div className="row columns">
                        <label>How Many Bedrooms?</label>
                        <Control.text type="number" model="household.number_of_bedrooms" />
                    </div>
                    
                    <div className="row columns text-center">
                        <button className="button large">
                            <i className="fi-arrow-right"></i> Add People
                        </button>
                    </div>
                </Form>
            </div>
        );
    }
}
export default connect()(HouseholdForm);