import React from 'react';
import logo from './beanpack-logo.png';
import './App.css';
import { HomePage } from './HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
