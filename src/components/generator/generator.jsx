import React, { Component } from "react";
import generatePhoneNumbers from "../../utils/generator";

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
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <button type="submit">Generate</button>
        </form>
      </>
    );
  }
}

export default generator;
