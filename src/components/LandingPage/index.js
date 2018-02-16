// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

import Input from './../components/input';
import Button from './../components/button';
import Modal from './../components/modal';

import Icon from './../../imgs/Icon.png';

import io from 'socket.io-client';

import help from './helper.js';

let socket = io.connect(window.location.hostname + ":5000"); // Dev
 // var socket = io.connect(window.location.hostname);// Prod

export default class App extends Component {
  constructor(){
    super();
  }

  gameCodeValidator(){

  }

  createGameHandler(){
    if(this.allInputsValid()){
       // socket.emit("roomCode",{ roomCode : document.getElementById("roomCode").value })
       console.log('createGameHandler');
      socket.emit('createGame', { roomCode: document.getElementById("roomCode").value });
    } else {
      this.showModal();
    }
  }

  joinGameHandler(){
    // console.log('joinGameHandler() requesting roomcode: 'document.getElementById("roomCode").value);
    var rc = document.getElementById("roomCode").value;

    if(this.allInputsValid && help.isValidRoomCode(rc)){
      console.log(rc + ' validRoomCode');
      socket.emit('roomCode', {roomCode: rc});
    }
    else{
      this.showModal();
    }
    // if(this.allInputsValid()){
       // socket.emit("roomCode",{ roomCode : document.getElementById("roomCode").value })

    //   socket.emit('joinGame',{ roomCode : document.getElementById("roomCode").value });
    // } else {
    //   this.showModal();
    // }
  }



  allInputsValid(){
    var inputs = document.getElementsByTagName('input');
    inputs = Array.from(inputs).map((val)=>{return val.getAttribute('isValid')});
    for(var i = 0;i<inputs.length;i++){
      if(inputs[i] === 'false'){
        return false;
        break;
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
            <Input Id="roomCode" len="6" type="text" placeHolder="Enter Room Code"/>
            <h5 className="card-title">Nickname</h5>
            <Input Id="nickName" type='text' len="10" placeHolder="Enter Nickname ( 5-10 characters)"/>
            <Button text="Join Game" func={ this.joinGameHandler.bind(this) }/>
            <Button text="Start New Game" func={ this.createGameHandler.bind(this) }/>
          </div>
          <Modal id="test" msg="Invalid room code. Please Enter the correct room code." />
          <b>Powered By <a href="#">jTronix Developement</a></b>
        </div>
    );
  }
}
