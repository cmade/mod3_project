import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Flex,
  Box,
} from '@chakra-ui/react';
import * as React from 'react';
import { PasswordField } from './PasswordField';
// import { PasswordField } from './PasswordField';

export const Login = () => {
  return (
    <Flex direction="column" p="4" align="center" mt="4">
      <form
        onSubmit={e => {
          e.preventDefault();
          // your login logic here
        }}
      >
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
            />
          </FormControl>
          <PasswordField />
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
