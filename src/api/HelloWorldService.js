import axios from 'axios';

const HelloWorldService = () => {
  return axios.get('http://localhost:8080/hello-world');
  // console.log('executed service');
};
export function HelloWorldBeanService() {
  return axios.get('http://localhost:8080/hello-world-bean');
}
export function HelloWorldPathVariable(name) {
  return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
}

export default HelloWorldService;
