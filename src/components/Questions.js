import {
  AccordionItem,
  Box,
  Flex,
  Heading,
  HStack,
  Accordion,
  AccordionButton,
  AccordionPanel,
  Button,
  Tooltip,
  Alert,
  AlertIcon,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import Loading from './Loading';
import QuestionApiService, {
  DeleteQuestionName,
} from '../api/QuestionApiService';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { AddIcon } from '@chakra-ui/icons';
//Map through each question in the json file
export const Questions = ({
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
  deleteQuestion,
  removeData,
  questionItem,
  setQuestionItem,
  questionUpdate,
  setQuestionUpdate,
}) => {
  console.log(question);
  useEffect(() => {
    refreshQuestions();
  }, [questionItem]);

  async function deleteClicked(id) {
    try {
      // let res3 = await HelloWorldPathVariable(email);
      // uNami(res3.data.message);
      await DeleteQuestionName(id);
      removeData(`Delete of Question ${id} is Successful`);
      toast({
        position: 'top',
        title: 'Question Successfully Removed',
        status: 'success',
        duration: 3000,
        isClosable: true,
        size: 'sm',
      });
      refreshQuestions();
    } catch (error) {
      // console.log(error.response.data.message);
      // uNami(error.response.data.message);
    }
  }
  let history = useHistory();
  function handleClick(id) {
    history.push(`/questions/:${id}`);
  }
  async function updateClicked(id) {
    console.log('update ' + id);
    handleClick(id);
    setQuestionItem(id);
    // try {
    //   // let res3 = await HelloWorldPathVariable(email);
    //   // uNami(res3.data.message);
    //   await DeleteQuestionName('Tom', id);
    //   removeData(`Delete of Question ${id} is Successful`);
    //   refreshQuestions();
    // } catch (error) {
    //   // console.log(error.response.data.message);
    //   // uNami(error.response.data.message);
    // }
  }
  async function addQuestion() {
    console.log('create');
    setQuestionUpdate({
      question: '',
      answer: '',
    });
    setQuestionItem(-1);
    history.push(`/questions/:-1`);

    // try {
    //   // let res3 = await HelloWorldPathVariable(email);
    //   // uNami(res3.data.message);
    //   await DeleteQuestionName('Tom', id);
    //   removeData(`Delete of Question ${id} is Successful`);
    //   refreshQuestions();
    // } catch (error) {
    //   // console.log(error.response.data.message);
    //   // uNami(error.response.data.message);
    // }
  }
  async function refreshQuestions(params) {
    let res4 = await QuestionApiService();
    questionData(res4.data);
  }
  const toast = useToast();
  return question === '' ? (
    <Loading />
  ) : (
    <Flex direction="column" p="8" align="center">
      <Box>{nami}</Box>

      <Box mb="8">
        <Heading size="md">
          Interview Questions{' '}
          <Tooltip
            hasArrow
            label="Create"
            bg="green.300"
            placement="right-end"
            openDelay={500}
            color="white"
          >
            <Button
              boxShadow="md"
              size="xs"
              variant="outline"
              ml="6"
              onClick={() => addQuestion()}
            >
              <AddIcon />
            </Button>
          </Tooltip>
        </Heading>
      </Box>

      <Accordion allowMultiple>
        {question.map(q => (
          <HStack key={q.id}>
            <AccordionItem align="center" w="300px">
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  {q.question}
                </Box>
              </AccordionButton>
              <AccordionPanel align="left">{q.answer}</AccordionPanel>
            </AccordionItem>
            <Tooltip
              hasArrow
              label="Update"
              bg="orange.500"
              color="white"
              openDelay={500}
            >
              <Button
                boxShadow="md"
                size="xs"
                variant="outline"
                onClick={() => updateClicked(q.id)}
              >
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip
              hasArrow
              label="Delete"
              bg="red.600"
              placement="right-end"
              color="white"
              openDelay={500}
            >
              <Button
                boxShadow="md"
                variant="outline"
                size="xs"
                onClick={() => {
                  deleteClicked(q.id);
                }}
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          </HStack>
        ))}
      </Accordion>
    </Flex>
  );
};
