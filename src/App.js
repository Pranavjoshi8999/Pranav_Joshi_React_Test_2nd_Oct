// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MyCartPage from './components/MyCartPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">My Cart</Link>
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
