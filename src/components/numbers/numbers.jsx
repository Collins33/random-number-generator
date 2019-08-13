import React, { Component } from "react";
import checkArray from "../../utils/arrayCheck";
import "./numbers.css";

class Numbers extends Component {
  render() {
    const { generatedPhoneNumbers } = this.props;
    const valueOfArray = checkArray(generatedPhoneNumbers);
    const phoneNumbers = generatedPhoneNumbers.map((number, index) => {
      return (
        <div key={index} className="mini_header_numbers_generated">
          <div className="element_number">{index + 1}</div>
          <div className="element_number">{number}</div>
        </div>
      );
    });
    return (
      <>
        {valueOfArray ? (
          <>
            <div>
              <div className="header_numbers_generated">Numbers generated</div>
              <div className="mini_header_numbers_generated">
                <div className="element_number_header">Index</div>
                <div className="element_number_header">Phone Number</div>
              </div>
              {phoneNumbers}
            </div>
          </>
        ) : (
          <h1>There are no numbers generated.</h1>
        )}
      </>
    );
  }
}

export default Numbers;
