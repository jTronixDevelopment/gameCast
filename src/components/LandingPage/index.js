// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

import Button from './../components/button';
import Icon from './../../imgs/Icon.png';
import Add from './../../imgs/add.png';


export default class App extends Component {
  constructor(){
    super();
    this.test='none'
  }

  buttonHandler(){
    console.log("Working");
  }

  componentDidMount(){
    var card = document.getElementById('landingPageCard');
    card.style.top = '10%';
  }

  render() {
    return (
        <div id="landingPageCard" className="card">
          <div className="card-header text-center">
            <img className='icon' src={ Icon }/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Enter Room Code</h5>
            <input maxLength="5" placeholder="Enter 5 Digit Room Code" className="full-width" />
            <h5 className="card-title">Nickname</h5>
            <input type='text' maxLength="15" placeholder="Enter Nickname Limit 15 characters." className="full-width" />
            <Button text="Play Game" func={ this.buttonHandler.bind(this) }/>
          </div>
          <b>Powered By <a href="http://ryanjohnson-engineer.com/">jTronix Developement</a></b>
        </div>
    );
  }
}
