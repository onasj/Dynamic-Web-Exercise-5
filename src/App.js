import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import Signup from "./pages/Signup"
import Logout from "./pages/Logout"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={UserProfile} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={Logout} />
      </Router>
    </div>
  );
}

export default App;
