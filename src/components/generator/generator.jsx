import React, { Component } from "react";
import generatePhoneNumbers from "../../utils/generator";
import Numbers from "../numbers/numbers";
import "./generator.css";

class generator extends Component {
  state = {
    amount: "",
    generatedPhoneNumbers: []
  };

  /**
   * Fetch numbers from the local storage
   */
  componentDidMount() {
    const storedGeneratedNumbers = JSON.parse(
      localStorage.getItem("generatedContacts")
    );
    this.setState({
      generatedNumbers: storedGeneratedNumbers,
      storedNumbers: true
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { amount, generatedPhoneNumbers } = this.state;
    const sortedNumbers = generatePhoneNumbers(generatedPhoneNumbers, amount);
    this.setState({
      generatedPhoneNumbers: sortedNumbers
    });
  };

  handleChange = event => {
    this.setState({
      amount: event.target.value
    });
  };

  render() {
    const { generatedPhoneNumbers } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form_number_generator">
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
            className="input_number_generator"
            placeholder="Enter amount of phone numbers to generate"
          />
          <button type="submit" className="btn_number_generator">
            Generate
          </button>
        </form>
        <div>
          <Numbers generatedPhoneNumbers={generatedPhoneNumbers} />
        </div>
      </>
    );
  }
}

export default generator;
