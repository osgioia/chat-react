import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Chat from './chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Chat/>
        </header>
      </div>
    );
  }
}

export default App;
