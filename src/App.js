import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';

//The chakraProvider allows us to provide a theme to every component
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/Loading';
import Footer from './components/Footer';

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return loading ? (
    <ChakraProvider theme={theme}>
      <Router>
        <Loading />
      </Router>
    </ChakraProvider>
  ) : (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
      </Router>
      <Footer />
    </ChakraProvider>
  );
};
