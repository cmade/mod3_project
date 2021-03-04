import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Flex,
  Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from './Auth';
// import { HelloWorldPathVariable } from '../api/HelloWorldService';
import QuestionApiService from '../api/QuestionApiService';
export const Login = ({
  user,
  setUser,
  welcome,
  uWelcome,
  bean,
  uBean,
  nami,
  uNami,
  question,
  questionData,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    loginFailed: false,
    loginSuccess: false,
  });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };
  let history = useHistory();

  function handleClick() {
    history.push('/questions');
  }
  const hello = async () => {
    try {
      // let res3 = await HelloWorldPathVariable(email);
      // uNami(res3.data.message);
      let res4 = await QuestionApiService('Tom');
      questionData(res4.data);
    } catch (error) {
      // console.log(error.response.data.message);
      // uNami(error.response.data.message);
    }
  };

  function login() {
    if (formData.email === 'ksmith@gmail.com' && formData.password === '1') {
      Auth(formData.email, formData.password);
      setFormData({
        ...formData,
        loginFailed: false,
        loginSuccess: true,
      });
      setUser(true);
      handleClick();
      hello();
    } else {
      setFormData({ ...formData, loginFailed: true, loginSuccess: false });
      setInterval(function () {
        setFormData({ ...formData, loginFailed: false, loginSuccess: false });
      }, 3000);
    }
  }
  return (
    <Flex direction="column" align="center" mt="1">
      <Box>{welcome}</Box>
      <Box>{bean}</Box>

      {formData.loginFailed && (
        <Box
          bg="tomato"
          w="25%"
          p={1}
          color="white"
          align="center"
          mb="2"
          fontSize="sm"
        >
          Invalid Credentials
        </Box>
      )}

      {formData.loginSuccess && (
        <Box
          bg="green"
          w="25%"
          p={1}
          color="white"
          align="center"
          mb="2"
          fontSize="sm"
        >
          Login Successful
        </Box>
      )}
      <Box align="center" mb="6" fontSize="2xl">
        Sign in
      </Box>
      <form onSubmit={onSubmit}>
        <Stack spacing="6">
          <FormControl id="email" size="sm">
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              required
              fontSize="sm"
              size="sm"
              h="6"
              onChange={onChange}
            />
          </FormControl>
          <FormControl id="password" size="sm">
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              autoComplete="password"
              required
              fontSize="sm"
              size="sm"
              h="6"
              onChange={onChange}
            />
          </FormControl>
          <Flex>
            <Button
              type="submit"
              bgGradient="linear(to-l, #6DF1D1,#5BDCFA)"
              _hover={{ bgGradient: 'linear(to-l, green.300,blue.300)' }}
              size="sm"
              fontSize="sm"
              color="white"
              m="auto"
            >
              Sign in
            </Button>
          </Flex>
        </Stack>
      </form>
    </Flex>
  );
};
