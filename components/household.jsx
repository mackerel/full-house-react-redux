import {
    connect
} from 'react-redux'
import React from 'react'

function handleSubmit(e) {
    let t = e.target
    console.log("Heard HOUSEHOLD: Address is " + t.address.value);
    e.preventDefault();
}

function Household() {
    return (
        <form onSubmit={handleSubmit}>
          <div className="row columns">
            <h2>
              Let's describe your humble abode.
            </h2>
          </div>
          <div className="row columns">
            <label></label>Street Address<input placeholder="123 Main Street" type="text" id="address"/>
          </div>
          <div className="row">
            <div className="medium-6 columns">
              <label>City<input placeholder="Sacramento" type="text" id="city"/></label>
            </div>
            <div className="medium-3 columns">
              <StatePicker />
            </div>
            <div className="medium-3 columns">
              <label>Zip<input placeholder="95834" type="text" id="zip"/></label>
            </div>
          </div>
          <div className="row columns">
            <label></label>How Many Bedrooms?<input type="number" value="2" id="number_of_bedrooms"/>
          </div>
          <div className="row columns text-center">
            <button className="button large" type="submit"><i className="fi-arrow-right"></i> Add People</button>
          </div>
        </form>
    )
}

function StatePicker() {
    return (
        <label>State<select id="us_state">
      <option value="AL">
        Alabama
      </option>
      <option value="AK">
        Alaska
      </option>
      <option value="AZ">
        Arizona
      </option>
      <option value="AR">
        Arkansas
      </option>
      <option value="CA">
        California
      </option>
      <option value="CO">
        Colorado
      </option>
      <option value="CT">
        Connecticut
      </option>
      <option value="DE">
        Delaware
      </option>
      <option value="DC">
        District Of Columbia
      </option>
      <option value="FL">
        Florida
      </option>
      <option value="GA">
        Georgia
      </option>
      <option value="HI">
        Hawaii
      </option>
      <option value="ID">
        Idaho
      </option>
      <option value="IL">
        Illinois
      </option>
      <option value="IN">
        Indiana
      </option>
      <option value="IA">
        Iowa
      </option>
      <option value="KS">
        Kansas
      </option>
      <option value="KY">
        Kentucky
      </option>
      <option value="LA">
        Louisiana
      </option>
      <option value="ME">
        Maine
      </option>
      <option value="MD">
        Maryland
      </option>
      <option value="MA">
        Massachusetts
      </option>
      <option value="MI">
        Michigan
      </option>
      <option value="MN">
        Minnesota
      </option>
      <option value="MS">
        Mississippi
      </option>
      <option value="MO">
        Missouri
      </option>
      <option value="MT">
        Montana
      </option>
      <option value="NE">
        Nebraska
      </option>
      <option value="NV">
        Nevada
      </option>
      <option value="NH">
        New Hampshire
      </option>
      <option value="NJ">
        New Jersey
      </option>
      <option value="NM">
        New Mexico
      </option>
      <option value="NY">
        New York
      </option>
      <option value="NC">
        North Carolina
      </option>
      <option value="ND">
        North Dakota
      </option>
      <option value="OH">
        Ohio
      </option>
      <option value="OK">
        Oklahoma
      </option>
      <option value="OR">
        Oregon
      </option>
      <option value="PA">
        Pennsylvania
      </option>
      <option value="RI">
        Rhode Island
      </option>
      <option value="SC">
        South Carolina
      </option>
      <option value="SD">
        South Dakota
      </option>
      <option value="TN">
        Tennessee
      </option>
      <option value="TX">
        Texas
      </option>
      <option value="UT">
        Utah
      </option>
      <option value="VT">
        Vermont
      </option>
      <option value="VA">
        Virginia
      </option>
      <option value="WA">
        Washington
      </option>
      <option value="WV">
        West Virginia
      </option>
      <option value="WI">
        Wisconsin
      </option>
      <option value="WY">
        Wyoming
      </option>
      </select>
    </label>
    )
}

// Called each time the state updates. The result of this will be merged
// into the component's props
function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(Household)
