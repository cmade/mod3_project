import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Grid,
  HStack,
} from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import Q_LIST from '../question.json';
//Map through each question in the json file
export const Questions = () => {
  return (
    <Flex direction="column" p="4" align="center">
      <Box mb="8">
        <Heading size="md">Interview Questions</Heading>
      </Box>
      <Accordion allowToggle w="50%">
        {Q_LIST.map(q => (
          <AccordionItem key="q.id">
            <HStack m="3" align="stretch">
              <Button variant="ghost" p="1">
                <ArrowUpIcon />
              </Button>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{q.question}</Text>
                </Box>
              </AccordionButton>
              <AccordionPanel p="2">
                <Text>{q.answer}</Text>
              </AccordionPanel>
            </HStack>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};
