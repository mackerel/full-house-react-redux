import { connect } from 'react-redux';
import VehicleList from './VehicleList';

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehicles
    };
};

const ResidentListContainer = connect(mapStateToProps)(VehicleList);

export default ResidentListContainer;