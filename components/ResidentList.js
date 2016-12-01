import React from 'react'

const ResidentList = ({ residents }) => (
  <div>
    <h5>Current Residents:</h5>
    <ul>
       {residents.map(function(resident, index){
       return <li key={index}>{resident.first_name}</li>;
       })}
    </ul>
  </div>
)

export default ResidentList