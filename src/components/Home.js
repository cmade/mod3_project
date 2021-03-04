import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService, {
  HelloWorldBeanService,
} from '../api/HelloWorldService';

export const Home = ({
  user,
  setUser,
  welcome,
  uWelcome,
  bean,
  uBean,
  nami,
  uNami,
}) => {
  const getMessage = async () => {
    let res = await HelloWorldService();
    let res2 = await HelloWorldBeanService();

    console.log(res.data);
    uWelcome(res.data);
    uBean(res2.data.message);
  };

  return (
    <Box as="section" mt="2">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '10' }}
        textAlign="center"
      >
        <Heading as="h2" size="xl" fontWeight="extrabold" letterSpacing="tight">
          Ready to Become a Software Engineer?
        </Heading>
        <Text mt="4" fontSize="lg">
          Start studying today!
        </Text>
        <Link to="/login">
          <Button
            mt="4"
            as="a"
            href="#"
            size="sm"
            bgGradient="linear(to-l, #6DF1D1,#5BDCFA)"
            _hover={{ bgGradient: 'linear(to-l, green.300,blue.300)' }}
            fontWeight="bold"
            color="white"
            onClick={getMessage}
          >
            Start Free Trial
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
