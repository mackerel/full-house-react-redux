import React from 'react'
import { connect } from 'react-redux'
import RecordFields from './RecordFields'
import * as actions from '../actions'

const mapStateToProps = (state) => state

class Summary extends React.Component {
  render() {
    const { household, residents, vehicles, dispatch } = this.props;
    const onClick = (e) => {
      dispatch(actions.submitData(household, residents, vehicles));
    };
    
    return (
      <div className="row columns">
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
        {
          this.props.vehicles.map((vehicle) => {
            return <RecordFields key={vehicle.id} {...vehicle} />;
          })
        }
        
        <div className="row columns text-center">
          <button className="button large info" onClick={onClick}>
            Send It!
          </button>
        </div>
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(Summary);