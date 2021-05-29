import React from 'react';
import { Container } from '@material-ui/core'; //material-ui used for designing webpages
import { BrowserRouter, Switch, Route } from 'react-router-dom';// allows you to handle routes in a web app, using dynamic routing

// importing components for webpage
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;