import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number}>{number}</li>
    );

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>{listItems}</ul>

      </div>
    );
  }
}

export default App;