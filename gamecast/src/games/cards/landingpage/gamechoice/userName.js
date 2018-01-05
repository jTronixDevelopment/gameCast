import React, { Component } from 'react';

export default class UserName extends Component {
  render() {
    return (
        <div className="text-center">
          <input name="userName" className='landing-page-input'  id='userNameInput' placeholder="Enter Username" />
        </div>
    );
  }
}
