import React from 'react'

require("../stylesheets/main.scss");

export default React.createClass({
  render() {
    return (
      <div>
        <div className="text-center">
           <img id="header" src="../assets/full-house-logo.png"/>
        </div>
        
        {this.props.children}
      </div>
    )
  }
})