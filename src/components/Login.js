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

export const Login = ({ user, setUser }) => {
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

  function login() {
    if (
      formData.email === 'ksmith@gmail.com' &&
      formData.password === 'MUDgYyibG2MLN!@'
    ) {
      Auth(formData.email, formData.password);
      setFormData({
        ...formData,
        loginFailed: false,
        loginSuccess: true,
      });
      setUser(true);
      handleClick();
    } else {
      setFormData({ ...formData, loginFailed: true, loginSuccess: false });
      setInterval(function () {
        setFormData({ ...formData, loginFailed: false, loginSuccess: false });
      }, 3000);
    }
  }
  return (
    <Flex direction="column" p="4" align="center" mt="4">
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
              colorScheme="blue"
              size="sm"
              fontSize="sm"
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
