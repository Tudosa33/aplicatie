import React from 'react';
import './scss/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/signup' component={SignUpPage} exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
