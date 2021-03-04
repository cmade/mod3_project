import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import {
  GetQuestionName,
  UpdateQuestionName,
  CreateQuestionName,
} from '../api/QuestionApiService';
import { useHistory } from 'react-router-dom';
const QuestionComponent = ({
  questionItem,
  setQuestionItem,
  questionUpdate,
  setQuestionUpdate,
}) => {
  useEffect(() => {
    getQuestion(questionItem);
  }, [questionItem]);
  async function getQuestion(id) {
    try {
      // let res3 = await HelloWorldPathVariable(email);
      // uNami(res3.data.message);
      let res6 = await GetQuestionName(id);
      console.log(res6);
      setQuestionUpdate({
        id: res6.data.id,
        question: res6.data.question,
        answer: res6.data.answer,
      });
    } catch (error) {
      // console.log(error.response.data.message);
      // uNami(error.response.data.message);
    }
  }
  let history = useHistory();
  const { question, answer } = questionUpdate;
  console.log(answer);
  console.log(questionItem);
  const handleSubmit = async values => {
    console.log(values);

    if (questionItem === -1) {
      await CreateQuestionName({
        id: questionItem,
        question: values.question,
        answer: values.answer,
      });
    } else {
      await UpdateQuestionName(questionItem, {
        id: questionItem,
        question: values.question,
        answer: values.answer,
      });
    }
    history.push(`/questions`);
  };
  function validateText(values) {
    let errors = {};
    if (!values.question) {
      errors.question = 'Enter a Question';
    }
    if (!values.answer) {
      errors.answer = 'Enter an Answer';
    }
    return errors;
  }
  return (
    <Flex direction="column" p="8" align="center">
      <Box mb="5"> Interview Question Update for item: {questionItem}</Box>

      <Formik
        initialValues={{
          question,
          answer,
        }}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        validate={validateText}
        enableReinitialize={true}
      >
        {questionUpdate => (
          <Form>
            <Box align="center">
              <Box flex="1" align="center" bg="red.400" color="white" w="200px">
                <ErrorMessage name="question" />
                <ErrorMessage name="answer" />
              </Box>
            </Box>
            <HStack spacing="24px">
              <FormControl id="Question" isRequired>
                <FormLabel>Question</FormLabel>
                <Field
                  as="textarea"
                  placeholder="Question"
                  type="text"
                  name="question"
                />
              </FormControl>
              <FormControl id="Question" isRequired>
                <FormLabel>Answer</FormLabel>
                <Field
                  as="textarea"
                  placeholder="Answer"
                  type="text"
                  name="answer"
                />
              </FormControl>
              <Tooltip
                hasArrow
                label="Save"
                bg="green.500"
                placement="right-end"
                openDelay={500}
              >
                <Button
                  type="submit"
                  boxShadow="md"
                  variant="outline"
                  size="xs"
                >
                  <CheckIcon />
                </Button>
              </Tooltip>
            </HStack>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
export default QuestionComponent;
