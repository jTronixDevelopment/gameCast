
import React, { Component } from 'react';
import './style.css';

import Input from './../../../components/input';
import Button from './../../../components/button';
import Modal from './../../../components/modal';

import io from 'socket.io-client';


let socket = io.connect(window.location.hostname + ":5000"); // Dev
// var socket = io.connect(window.location.hostname);// Prod

export default class App extends Component {

  componentDidMount(){
  }

  gameCodeValidator(){
  }

  allInputsValid(){
  }

  render() {
    return (
        <div className="meme-it-container">
          
        </div>
    );
  }
}
