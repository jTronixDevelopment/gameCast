import React, { Component } from 'react';
import StatusBar from './../modules/statusbar/statusBar.js';
import Card from './../modules/cardModule/cardModule.js';
import './pickingView.css';


// White Card and Black Card will be absracted out later

class PickingView extends Component {

  //============================================================================
  //=== Setup ==================================================================
  //============================================================================

  constructor(props){
    super(props);
    this.cardArray = [];
    this.usersSubmitted = [];
    this.setUpSocketEventHandlers();
  }

  componentDidMount(){
    this.props.user.cardsRecived = [];
    this.setState({ user : this.props.user , cardArray : this.props.user.cardsRecived });
    this.props.updateUser(this.props.user);
  }

  componentWillMount(){
    this.setState({ user : this.props.user , cardArray : this.props.user.cardsRecived });
    this.props.updateUser(this.props.user)
  }

  setUpSocketEventHandlers(){
    //=== Socket Events ========================================================
    this.props.user.socket.on("userSentCard", msg =>{
      this.props.user.cardsRecived.push(<Card card = { msg } user = { this.props.user }/>);
      this.setState({ cardArray : this.props.user.cardsRecived })
      console.log('msg')
    })
    //=== User is sent card to pick from =======================================

  }

  //============================================================================
  //=== Data Manipulation ======================================================
  //============================================================================

  randomizeCards(){

  }

  //============================================================================
  //=== Setup ==================================================================
  //============================================================================

  render() {
    return (
      <div >
        <StatusBar/>

        <div id="whiteCard" className="white-card-container white-card">
          <h4 id="whiteCardLabel">{ this.props.user.deck.whiteCard }</h4>
        </div>

        <div className='cards-to-choose'>
          {
            this.state.cardArray
          }
        </div>

      </div>
    );
  }
}

export default PickingView;
