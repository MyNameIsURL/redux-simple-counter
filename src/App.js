import React, { Component } from 'react';
import './App.css';
import EnhancedCounter from './containers/EnhancedCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Counter</h1>
        </header>
        <EnhancedCounter />
      </div>
    );
  }
}

export default App;
