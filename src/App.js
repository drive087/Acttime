import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Login from './page/Login';
import Register from './page/Register';
import Landing from './page/Landing';
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
        
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard}/>
      </div>
    </Router>
    
  );
}

export default App;
