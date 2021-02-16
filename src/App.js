import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';

//The chakraProvider allows us to provide a theme to every component
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
      </Router>
    </ChakraProvider>
  );
};
