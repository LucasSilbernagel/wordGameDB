import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Endpoints from './components/Endpoints/Endpoints';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from './globalStyles';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/endpoints" component={Endpoints} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;