import React, { Component } from 'react';
import './App.css';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drag Things Around</h1>
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
