
import React, { Component } from 'react';
import './style.css';

import MemeJumbo from './memejumbo/index';
import TestImg from './memejumbo/testImg.jpg';

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
          <MemeJumbo img={ TestImg }/>
        </div>
    );
  }
}
