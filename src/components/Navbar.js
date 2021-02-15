import React from 'react';
import { Box, Flex, Heading, Spacer, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
//Flex is a div tag with a display set to flex.
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from './Login';
import { Questions } from './Questions';

export const Navbar = () => {
  return (
    <Router>
      <Flex align="center" boxShadow="base" p=".5" mb="2">
        <Box p="2">
          <Heading size="sm">Top Software Engineneering Questions</Heading>
        </Box>
        <Spacer />
        <Switch>
          <HStack spacing="44px">
            <Box>
              <Link to="/login">Login</Link>
            </Box>

            <Box>
              <Link to="/questions">Questions</Link>
            </Box>
          </HStack>
        </Switch>
        <Box>
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Switch>
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </Router>
  );
};
