import React from 'react';
import { connect } from 'react-redux'
import { Field } from 'redux-form';

const mapStateToProps = (state) => {
    return {
        residents: state.residents
    }
}

class ResidentVehiclePicker extends React.Component {
    render() {
       return (
      <Field name="resident_id" component="select">
        <option></option>
        
        {this.props.residents.map(function(resident, index){
          return <option key={index} value={resident.id}>{resident.first_name+ " "+resident.last_name}</option>;
        })}
      </Field>
    ) 
    }
}

export default connect(mapStateToProps)(ResidentVehiclePicker);