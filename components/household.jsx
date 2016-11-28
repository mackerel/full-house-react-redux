import { connect } from 'react-redux'

let handleSubmit = (e) => {
    let t = e.target
    console.log("Heard HOUSEHOLD: Address is " + t.address.value);
    e.preventDefault();
}

let Household = () => {
    return (
        <form onSubmit={this.handleSubmit}>
      <div class="row columns">
        <h2>
          Let's describe your humble abode.
        </h2>
      </div>
      <div class="row columns">
        <label></label>Street Address<input placeholder="123 Main Street" type="text" id="address"/>
      </div>
      <div class="row">
        <div class="medium-6 columns">
          <label>City<input placeholder="Sacramento" type="text" id="city"/></label>
        </div>
        <div class="medium-3 columns">
          <StatePicker />
        </div>
        <div class="medium-3 columns">
          <label>Zip<input placeholder="95834" type="text" id="zip"/></label>
        </div>
      </div>
      <div class="row columns">
        <label></label>How Many Bedrooms?<input type="number" value="2" id="number_of_bedrooms"/>
      </div>
      <div class="row columns text-center">
        <button class="button large" type="submit"><i class="fi-arrow-right"></i> Add People</button>
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

function mapStateToProps(household) {
    return {
        household
    }
}

export default connect(mapStateToProps)(Household)


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       household: {},
//       residents: [],
//       vehicles: []
//     };
//   }
//   handleHouseholdSubmit(e) {
//     let t = e.target
//     console.log("Heard HOUSEHOLD: Address is " + t.address.value);
//     // this.setState({household:{address:t.address.value}}
//     e.preventDefault();
//   }
//   render() {
//     return (
//       <div class="row columns">
//       <HeaderImg source='https://s3-us-west-2.amazonaws.com/s.cdpn.io/937012/full-house-logo.png'/>
//       <Household onSubmit={this.handleHouseholdSubmit}/>
//     </div>
//     )
//   }
// }
