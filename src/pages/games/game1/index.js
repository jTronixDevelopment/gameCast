
import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  static defaultProps={
    currentRound:"default"
  }

  componentDidMount(){
  }

  componentWillMount(){

  }

  render() {
    return (
        <div className="meme-it-container">
          { this.props.currentRound }
        </div>
    );
  }
}
