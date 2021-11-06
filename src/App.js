import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/login' exact component={Home}/>
      </Switch>
      
    </Router>
      
    
  );
}

export default App;
