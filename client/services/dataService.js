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

const getExpiredBefore = async (date) => {
  try {
    const response = await axios.get('/dash/expbefore/' + date.toISOString());
    return response.data;
  }
  catch(err) {
    console.log(err);
    return {};
  }
};

export { getDash, getBottles, getExpired, getGoingExp, getExpiredBefore };