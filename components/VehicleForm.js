import React from 'react';
import * as actions from '../actions'
import { Field, reduxForm, reset } from 'redux-form';
import VehicleListContainer from './VehicleListContainer'

class VehicleForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.dispatch(actions.addVehicle(data));
        this.props.dispatch(reset('add-vehicle')); //clears form
    }

    render() {

        const {handleSubmit} = this.props;
        return (
            <div className="row columns">
                <h2>What's in the garage?</h2>
                
                <div className="row">
                    <div className="medium-9 columns">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <div className="row">
                                <div className="medium-3 columns">
                                    <label>Make</label>
                                    <Field name="make" component="input" type="text"/>
                                </div>
                                <div className="medium-3 columns">
                                    <label>Model</label>
                                    <Field name="model" component="input" type="text"/>
                                </div>
                                <div className="medium-3 columns">
                                    <label>Year</label>
                                    <Field name="year" component="input" type="text"/>
                                </div>
                                <div className="medium-3 columns">
                                    <label>Plate #</label>
                                    <Field name="license_plate" component="input" type="text"/>
                                </div>
                            </div>
                            
                            <div className="row columns text-center">
                                <button type="submit" className="button secondary">
                                    <i className="fi-plus"></i> Save & Add Another Vehicle
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="medium-3 columns">
                        <VehicleListContainer />
                    
                        <button className="button large">
                            <i className="fi-right-arrow"></i> Go to Summary
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
    form: 'add-vehicle' // a unique name for this form
})(VehicleForm);