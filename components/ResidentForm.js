import React, { Component } from 'react';
import * as actions from '../actions'
import { Field, reduxForm, reset } from 'redux-form';
import { browserHistory } from 'react-router'
import ResidentListContainer from './ResidentListContainer'

class ResidentForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.dispatch(actions.addResident(data));
        this.props.dispatch(reset('add-resident')); //clears form
    }

    render() {

        const {handleSubmit} = this.props;
        return (
            <div className="row columns">
                <h2>Who lives here?</h2>
                
                <div className="row">
                    <div className="medium-9 columns">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <div className="row">
                                <div className="medium-6 columns">
                                    <label>First Name</label>
                                    <Field name="first_name" component="input" type="text"/>
                                </div>
                                <div className="medium-6 columns">
                                    <label>Last Name</label>
                                    <Field name="last_name" component="input" type="text"/>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="medium-7 columns">
                                    <label>Email</label>
                                    <Field name="email" component="input" type="text"/>
                                </div>
                                
                                <div className="medium-2 columns">
                                    <label>Age</label>
                                    <Field name="age" component="input" type="number"/>
                                </div>
                                
                                <div className="medium-3 columns">
                                    <label>Gender</label>
                                    <Field name="gender" component="select">
                                        <option></option>
                                        <option value="m">Male</option>
                                        <option value="f">Female</option>
                                    </Field>
                                </div>
                            </div>
                            <div className="row columns text-center">
                                <button type="submit" className="button secondary">
                                    <i className="fi-plus"></i> Save & Add Another Resident
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="medium-3 columns">
                        <ResidentListContainer />
                    
                        <button className="button large">
                            <i className="fi-right-arrow"></i> Go to Vehicles
                        </button>
                    </div>
                
                </div>
            </div>
        );
    }
}
// Decorate the form component
// Decorate the form component
export default reduxForm({
    form: 'add-resident' // a unique name for this form
})(ResidentForm);