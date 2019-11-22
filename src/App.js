import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Project Lunchbox</h1>
      <Home/>
    </div>
  );
}

export default App;
