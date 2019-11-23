import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Project Lunchbox</h1>
      <Home/>
      <Route exact path="/login" component={Login}/>
    </div>
  );
}

export default App;
