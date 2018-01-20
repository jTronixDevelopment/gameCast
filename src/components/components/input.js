// src/components/App/index.js
import React, { Component } from 'react';
// This class checks if inputs are validator
// This allso sets a attribute isValid to true or false that can be used
export default class Input extends Component {

  constructor(){
    super();
    this.state = {state:"state"}
  }

  componentDidMount(){
    this.state = { input : document.getElementById(this.props.Id) };
    this.state.input.addEventListener('keyup',this.checkForInputType());
    this.state.input.setAttribute("isValid",false);
  }

  checkForInputType(){
    switch (this.props.type) {
      case 'text':
        return this.textValidator.bind(this);
      case 'number':
        return this.numberValidator.bind(this);
      default:
        break;
    }
  }

  numberValidator(){
    var reg = RegExp('^[0-9]+$');
    if(reg.test(this.state.input.value)){
      this.state.input.style.border = "1px solid black";
      this.state.input.setAttribute("isValid",true);
    } else{
      this.state.input.style.border = "2px solid red";
      this.state.input.setAttribute("isValid",false);
    }
  }

  textValidator(){
    var reg = RegExp('^[a-z]+$');
    if(reg.test(this.state.input.value)){
      this.state.input.style.border = "1px solid black";
      this.state.input.setAttribute("isValid",true);
    } else{
      this.state.input.style.border = "2px solid red";
      this.state.input.setAttribute("isValid",false);
    }
  }

  render() {
    return (
      <input maxLength = { this.props.len } placeholder = { this.props.placeHolder } id={ this.props.Id } type={ this.props.type } className="full-width"/>
    );
  }
}
