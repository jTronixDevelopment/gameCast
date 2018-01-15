// src/components/App/index.js
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button className='btn btn-primary full-width' onClick={ ()=>{ this.props.func() }}>
        { this.props.text }
      </button>
    );
  }
}
