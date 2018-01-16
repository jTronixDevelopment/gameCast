// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

//components
import Button from './../components/button';
import io from 'socket.io-client';

export default class Test extends Component {
  constructor(){
    super();
    this.socket = io.connect('http://localhost:5000/game1');
    console.log(this.socket)
  }

  buttonHandler(){
    console.log()
    this.socket.emit(document.getElementById("emit").value)
  }

  selectHandler(){
    console.log(document.getElementById('nsp').value)
    this.socket =io.connect('http://localhost:5000/' + document.getElementById('nsp').value);
    console.log(this.socket);
  }

  render() {
    return (
      <div className="form-group">
        <select id='nsp' className="form-control" onChange={ this.selectHandler.bind(this)}>
          <option value='game1'>Game 1</option>
          <option value='game2'>Game 2</option>
          <option value='game3'>Game 3</option>
        </select>
        <label data-reactid='emit'>Emit - </label>
        <input id='emit' name='emit' type='text'/>
        <Button text="Submit" func={ this.buttonHandler.bind(this) }/>
      </div>
    );
  }
}
