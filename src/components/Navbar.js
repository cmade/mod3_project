import React, { useState } from 'react';
import { Box, Flex, Spacer, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
//Flex is a div tag with a display set to flex.
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from './Login';
import { Logout } from './Logout';
import { Questions } from './Questions';
import { Home } from './Home';
import { logout, isLoggedIn } from './Auth';
import AuthenticatedRoute from './AuthenticatedRoute';
export const Navbar = () => {
  let [user, setUser] = useState(isLoggedIn());
  const triggerLogout = () => {
    logout();
    setUser(false);
  };
  console.log('Logged in: ' + isLoggedIn());
  //use render to pass props down to the Login component
  return !user ? (
    <Router>
      <Flex align="center" boxShadow="base" p="2" mb="8" h="8" fontSize="12px">
        <Box p="1" fontSize="18px">
          <Link to="/">SE</Link>
        </Box>
        <Spacer />
        <HStack spacing="44px">
          <Box mr="6">
            <Link to="/login">Login</Link>
          </Box>
        </HStack>
        <Box>
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => <Login user={user} setUser={setUser} />}
        />
        <AuthenticatedRoute exact path="/Logout" component={Logout} />
        <AuthenticatedRoute exact path="/questions" component={Questions} />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Flex align="center" boxShadow="base" p="2" mb="8" h="8" fontSize="12px">
        <Box p="1" fontSize="18px">
          <Link to="/">SE</Link>
        </Box>
        <Spacer />

        <HStack spacing="44px">
          <Box>
            <Link to="/questions">Questions</Link>
          </Box>
          <Box mr="6">
            {user && (
              <Link to="/Logout" onClick={triggerLogout}>
                Logout
              </Link>
            )}
          </Box>
        </HStack>
        <Box>
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => <Login user={user} setUser={setUser} />}
        />
        <AuthenticatedRoute exact path="/Logout" component={Logout} />
        <AuthenticatedRoute exact path="/questions" component={Questions} />
      </Switch>
    </Router>
  );
};
