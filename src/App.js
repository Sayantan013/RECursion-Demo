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
        <Route exact path='/'><Home /></Route>
        <Route path= '/gallery'><Gallery /></Route>
        <Route path= '/teams'><Teams /></Route>
      </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
