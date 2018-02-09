
import React, { Component } from 'react';
import './style.css';

export default class App extends Component {

  constructor(){
    super();
    this.currentRound = "test"
  }

  componentDidMount(){
  }

  gameCodeValidator(){
  }

  allInputsValid(){
  }

  render() {
    return (
        <div className="meme-it-container">
          { this.currentRound }
        </div>
    );
  }
}
