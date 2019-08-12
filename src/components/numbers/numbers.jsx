import React, { Component } from "react";
import checkArray from "../../utils/arrayCheck";

class Numbers extends Component {
  render() {
    const { generatedPhoneNumbers } = this.props;
    const valueOfArray = checkArray(generatedPhoneNumbers);
    const phoneNumbers = generatedPhoneNumbers.map((number, index) => {
      return (
        <div key={index}>
          <h1>{number}</h1>
        </div>
      );
    });
    return (
      <>{valueOfArray ? <>{phoneNumbers}</> : <h1>There is nothing</h1>}</>
    );
  }
}

export default Numbers;
