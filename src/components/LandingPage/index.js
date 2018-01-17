// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

import Button from './../components/button';
import Icon from './../../imgs/Icon.png';
// import Add from './../../imgs/add.png';

import io from 'socket.io-client';

let socket = io.connect(window.location.hostname + ":5000"); // Dev
// var socket = io.connect(window.location.hostname);// Prod

export default class App extends Component {
  constructor(){
    super();
    this.test='none';
  }

  gameValidator(){
    var roomCode = document.getElementById("roomCode").value;
    switch (roomCode[0]) {
      case 'c' :
        break;
      default:

    }
  }

  buttonHandler(){
    if(document.getElementById('roomCode').value[0] === 'c'){
      console.log(`You Are playing Cards`);
    }

    socket.emit("test");
  }

  componentDidMount(){
    var card = document.getElementById('landingPageCard');
    card.style.top = '10%';
  }

  render() {
    return (
        <div id="landingPageCard" className="card">
          <div className="card-header text-center">
            <img alt="Icon" className='icon' src={ Icon }/>
          </div>
          <div className="card-body">
            <h5 className="lp-card-title">Enter Room Code</h5>
            <input id='roomCode' maxLength="5" placeholder="Enter 5 digit Room Code" className="full-width" onChange={this.gameValidator.bind(this)}/>
            <h5 className="card-title">Nickname</h5>
            <input type='text' maxLength="15" placeholder="Enter Nickname Limit 15 characters." className="full-width" />
            <Button text="Play Game" func={ this.buttonHandler.bind(this) }/>
          </div>
          <b>Powered By <a href="#">jTronix Developement</a></b>
        </div>
    );
  }
}
