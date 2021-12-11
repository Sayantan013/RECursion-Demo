import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Teams from './components/pages/Teams';

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home}/>
        <Route path= '/gallery' exact component = {Gallery}/>
        <Route path= '/teams' exact component = {Teams}/>
      </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
