import React, { PropTypes } from 'react'

const RecordFields = (record) => (
  <ul>
   {Object.keys(record).map((key, index) => {  
        return <li key={index}>{key}: {record[key]}</li>;
    })}
  </ul>
)

export default RecordFields