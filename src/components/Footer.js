import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" py="6">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        align="center"
        pos="fixed"
        bottom="0"
        w="62%"
      >
        <a
          aria-current="page"
          aria-label="Back to Home page"
          href="/"
          rel="home"
        ></a>
        <Stack
          my={{ base: '6', md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          marginStart={{ md: '8' }}
          fontSize="sm"
          spacing={{ base: '2', md: '8' }}
          textAlign={{ base: 'center', md: 'start' }}
        ></Stack>
        <ButtonGroup
          marginStart={{ md: 'auto' }}
          color="gray.600"
          variant="ghost"
        >
          <Tooltip
            hasArrow
            label="Connect with Clive on LinkedIn"
            bg="green.300"
            placement="top"
            openDelay={500}
            color="white"
          >
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/mclive/"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
          </Tooltip>
          <Tooltip
            hasArrow
            label="Follow Clive on Github"
            bg="green.300"
            placement="top"
            openDelay={500}
            color="white"
          >
            <IconButton
              as="a"
              href="https://github.com/cmade"
              aria-label="LinkedIn"
              icon={<FaGithub />}
            />
          </Tooltip>
          <Tooltip
            hasArrow
            label="Follow Clive on Twitter"
            bg="green.300"
            placement="top"
            openDelay={500}
            color="white"
          >
            <IconButton
              as="a"
              href="https://twitter.com/SE2077"
              aria-label="LinkedIn"
              icon={<FaTwitter />}
            />
          </Tooltip>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Footer;
