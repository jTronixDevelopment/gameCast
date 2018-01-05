import React, { Component } from 'react';
import GameChoice from './gamechoice/gameChoice.js';
import UserName  from './gamechoice/userName.js';
import Button from './../modules/components/button.js';

import './landingPage.css';

/*
  Landing Page contains:
    -
*/

export default class LandingPage extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.setGameChoice();
  }

  componentDidMount(){
    this.setState({user : this.props.user });
  }

  //============================================================================
  //=== Start New Game =========================================================
  //============================================================================

  setGameChoice(){
    this.setState({ view : <GameChoice setJoinGameComponent = { this.setJoinGameComponent.bind(this)} setStartGameComponent = {this.setStartGameComponent.bind(this)} user = { this.props.user }/> })
  }

  //============================================================================
  //=== Start New Game =========================================================
  //============================================================================

  startGameComponent(){
    return (
      <div>
        <Button label = "Back" fn = { this.setGameChoice.bind(this) }/>
        <UserName/>
        <h4>Your Room Code is</h4>
        <h6>{ this.state.user.roomCode }</h6>
        <button label = "Everyone has started" fn = { this.initGame.bind(this) }/>
      </div>
    )
  }

  setStartGameComponent(){
    this.props.user.startNewGame(); // send event to server
    this.startGameEvents(); // initialize event listners to hand start game event
  }

  startGameEvents(){
    this.props.user.socket.on('newRoomCode',(msg)=>{
      this.props.user.roomCode = msg.roomCode; // recieve roomCode from server
      this.setState( { view : this.startGameComponent() , user: this.props.user } );
    })
  }

  //============================================================================
  //=== JoinGame Game =========================================================
  //============================================================================

  joinGameComponent(){
    return (
      <div>
        <Button fn={ this.setGameChoice.bind(this) } label="Back" />
        <UserName/>
        <input id='joinGameRoomCode' placeholder="Enter Room Code" className="landing-page-roomcode-input" type="text"/>
        <Button fn = { this.joinGameInit.bind(this) } label="Join Room"/>
      </div>
    )
  }

  setJoinGameComponent(){
    this.setState({ view : this.joinGameComponent() });
  }

  joinGameInit(){
    if( this.userNameIsSet()&&this.roomCodeIsSet()){
      this.props.user.joinGame(this.getRoomCodeVal());
    } else {
      if(!this.userNameIsSet()){
        alert("Set Username First You Fucking Idiot");
      }
      if(!this.roomCodeIsSet()){
        alert("Set Room First You Fucking Idiot");
      }
    }
  }

  //============================================================================
  //=== Begin Game =========================================================
  //============================================================================

  initGame(){
    this.setUserName();
    this.props.user.socket.emit('getGameCode');//,this.state.user.roomCode);
    this.props.user.socket.emit('startGame', { roomCode : this.state.user.roomCode });
  }

  userNameIsSet(){
    return this.props.userName !== '';
  }

  roomCodeIsSet(){
    var rC = document.getElementById("joinGameRoomCode").value;
    if(rC !== ""){
      return true;
    } else {
      return false;
    }
  }

  setUserName(){
    var uN = document.getElementById('userNameInput').value;
    if (uN !== "") {
      this.props.user.userName = uN
      this.setState({user : this.props.user});
    } else {
      console.log("NULL VALUE");
      document.getElementById('userNameInput').style.border = "1px solid red";
    }
  }

  setRoomCode(){
    this.props.user.roomCode = document.getElementById("joinGameRoomCode").value;
    this.setState({user : this.props.user })
  }

  getRoomCodeVal(){
    return document.getElementById('joinGameRoomCode').value;
  }

  render() {
    return (
      <div className="landing-page-main-content">
        <div className="landing-page-pop-up text-center container">
          <h1>Cards Against Hummanity</h1>
          <br/>
          {
            this.state.view
          }
        </div>
      </div>
    );
  }
}
