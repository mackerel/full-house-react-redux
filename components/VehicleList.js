import React from 'react'
const VehicleList = ({ vehicles }) => (
  <div>
    <h5>Current Vehicles:</h5>
    <ul>
       {vehicles.map(function(vehicle, index){
       return <li key={index}>{vehicle.model}</li>;
       })}
    </ul>
  </div>
)

export default VehicleList