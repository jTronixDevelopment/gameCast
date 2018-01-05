import React, { Component } from 'react';
import './statusBar.css';

class StatusBar extends Component {

  constructor(props){
    super();
    this.user = props.user;
    this.userName = '';
    this.cardWon = '';
    this.turn = '';
    this.junk = '';
  }

  componentDidMount(){
    // this.userName = this.user.userName;
    // this.cardWon = this.user.cardsEarned;
    // this.turn = this.user.turn;
    // this.junk = this.user.junk;
  }

  render() {
    return (
        <ul className="status-bar">
          <li className="sb-list">User : { this.userName } </li>
          <li className="sb-list">Cards Won :{ this.cardWon } </li>
          <li className="sb-list">It is { this.turn }</li>
          <li className="sb-list"> { this.junk }</li>
        </ul>
    );
  }
}

export default StatusBar;
