import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
//Flex is a div tag with a display set to flex.
export const Navbar = () => {
  return (
    <Flex align="center" boxShadow="base" p=".5" mb="2">
      <Box p="2">
        <Heading size="sm">Top Software Engineneering Questions</Heading>
      </Box>
      <Spacer />
      <Box>
        <ColorModeSwitcher />
      </Box>
    </Flex>
  );
};
