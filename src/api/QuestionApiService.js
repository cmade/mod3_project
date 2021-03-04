import axios from 'axios';

const QuestionApiService = () => {
  return axios.get(`http://localhost:8080/api/v1/questions`);
};
export const DeleteQuestionName = id => {
  return axios.delete(`http://localhost:8080/api/v1/questions/${id}`);
};
export const GetQuestionName = id => {
  return axios.get(`http://localhost:8080/api/v1/questions/${id}`);
};
export const UpdateQuestionName = (id, question) => {
  return axios.put(`http://localhost:8080/api/v1/questions/${id}`, question);
};
export const CreateQuestionName = question => {
  return axios.post(`http://localhost:8080/api/v1/questions/`, question);
};
export default QuestionApiService;
