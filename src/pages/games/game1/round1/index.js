
import React, { Component } from 'react';
import './style.css';

import Message from './../../../../classes/message';

import {
  Container, Button, Form, FormGroup, Label,
  Input, FormFeedback, FormText ,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';


export default class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    modal: false
  };

  this.toggle = this.toggle.bind(this);
}

toggle() {
  this.setState({
    modal: !this.state.modal
  });
}

  componentDidMount(){
  }

  gameCodeValidator(){
  }

  allInputsValid(){
  }

  checkInput(){
    console.log("cool")
  }

  render() {
    return (
      <Container className='text-center' >
        <Form>
          <FormGroup>
            <Label for="input">Submit the best caption.</Label>
            <Input name='input' />
            <FormFeedback>You will not be able to see this</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
            <Button block color='primary' onClick={ this.checkInput }>Submit</Button>
          </FormGroup>
        </Form>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Be Patient</ModalHeader>
          <ModalBody>
            Waiting for all other players to submit
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
        <FormGroup>
  <Label for="exampleSelect">Select</Label>
  <Input type="select" name="select" id="exampleSelect">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Input>
</FormGroup>
      </Container>
    );
  }
}
