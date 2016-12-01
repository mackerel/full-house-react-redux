import React from 'react'

require("../stylesheets/main.scss");

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})