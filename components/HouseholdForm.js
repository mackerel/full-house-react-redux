import React from 'react';
import StatePicker from './StatePicker'
import * as actions from '../actions'
import {Field,reduxForm} from 'redux-form';
import { browserHistory } from 'react-router'

class HouseholdForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.dispatch(actions.addHousehold(data));
        
        //Go to resident
        browserHistory.push("/resident");
    }

    render() {

        const {handleSubmit} = this.props;

        return (
            <div className="row columns">
            <h2>Let's describe your humble abode.</h2>
            
            <form onSubmit={handleSubmit(this.onSubmit)}>
                
                <div className="row columns">
                    <label>Street Address</label>
                    <Field name="address" component="input" type="text"/>
                </div>
                
                <div className="row">
                    <div className="medium-6 columns">
                        <label>City</label>
                        <Field name="city" component="input" type="text"/>
                    </div>
                    
                    <div className="medium-3 columns">
                        <label>State</label>
                        <StatePicker />
                    </div>
                    
                    <div className="medium-3 columns">
                        <label>Zip</label>
                        <Field name="zip" component="input" type="text"/>
                    </div>
                </div>
                
                <div className="row columns">
                    <label>How Many Bedrooms?</label>
                    <Field name="number_of_bedrooms" component="input" type="number"/>
                </div>
                
                <div className="row columns text-center">
                    <button type="submit" className="button large">
                        <i className="fi-arrow-right"></i> Save & Add People
                    </button>
                </div>
            </form>
        </div>
        );
    }
}

// Decorate the form component
export default reduxForm({
    form: 'add-household' // a unique name for this form
})(HouseholdForm);