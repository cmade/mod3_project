import React from 'react';
import { Box, Flex, Spacer, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
//Flex is a div tag with a display set to flex.
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from './Login';
import { Questions } from './Questions';
import { Home } from './Home';
export const Navbar = () => {
  return (
    <Router>
      <Flex align="center" boxShadow="base" p=".2" mb="2">
        <Box p="1" size="sm">
          <Link to="/">SE</Link>
        </Box>
        <Spacer />
        <Switch>
          <HStack spacing="44px">
            <Box>
              <Link to="/login">Login</Link>
            </Box>

            <Box mr="6">
              <Link to="/questions">Questions</Link>
            </Box>
          </HStack>
        </Switch>
        <Box>
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </Router>
  );
};
