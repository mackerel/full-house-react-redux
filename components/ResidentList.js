import React from 'react'

const ResidentList = ({ residents }) => (
  <div>
    <h5>Residents</h5>
    <ul>
       {residents.map(function(resident){
       return <li>{resident.first_name}</li>;
       })}
    </ul>
  </div>
)

export default ResidentList