import React, { Component } from 'react'

class Input extends Component {
  render() {
    return(
      <div >
        <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        <input
            className='form-control'
            type='text'
            name={this.props.name}
            id={this.props.name}
            value={this.props.value}
            onChange={this.props.handleInput}/>
        <span className='alert-warning'>{this.props.error}</span>
      </div>
    )
  }
}

export default Input