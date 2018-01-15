// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

//components
import Button from './../components/button';

// Classes
import io from 'socket.io-client';


export default class Test extends Component {
  constructor(){
    super();
    this.socket = io.connect('http://localhost:4000/game1');
  }

  buttonHandler(){
    this.socket.emit(document.getElementById("emit").value)
  }
  
  selectHandler(){
    this.socket.nsp = "/" + document.getElementById('nsp').value;
  }

  render() {
    return (
      <div className="form-group">
        <label  for="sel1">Select Name Space:</label>
        <select id='nsp' className="form-control" onChange={ this.selectHandler.bind(this)}>
          <option value='game1'>Game 1</option>
          <option value='game2'>Game 2</option>
          <option value='game3'>Game 3</option>
        </select>
        <label for='emit'>Emit - </label>
        <input id='emit' name='emit' type='text'/>
        <Button text="Submit" func = { this.buttonHandler.bind(this) }/>
      </div>
    );
  }
}
