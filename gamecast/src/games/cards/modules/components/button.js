import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className="btn" onClick={ this.props.fn } >{ this.props.label }</button>
    );
  }
}

export default Button;
