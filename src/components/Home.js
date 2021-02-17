import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <Box as="section" mt="-10">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
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
            colorScheme="blue"
            fontWeight="bold"
          >
            Start Free Trial
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
