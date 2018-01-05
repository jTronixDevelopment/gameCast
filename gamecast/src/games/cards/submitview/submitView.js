import React, { Component } from 'react';
import Swipe from 'react-swipe-component';
import StatusBar from './../modules/statusbar/statusBar.js';
import './submitView.css';

class SubmitView extends Component {

  //============================================================================
  //=== Setup ==================================================================
  //============================================================================

  constructor(props){
    super(props);
    this.state = props;
    this.props = props;
    this.onSwipeLeft = this.swipeLeftCard.bind(this);
    this.onSwipeRight = this.swipeRightCard.bind(this);
    this.onSwipeUp = this.submitCardButton.bind(this);
    this.deck = this.props.user.deck;
    this.user = this.props.user;
    this.socket = this.user.socket;
    this.user.initGame();
    this.setUpSocketListners();
  }

  setUpSocketListners(){
    this.socket.on("newDeck", msg =>{
      this.deck.fillHand(msg);
      this.props.updateUser(this.user);
      this.setState({user : this.user})
    });
    this.socket.on("newWhiteCard", msg => {
      this.deck.whiteCard = msg;
      this.props.updateUser(this.user);
      this.setState({user : this.user})
    });
    this.socket.on("youArePicking",(msg)=>{
      this.isPicking = true;
      this.props.updateUser(this.user)
      this.setState({user : this.user})
    });
  }

  //============================================================================
  //=== Setup ==================================================================
  //============================================================================

  removeClass(event){
    let target = event.target;
    if(target.className.includes("right")){
      this.deck.getNextCard();
    } else if(target.className.includes("left")){
      this.deck.getPreviousCard();
    } else if(target.className.includes("up")){
      this.state.user.sendCardToPlayer();
    }
    target.className = "black-card-container black-card";
    this.props.updateUser(this.user);
    this.setState({user : this.user})
  }

  swipeRightCard(){
    var card = document.getElementById("blackCard");
    card.className += " card-right-transition";
    card.addEventListener("animationend", this.removeClass.bind(this) , false);
  }

  submitCardButton(){
    var card = document.getElementById("blackCard");
    card.className += " on-swipe-up";
    card.addEventListener("animationend", this.removeClass.bind(this) , false);
  }

  swipeLeftCard() {
    var card = document.getElementById("blackCard");
    card.className += " card-left-transition ";
    card.addEventListener("animationend", this.removeClass.bind(this) , false);
  }

  componentDidMount(){
    this.setState({user: this.user})
    this.props.updateUser(this.state.user);
  }

  //============================================================================
  //=== Game Actions ===========================================================
  //============================================================================



  //============================================================================
  //=== Setup ==================================================================
  //============================================================================

  render() {
    return (
      <div >
        <StatusBar user = {this.state.user}/>

        <div id="whiteCard" className="white-card-container white-card">
          <h6 id="whiteCardLabel">{ this.state.user.deck.whiteCard }</h6>
        </div>

        <Swipe onSwipedLeft={ this.onSwipeLeft } onSwipedRight={ this.onSwipeRight }>
          <div id="blackCard" className="black-card-container black-card">
            <h3 id="blackCardLabel">{ this.state.user.deck.currentBlackCard }</h3>
            <img alt='none' id="logo" className="logo" src={ require("./../imgs/cardsLogo.png") }></img>
          </div>
        </Swipe>

        <div className="bottom-control bottom">
          <button onClick={ this.onSwipeUp }>Submitss Card</button>
        </div>
      </div>
    );
  }
}

export default SubmitView;
