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
            <Form model="household" onSubmit={(household) => this.handlers.onSubmit(household)}>
                <label>Street Address</label>
                <Control.text model="household.address" />

                <label>Zip</label>
                <Control.text model="household.zip" />
                
                <label>State</label>
                <StatePicker />
    
                <button className="button large">
                    Save and Add People
                </button>
            </Form>
        );
    }
}
export default connect()(HouseholdForm);