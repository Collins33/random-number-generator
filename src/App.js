import React, { Component } from "react";
import Header from "./components/header/header";
import Generator from "./components/generator/generator";
import Numbers from "./components/numbers/numbers";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Generator />
        <Numbers />
      </div>
    );
  }
}

export default App;
