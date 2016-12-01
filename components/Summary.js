import React from 'react'
import { connect } from 'react-redux'
import RecordFields from './RecordFields'
import * as actions from '../actions'
import { browserHistory } from 'react-router';
import * as helpers from '../helpers'

const mapStateToProps = (state) => state

class Summary extends React.Component {
  render() {
    const { household, residents, vehicles, dispatch } = this.props;
    const onClick = (e) => {
      dispatch(actions.submitData(household, residents, vehicles));
    };
    
    return (
      <div className="row columns">
        <h1>Home Sweet Home :</h1>
        
        <div className="callout success">
          <h3>A Solid Foundation</h3>
          <ul>
            {
              Object.keys(household).map((key, index) => {  
                return <li key={index}>{helpers.titleize(key)}: {household[key]}</li>;
              })
            }
          </ul>
        </div>
        
        <div className="callout secondary">
        <h3>Warm Bodies</h3>
        {
          this.props.residents.map((resident) => {
            return <RecordFields key={resident.id} {...resident} />;
          })
        }
        </div>
        
        <div className="callout primary">
        <h3>Cold Steel</h3>
        {
          this.props.vehicles.map((vehicle) => {
            return <RecordFields key={vehicle.id} {...vehicle} />;
          })
        }
        </div>
        
        <div className="row text-center">
          <div className="small-12 columns" id="summaryButtons">
          
            <button className="button large alert" onClick={(e) => {browserHistory.push('/')}}>
              <i className="fi-arrow-left"></i> Start Over
            </button>
            
            <button className="button large info" onClick={onClick}>
              <i className="fi-upload-cloud"></i> Looks Good, Make It So!
            </button>
          
          </div>
        </div>
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(Summary);