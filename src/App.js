import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Questions } from './components/Questions';
//The chakraProvider allows us to provide a theme to every component
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from './components/Login';
export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/questions" component={Questions} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
};
