import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';

import { useLoginState } from './State';
import Register from './pages/register';


function App() {
  const [state,dispatch]=useLoginState()
  const triggerclicked = () =>{
    console.log(state)
  }
  
  return (
    <Router>
      
      
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Login' exact component={Login}/>
        <Route path='/Register' exact component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
