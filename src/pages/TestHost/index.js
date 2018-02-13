// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

export default class Test extends Component {
  constructor(){
    super();
    this.s3ImgSRC = 'https://s3-us-west-1.amazonaws.com/couchcastmedia/game1/'
  }


  render() {
    return (
      <div className='test-host'>
        <h1 style={{ textAlign:'center' }} >Host Test</h1>
        <img alt="" src={ this.s3ImgSRC + 'Icon.png' }/>
      </div>
    );
  }
}
