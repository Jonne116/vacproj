const Injections = require('../models/injections');

const getInjections = async (req, res) => {
 
  try{
    const injecData = await Injections.find({});
    res.status(200).json(injecData);

  }
  catch(err) {
    res.status(500).json(err);
  }
};

module.exports = {getInjections};