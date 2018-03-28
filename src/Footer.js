import React, { Component } from 'react';

class Footer extends Component {
  state = {
   numbers: [1,2,3],
   message: "This is the footer message. I'm happy to be part of the state",
 }

  render() {
    return (
      <div>
        <h2>This is a simple footer message</h2>
        <p>Message: {this.state.message}</p>
        <p>This is the list of numbers from this.state.numbers:</p>
          {this.state.numbers.map( (number, index) => (
            <p>
              {number}
            </p>
          ))}
      </div>
    );
  }
}

export default Footer;
