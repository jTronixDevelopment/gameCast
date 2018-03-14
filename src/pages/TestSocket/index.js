// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

//components
import Button from './../../components/button';
import io from 'socket.io-client';

function msg(parameters){
  //auto
  this.origin = "client";
  this.originSocket = "XXXXXX"
  this.roomCode = "XXXXXX";
  //filled in
  this.endPoint = "server";
  this.event = "test";
  this.msg = { test : "Test" };
  this.toAll = false;
  this.socket = "none";
}

export default class Test extends Component {
  constructor(){
    super();
    this.socket = io.connect('http://localhost:5000/game1');
    this.sendTo = "server"
  }

  buttonHandler(){
    this.socket.emit(document.getElementById("emit").value)
  }

  selectHandler(){
    this.socket =io.connect('http://localhost:5000/' + document.getElementById('nsp').value);
  }

  selectSender(){
    console.log('changing')
    this.sendTo = document.getElementById('sendTo').value;
  }
  onSnedMsg(){
    this.socket.emit('msgRec',new msg())
  }



  render() {
    return (
      <div className="form-group">
        <h1>Testing</h1>
        <br/>
        <br/>
        <h4>Emit Message in certain room</h4>
        <select id='nsp' className="form-control" onChange={ this.selectHandler.bind(this)}>
          <option value='game1'>Game 1</option>
          <option value='game2'>Game 2</option>
          <option value='game3'>Game 3</option>
        </select>
        <br/>
        <label data-reactid='emit'>Emit - </label>
        <input id='emit' name='emit' type='text'/>
        <br/>
        <Button text="Submit" func={ this.buttonHandler.bind(this) }/>
        <br/>
        <br/>
        <h4>Send MSG Object to X</h4>
        <select id='sendTo' className="form-control" onChange={ this.selectSender.bind(this)}>
          <option value='server'>Server</option>
          <option value='client'>Client</option>
          <option value='tv'>TV</option>
        </select>
        <Button id='sendMSG' text="Submit" func={ this.onSnedMsg.bind(this) }/>
      </div>
    );
  }
}
