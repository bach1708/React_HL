import React, { Component } from 'react'

export default class NvbClassComp extends Component {
  render() {
    return (
      <div className='alert alert-success'>
        <h3>Class components demo</h3>
        <h4>
            welcome to, {this.props.fullName}
        </h4>
        <p>company: {this.props.company}</p>
      </div>
    )
  }
}
