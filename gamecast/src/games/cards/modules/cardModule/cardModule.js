import React, { Component } from 'react';
import './cardComponent.css';
class cardModule extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  componentWillMount(){
  }

  chooseCard(){
    console.log(`This card is ${this.props.card.card} , from user ${this.props.card.userName}`)
    this.props.user.socket.emit("pickedCard",this.props.card)
  }

  render() {
    return (
      <div className = "card-module" onClick={ this.chooseCard.bind(this) }>
          <h6 className="card-text"> { this.props.card.card } </h6>
      </div>
    );
  }
}

export default cardModule;
