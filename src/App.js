import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Inicio from './Inicio'

function App() {
  return (
    <Router>
      <>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/visitantes">About</Link>
            </li>
            <li>
              <Link to="/departamentos">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/">
            <Inicio />
          </Route>
          {/* <Route path="/departamentos">
            <Departamentos />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
