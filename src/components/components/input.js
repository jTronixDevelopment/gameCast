// src/components/App/index.js
import React, { Component } from 'react';
// This class checks if inputs are validator
// This allso sets a attribute isValid to true or false that can be used
export default class Input extends Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {state:"state"}
  }

  componentDidMount(){
    var validator = this.checkForInputType();
    this.state = { input : document.getElementById(this.props.Id) };
    console.log("test",this.state)
    this.state.input.addEventListener('keyup',validator)
  }

  componentWillMount(){

  }

  checkForInputType(){
    var validator;
    switch (this.props.type) {
      case 'text':
        return this.textValidator.bind(this);
      case 'number':
        return this.numberValidator.bind(this);
        break;
      default:
        console.log('Not valid input');
        break;
    }
  }

  numberValidator(){
    var reg = RegExp('^[0-9]+$');
    if(!reg.test(this.state.input.value)){
      this.state.input.style.border = "2px solid red";
      this.state.input.setAttribute("isValid",false);
    } else{
      this.state.input.style.border = "1px solid black";
      this.state.input.setAttribute("isValid",true);
    }
  }

  textValidator(){
    var reg = RegExp('^[a-z]+$');
    if(!reg.test(this.state.input.value)){
      this.state.input.style.border = "2px solid red";
      this.state.input.setAttribute("isValid",false);
    } else{
      this.state.input.style.border = "1px solid black";
      this.state.input.setAttribute("isValid",true);
    }
  }

  render() {
    return (
      <input maxLength = { this.props.len } placeholder = { this.props.placeHolder } id={ this.props.Id } type={ this.props.type } className="full-width"/>
    );
  }
}
