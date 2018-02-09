// src/components/App/index.js
import React, { Component } from 'react';
// This class checks if inputs are validator
// This allso sets a attribute isValid to true or false that can be used

// This needs to be changed

export default class Input extends Component {

  constructor(){
    super();
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

  //============================================================================
  //=== Number Validation ======================================================
  //============================================================================

  numberValidator(){
    var reg = this.numberOnly();
    if(reg.test(this.state.input.value)){
      this.state.input.style.border = "1px solid black";
      this.state.input.setAttribute("isValid",true);
    } else{
      this.state.input.style.border = "2px solid red";
      this.state.input.setAttribute("isValid",false);
    }
  }

  numberOnly(){
    return RegExp('[0-9]');
  }

  //============================================================================
  //=== Text Validation ========================================================
  //============================================================================

  textValidator(){
    var reg = this.upperLowerCase(); //RegExp('/^[a-z\d\-_\s]+$/i');
    if(reg.test(this.state.input.value)){
      this.state.input.style.border = "1px solid black";
      this.state.input.setAttribute("isValid",true);
    } else{
      this.state.input.style.border = "2px solid red";
      this.state.input.setAttribute("isValid",false);
    }
  }

  getSubType(){
    switch (this.props.subType) {
      case 'upperLower':
        return this.upperLowerCase();
      case 'lower':
        return this.lowerCaseOnly();
      case 'upper':
        return this.upperCaseOnly();
      case 'alphaNumericSpace':
        return this.alphaNumericAndSpace();
      default:
        return this.alphaNumericAndSpace();
    }
  }

  lowerCaseOnly(){
    return RegExp('^[a-z]+$');
  }

  upperCaseOnly(){
    return RegExp('[A-Z]+$');
  }

  upperLowerCase(){
    return RegExp('[a-zA-Z]+$');
  }

  alphaNumericAndSpace(){
    return RegExp('/^[a-zd-_s]+$/i');
  }

  render() {
    return (
      <input maxLength={ this.props.len } placeholder={ this.props.placeHolder } id={ this.props.Id } type={ this.props.type } className="full-width"/>
    );
  }
}
