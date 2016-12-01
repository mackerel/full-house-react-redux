import React from 'react'
import { connect } from 'react-redux'
import RecordFields from './RecordFields'

const mapStateToProps = (state) => state

class Summary extends React.Component {
  render() {
    const { household } = this.props
    let rows = [];
    return (
      <div>
        <h1>Your Humble Abode:</h1>
        
        <h3>A Solid Foundation</h3>
        <ul>
          {
            Object.keys(household).map((key, index) => {  
              return <li key={index}>{key}: {household[key]}</li>;
            })
          }
        </ul>
        
        <h3>Warm Bodies</h3>
        {
          this.props.residents.map((resident) => {
            return <RecordFields key={resident.id} {...resident} />;
          })
        }
        
        <h3>Cold Steel</h3>
        { this.props.vehicles.map((vehicle) => {
            return <RecordFields key={vehicle.id} {...vehicle} />;
        })}
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(Summary);