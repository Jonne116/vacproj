import axios from 'axios';

const getVaccines = async() => {
  try {
    const response = await axios.get('/vaccine');
    return response.data;
  }
  catch(err) {
    console.log(err);
  }
};

const getInjections = async () => {
  try {
    const response = await axios.get('/injections');
    return response.data;
  }
  catch(err) {
    console.log(err);
  }
};

export { getVaccines, getInjections };