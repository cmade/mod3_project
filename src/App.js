import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Questions } from './components/Questions';
//The chakraProvider allows us to provide a theme to every component
export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Questions />
    </ChakraProvider>
  );
};
