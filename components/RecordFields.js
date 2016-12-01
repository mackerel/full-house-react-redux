import React, { PropTypes } from 'react'
import * as helpers from '../helpers'


const RecordFields = (record) => (
  <ul>
   {Object.keys(record).map((key, index) => {  
        return <li key={index}>{helpers.titleize(key)}: {record[key]}</li>;
    })}
  </ul>
)

export default RecordFields