import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Register';
import Login from './Login';
import AdminLogin from './AdminLogin';
import Admin from './Admin';

function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
        <nav>
          <ul>
              <Link to="/login">Login</Link> &nbsp;&nbsp;
              <Link to="/register">Register</Link>&nbsp;&nbsp;
              <Link to="/adminLogin">AdminLogin</Link>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/adminLogin">
            <AdminLogin />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>


    </div>
  );
}

export default App;
