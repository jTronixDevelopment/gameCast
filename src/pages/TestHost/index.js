// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

export default class Test extends Component {
  constructor(){
    super();
  }

  buttonHandler(){
    this.socket.emit(document.getElementById("emit").value)
  }

  selectHandler(){
    this.socket =io.connect('http://localhost:5000/' + document.getElementById('nsp').value);
  }

  render() {
    return (
      <div className='test-host'>
        Testing
      </div>
    );
  }
}
