
import React, { Component } from 'react';
import './style.css';

import Logo from './../../../imgs/Icon.png'

import Round1 from './round1/index';
import Round2 from './round2/index';
import Round3 from './round3/index';
import FinalRound from './finalround/index';

export default class App extends Component {
  static defaultProps={
  }
  state = { currentRound: <Round1/> }

  componentDidMount(){

    setTimeout(()=>{
      this.setState({ currentRound: <Round2/> })
    },3000)
  }

  componentWillMount(){
  }

  render() {
    return (
        <div className="meme-it-container">
          <img className='background-logo' src={ Logo }/>
          { this.state.currentRound }
        </div>
    );
  }
}
