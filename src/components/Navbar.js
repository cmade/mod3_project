import React, { useState } from 'react';
import { Box, Flex, Spacer, HStack, Text, Tooltip } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
//Flex is a div tag with a display set to flex.
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from './Login';
import { Logout } from './Logout';
import { Questions } from './Questions';
import QuestionComponent from './QuestionComponent';
import { Home } from './Home';
import { logout, isLoggedIn } from './Auth';
import AuthenticatedRoute from './AuthenticatedRoute';
import moment from 'moment';
export const Navbar = () => {
  let [user, setUser] = useState(isLoggedIn());
  let [welcome, uWelcome] = useState('');
  let [bean, uBean] = useState('');
  let [nami, uNami] = useState('');
  let [question, questionData] = useState('');
  let [deleteQuestion, removeData] = useState('');
  let [questionItem, setQuestionItem] = useState('');
  let [questionUpdate, setQuestionUpdate] = useState({
    id: 1,
    description: '',
    targetDate: '',
  });
  const triggerLogout = () => {
    logout();
    setUser(false);
  };
  console.log('Logged in: ' + isLoggedIn());
  //use render to pass props down to the Login component
  return !user ? (
    <Router>
      <Flex align="center" boxShadow="base" p="2" mb="12" h="8" fontSize="12px">
        <Box p="1" fontSize="18px">
          <Tooltip
            hasArrow
            label="Software Engineering"
            bg="green.300"
            placement="right"
            openDelay={500}
            color="white"
          >
            <Link to="/">
              <Text
                bgGradient="linear(to-l, #6DF1D1,#5BDCFA)"
                bgClip="text"
                fontSize="3xl"
                fontWeight="extrabold"
              >
                SE
              </Text>
            </Link>
          </Tooltip>
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
        <Route
          exact
          path="/"
          render={() => (
            <Home
              user={user}
              setUser={setUser}
              welcome={welcome}
              uWelcome={uWelcome}
              bean={bean}
              uBean={uBean}
              nami={nami}
              uNami={uNami}
              question={question}
              questionData={questionData}
              deleteQuestion={deleteQuestion}
              removeData={removeData}
              questionItem={questionItem}
              setQuestionItem={setQuestionItem}
              questionUpdate={questionUpdate}
              setQuestionUpdate={setQuestionUpdate}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <Login
              user={user}
              setUser={setUser}
              welcome={welcome}
              uWelcome={uWelcome}
              bean={bean}
              uBean={uBean}
              nami={nami}
              uNami={uNami}
              question={question}
              questionData={questionData}
              deleteQuestion={deleteQuestion}
              removeData={removeData}
              questionItem={questionItem}
              setQuestionItem={setQuestionItem}
              questionUpdate={questionUpdate}
              setQuestionUpdate={setQuestionUpdate}
            />
          )}
        />
        <AuthenticatedRoute exact path="/Logout" component={Logout} />
        <AuthenticatedRoute
          exact
          path="/questions"
          render={() => (
            <Questions
              user={user}
              setUser={setUser}
              welcome={welcome}
              uWelcome={uWelcome}
              bean={bean}
              uBean={uBean}
              nami={nami}
              uNami={uNami}
              question={question}
              questionData={questionData}
              deleteQuestion={deleteQuestion}
              removeData={removeData}
              questionItem={questionItem}
              setQuestionItem={setQuestionItem}
              questionUpdate={questionUpdate}
              setQuestionUpdate={setQuestionUpdate}
            />
          )}
        />
        <AuthenticatedRoute
          exact
          path="/questions/:id"
          render={() => (
            <QuestionComponent
              user={user}
              setUser={setUser}
              welcome={welcome}
              uWelcome={uWelcome}
              bean={bean}
              uBean={uBean}
              nami={nami}
              uNami={uNami}
              question={question}
              questionData={questionData}
              deleteQuestion={deleteQuestion}
              removeData={removeData}
              questionItem={questionItem}
              setQuestionItem={setQuestionItem}
              questionUpdate={questionUpdate}
              setQuestionUpdate={setQuestionUpdate}
            />
          )}
        />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Flex align="center" boxShadow="base" p="2" mb="8" h="8" fontSize="12px">
        <Box p="1" fontSize="18px">
          <Tooltip
            hasArrow
            label="Software Engineering"
            bg="green.300"
            placement="bottom"
            openDelay={500}
            color="white"
          >
            <Link to="/">
              <Text
                bgGradient="linear(to-l, #6DF1D1,#5BDCFA)"
                bgClip="text"
                fontSize="3xl"
                fontWeight="extrabold"
              >
                SE
              </Text>
            </Link>
          </Tooltip>
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
        <Route
          exact
          path="/"
          render={() => (
            <Home
              user={user}
              setUser={setUser}
              welcome={welcome}
              uWelcome={uWelcome}
              bean={bean}
              uBean={uBean}
              nami={nami}
              uNami={uNami}
              question={question}
              questionData={questionData}
              deleteQuestion={deleteQuestion}
              removeData={removeData}
              questionItem={questionItem}
              setQuestionItem={setQuestionItem}
              questionUpdate={questionUpdate}
              setQuestionUpdate={setQuestionUpdate}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <Login
              user={user}
              setUser={setUser}
              welcome={welcome}
              uWelcome={uWelcome}
              bean={bean}
              uBean={uBean}
              nami={nami}
              uNami={uNami}
              question={question}
              questionData={questionData}
              deleteQuestion={deleteQuestion}
              removeData={removeData}
              questionItem={questionItem}
              setQuestionItem={setQuestionItem}
              questionUpdate={questionUpdate}
              setQuestionUpdate={setQuestionUpdate}
            />
          )}
        />

        <AuthenticatedRoute exact path="/Logout" component={Logout} />
        <AuthenticatedRoute
          exact
          path="/questions"
          render={() => (
            <Questions
              user={user}
              setUser={setUser}
              welcome={welcome}
              uWelcome={uWelcome}
              bean={bean}
              uBean={uBean}
              nami={nami}
              uNami={uNami}
              question={question}
              questionData={questionData}
              deleteQuestion={deleteQuestion}
              removeData={removeData}
              questionItem={questionItem}
              setQuestionItem={setQuestionItem}
              questionUpdate={questionUpdate}
              setQuestionUpdate={setQuestionUpdate}
            />
          )}
        />
        <AuthenticatedRoute
          exact
          path="/questions/:id"
          render={() => (
            <QuestionComponent
              user={user}
              setUser={setUser}
              welcome={welcome}
              uWelcome={uWelcome}
              bean={bean}
              uBean={uBean}
              nami={nami}
              uNami={uNami}
              question={question}
              questionData={questionData}
              deleteQuestion={deleteQuestion}
              removeData={removeData}
              questionItem={questionItem}
              setQuestionItem={setQuestionItem}
              questionUpdate={questionUpdate}
              setQuestionUpdate={setQuestionUpdate}
            />
          )}
        />
      </Switch>
    </Router>
  );
};
