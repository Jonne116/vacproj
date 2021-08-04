import axios from 'axios';

const getDash = async (date) => {
  try{
    const response = await axios.get('/dash/' + date.toISOString());
    return response.data;
  }
  catch(err) {
    console.log(err);
    return [];
  }
};

const getBottles = async (date) => {
  try{
    const response = await axios.get('/dash/bottles/' + date.toISOString());
    return response.data;
  }
  catch(err) {
    console.log(err);
    return [];
  }
};

const getExpired = async (date) => {
  try{
    const response = await axios.get('/dash/exp/' + date.toISOString());
    return response.data;
  }
  catch(err) {
    console.log(err);
    return [];
  }
};

const getGoingExp = async (date) => {
  try{
    const response = await axios.get('/dash/goingexp/' + date.toISOString());
    return response.data;
  }
  catch(err) {
    console.log(err);
    return [];
  }
};

const getVaccines = async() => {
  try {
    const response = await axios.get('/vaccine');
    return response.data;
  }
  catch(err) {
    console.log(err);
    return [];
  }
};

const getInjections = async () => {
  try {
    const response = await axios.get('/injections');
    return response.data;
  }
  catch(err) {
    console.log(err);
    return [];
  }
};

export { getVaccines, getInjections, getDash, getBottles, getExpired, getGoingExp };