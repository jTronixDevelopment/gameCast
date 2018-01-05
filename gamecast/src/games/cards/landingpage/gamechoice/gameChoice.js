import React, { Component } from 'react';
import Button from "./../../modules/components/button.js";

export default class GameChoice extends Component {
  render() {
    return (
        <div>
          <Button label="Join Game" fn = { this.props.setJoinGameComponent.bind(this) }/>
          <Button label="New Game" fn = { this.props.setStartGameComponent.bind(this) }/>
        </div>
    );
  }
}
