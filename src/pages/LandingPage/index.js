// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

import Input from './../../components/input/index';
import Button from './../../components/button';
import Modal from './../../components/modal';

import Icon from './../../imgs/Icon.png';

import io from 'socket.io-client';


let socket = io.connect(window.location.hostname + ":5000"); // Dev
// var socket = io.connect(window.location.hostname);// Prod

export default class App extends Component {

  componentDidMount(){
    socket.on('changeNSP',(msg)=>{
      console.log(msg);
      socket = io.connect(window.location.hostname + ':5000/' + msg);
    })
    socket.on('err',(err)=>{
      throw err;
    })
  }

  gameCodeValidator(){
    var roomCode = document.getElementById("roomCode").value;
    switch (roomCode[0]) {
      case 'x' :
        break;
      case 'y' :
        break;
      case 'z' :
        break;
      default:
        break;
    }
  }

  startGameHandler(){
    if(this.allInputsValid()){
      socket.emit("roomCode",{ roomCode : document.getElementById("roomCode").value })
    } else {
      this.showModal();
    }
  }

  allInputsValid(){
    var inputs = document.getElementsByTagName('input');
    inputs = Array.from(inputs).map((val)=>{return val.getAttribute('isValid')});
    for(var i = 0;i<inputs.length;i++){
      if(inputs[i] === 'false'){
        return false;
      }
    }
    return true;
  }

  showModal(){
    var modal = document.getElementById('test');
    modal.style.visibility = 'visible';
  }

  render() {
    return (
        <div id="landingPageCard" className="card">
          <div className="card-header text-center">
            <img alt="Icon" className='icon' src={ Icon }/>
          </div>
          <div className="card-body">
            <h5 className="lp-card-title">Enter Room Code</h5>
            <Input Id="roomCode" len="5" type="text" placeHolder="Enter Room Code"/>
            <h5 className="card-title">Nickname</h5>
            <Input Id="nickName" type='text' len="10" placeHolder="Enter Nickname ( 5-10 characters)"/>
            <Button text="Play Game" func={ this.startGameHandler.bind(this) }/>
          </div>
          <Modal id="test" msg="Invalid room code. Please Enter the correct room code." />
          <b>Powered By <a href="#">jTronix Developement</a></b>
        </div>
    );
  }
}