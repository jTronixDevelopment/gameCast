// src/components/App/index.js
import React, { Component } from 'react';

export default class Button extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    swith(this.props.type){
      case 1:
        this.props.titleEl = <h1></h1>
      break;
    }
  }

  render() {
    return (
      { this.state.titleEl }
    );
  }
}
