// src/components/App/index.js
import React, { Component } from 'react';

import Button from './button';

export default class Modal extends Component {

  constructor(props){
    super(props);
    this.defaultStyle = {
      zIndex : 10,
      position:'relative',
      top: "50%",
      width: '80vw',
      left:'10vw'
    }
    this.modal={
      height:'100vh',
      width : '100vw',
      position:'absolute',
      top:'0',
      background:'rgba(105,105,105,0.5)',
      visibility:'hidden'
    }
  }

  dismissModal(){
    var modal = document.getElementById(this.props.id);
    modal.style.visibility = 'hidden';
  }

  render() {
    return (
      <div id={ this.props.id } style ={ this.modal } >
        <div style={ this.defaultStyle } className="card">
          <div className="card-body">
            Please Enter the correct info
            <button className="btn btn-primary" text="Close" onClick={ this.dismissModal.bind(this) }>Close</button>
          </div>
        </div>
      </div>
    );
  }
}
