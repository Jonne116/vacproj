const Injections = require('../models/injections');
const Vaccine = require('../models/vaccine');

const getDash = async (req, res) => {
  let dashData = {};
  const date = new Date(req.params.date);
  try{
    const vacci = await Vaccine.aggregate(
      [
        {$match: {arrived: {$lte: date}}},
        {
          
          $group:
            {
              _id: { vaccine: '$vaccine' },
              total: { $sum: '$injections' },
              count: { $sum: 1 }
             
            }
        }
      ]
    );
    const injected = await Injections.aggregate(
      [
        {$match: {vaccinationDate: {$lte: date}}},
        {
          
          $group:
            {
              _id: { gender: '$gender' },
              count: { $sum: 1 },
              bottles: { $addToSet: '$sourceBottle' }
             
            }
        }
      ]
    );
    dashData = {vacci, injected};
    res.status(200).json(dashData);
  }
  catch(err) {
    console.log(err);
  }
};

module.exports = { getDash };