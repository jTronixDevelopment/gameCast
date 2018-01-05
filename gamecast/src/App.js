import React, {  } from 'react';
import io from 'socket.io-client';

import './App.css';

import SubmitView from './games/cards/submitview/submitView';
import PickingView from './games/cards/pickingview/pickingView';
import LandingPage from './games/cards/landingpage/landingPage'
import User from './games/cards/User';

let socket = io.connect('http://localhost:4000');

// =============================================================================
// === Main View ===============================================================
// =============================================================================

class App extends Component {
  constructor(){
    super()
    this.user = new User(socket)
    this.view = <LandingPage user = { this.user }/>
  }

  updateUser(user) {
    this.setState({user : user});
  }

  componentWillMount() {
    this.setState({
      user: this.user,
      view: this.view
    })
  }

  setUI(){
    if(this.state.user.isPicking){
      this.setState({ view : <PickingView user = { this.state.user } updateUser = { this.updateUser.bind(this)}/>});
    }else{
      this.setState({ view : <SubmitView user = { this.state.user } updateUser = { this.updateUser.bind(this)}/> });
    }
  }

  componentDidMount(){
    this.user.socket.on('gameHasStarted',(msg)=>{
      this.setUI();
    })
    this.user.socket.on('isPicking',()=>{
      this.user.isPicking = true;
      this.setUI();
    })
    this.user.socket.on("cardPicked",(msg)=>{
      console.log("the user picked", msg)
    })
  }

  render() {
    return (
      <div>
        {
          this.state.view
        }
      </div>
    );
  }
}

export default App;
