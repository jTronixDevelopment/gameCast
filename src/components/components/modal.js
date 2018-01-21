// src/components/App/index.js
import React, { Component } from 'react';

import Button from './button';

export default class Modal extends Component {

  constructor(props){
    super(props);
    this.defaultStyle = {
      zIndex : 10,
      position:'fixed',
      width: '80vw',
      left:'10vw'
    }
    this.modal={
      height:'100vh',
      width : '100vw',
      position:'absolute',
      top:'0',
      background:'rgba(105,105,105,0.5)',
      visibility:'hidden',
    }
  }

  dismissModal(){
    var modal = document.getElementById(this.props.id);
    modal.style.visibility = 'hidden';
  }

  centerModal(){
    var modal = document.getElementById(this.props.id+"Modal");
    modal.style.top = ((window.innerHeight - modal.offsetHeight)/2) + "px";
  }

  componentDidMount(){
    this.centerModal();
  }

  render() {
    return (
      <div id={ this.props.id } style ={ this.modal } >
        <div style={ this.defaultStyle } className="card" id={this.props.id + "Modal"}>
          <div className="card-body center-text">
              { this.props.msg }
              <br/>
            <button className="btn btn-primary" onClick={ this.dismissModal.bind(this) }>Close</button>
          </div>
        </div>
      </div>
    );
  }
}
