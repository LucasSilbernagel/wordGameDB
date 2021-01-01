import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Endpoints from './components/Endpoints';
import Footer from './components/Footer';
import './App.css';
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/endpoints" component={Endpoints} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;