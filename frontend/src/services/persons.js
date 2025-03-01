import axios from 'axios'
const baseUrl = '/api/persons';

const getAll = () => {
  console.log(baseUrl);
  return axios.get(baseUrl).then(response => {
    console.log("Response data:", response.data);
    return response.data;
  });
};

const create = newObject => {
  return axios.post(baseUrl, newObject)
}


const remove = id => axios.delete(`${baseUrl}${id}`);

export default { 
  getAll: getAll, 
  create: create, 
  remove: remove
}