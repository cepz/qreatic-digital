import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import Login from '../login';
import Admin from '../Admin';

function App() {
  return (
    <Router>
        <Route path='/' exact component={Login}/>
        <Route path='/admin' exact component={Admin}/>
    </Router>
  );
}

export default App;
