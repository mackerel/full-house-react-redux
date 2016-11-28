import { Control, Form } from 'react-redux-form';
import React from 'react';
import StatePicker from './StatePicker'

class HouseholdForm extends React.Component {
    
     handleSubmit(household) {
        //TODO: Let's move to the next area. ...react-router?
        
        //FIRST...send this to the API.
     }

    render() {
        return (
            <Form model="household" onSubmit={(household) => this.handleSubmit(household)}>
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
export default HouseholdForm;