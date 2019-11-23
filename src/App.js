import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';

export default function App() {
  return (
    <Router>
          <div>
            <nav>
              <p>
                  <Link to="/">Home</Link>
              </p>
              <p>
                  <Link to="/about">About</Link>
              </p>
            </nav>
      
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

//     <div className="App">
//       <h1>Project Lunchbox</h1>
//       <Home/>
//       <Route exact path="/login" component={Login}/>
//       <Route path = "/about" component = {About}/>
//     </div>
//   );
// }
