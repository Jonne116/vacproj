const Injections = require('../models/injections.js');

const getInjections = async (req, res) => {
  const time = new Date(req.params.time);
  console.log(time);
  try{
    const injecData = await Injections.find({ vaccinationDate: { $gte: time }});
    res.status(200).json(injecData);

  }
  catch(err) {
    res.status(500).json(err);
  }
};

module.exports = {getInjections};