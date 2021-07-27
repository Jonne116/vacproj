const Vaccine = require('../models/vaccine');

const getVaccines = async (req, res) => {
  try{
    const vaccines = await Vaccine.find({});
    res.status(200).json(vaccines);
  }
  catch(e) {
    res.status(500).json(e);
  }
};

module.exports = {getVaccines};