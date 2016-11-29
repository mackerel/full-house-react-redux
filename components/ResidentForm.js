import { Control, Form } from 'react-redux-form';
import { connect } from 'react-redux';
import React from 'react';
import * as actions from '../actions'

let createHandlers = function(dispatch) {
  let onSubmit = function(data) {
    dispatch(actions.addResident(data))
  };

  return {
    onSubmit,
    // other handlers
  };
}


class ResidentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handlers = createHandlers(this.props.dispatch);
    }
  
    render() {
        return (
            <div className="row columns">
                <h2>Who lives here?</h2>
                
                <Form model="resident" onSubmit={(resident) => this.handlers.onSubmit(resident)}>
                    
                    <div className="row">
                        <div className="medium-6 columns">
                            <label>First Name</label>
                            <Control.text type="text" model="resident.first_name" />
                        </div>
                        <div className="medium-6 columns">
                            <label>Last Name</label>
                            <Control.text type="text" model="resident.last_name" />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="medium-6 columns">
                            <label>Age</label>
                            <Control.text type="number" model="resident.age" />
                        </div>
                        
                        <div className="medium-3 columns">
                            <label>Email</label>
                            <Control.text type="text" model="resident.email" />
                        </div>
                        
                        <div className="medium-3 columns">
                            <label>Gender</label>
                            <Control.radio type="radio" model="resident.gender" />  
                        </div>
                    </div>
                    
                    <div className="row columns text-center">
                        <button className="button large">
                            <i className="fi-arrow-right"></i> Add Vehicles
                        </button>
                    </div>
                </Form>
            </div>
        );
    }
}
export default connect()(ResidentForm);