// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MyCartPage from './components/MyCartPage';
import "../src/App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className='navbar'>
            <ul>
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link">My Cart</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cart" component={MyCartPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
