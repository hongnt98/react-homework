import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div class="welcome-text">Chao mung den voi khoa hoac ReactJs</div>
        </header>
        <main className="App-main">
          <div class="top-main">De bat dau hoc vui long truy cap src/<span class="yellow-radius">App.js</span> chinh sua va luu lai</div>
        </main>
      </div>
    );
  }
}

export default App;
