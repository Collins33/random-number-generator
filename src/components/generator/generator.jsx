import React, { Component } from "react";
import generatePhoneNumbers from "../../utils/generator";
import Numbers from "../numbers/numbers";
import "./generator.css";

class generator extends Component {
  state = {
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
      generatedNumbers: storedGeneratedNumbers
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      generatedPhoneNumbers: []
    });
    const { amount, generatedPhoneNumbers } = this.state;
    if (amount <= 10000) {
      const sortedNumbers = generatePhoneNumbers(generatedPhoneNumbers, amount);
      this.setState({
        generatedPhoneNumbers: sortedNumbers
      });
    } else {
      alert("You can only generate 10000 contacts");
    }
  };

  handleChange = event => {
    this.setState({
      amount: event.target.value
    });
  };

  sortGeneratedNumbersDescending = () => {
    function sortNumber(a, b) {
      return b - a;
    }
    const { generatedPhoneNumbers } = this.state;
    this.setState({
      generatedPhoneNumbers: generatedPhoneNumbers.sort(sortNumber)
    });
  };

  sortGeneratedNumbersAscending = () => {
    function sortNumber(a, b) {
      return a - b;
    }
    const { generatedPhoneNumbers } = this.state;
    this.setState({
      generatedPhoneNumbers: generatedPhoneNumbers.sort(sortNumber)
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
            placeholder="Enter amount of phone numbers to generate upto 10000"
          />
          <button type="submit" className="btn_number_generator">
            Generate
          </button>
        </form>
        <div>
          <button
            onClick={this.sortGeneratedNumbersDescending}
            className="btn_number_generator"
          >
            Descending order
          </button>
          <button
            onClick={this.sortGeneratedNumbersAscending}
            className="btn_number_generator"
          >
            Ascending order
          </button>
        </div>
        <div>
          <Numbers generatedPhoneNumbers={generatedPhoneNumbers} />
        </div>
      </>
    );
  }
}

export default generator;
