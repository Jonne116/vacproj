const Injections = require('../models/injections');
const Vaccine = require('../models/vaccine');
const { daysAdd, daysRemove } = require('../util/datehandler');


const getDash = async (req, res) => {
  let dashData = {};
  try{
    const vacci = await Vaccine.aggregate(
      [
        {$match: {arrived: {$lte: req.params.date}}},
        {
          $group:
            {
              _id: { vaccine: '$vaccine' },
              injections: { $sum: '$injections' },
              orders: { $sum: 1 } 
            }
        }
      ]
    );
    const injected = await Injections.aggregate(
      [
        {$match: {vaccinationDate: {$lte: req.params.date}}},
        {
          $group:
            {
              _id: { gender: '$gender' },
              vaccinated: { $sum: 1 }           
            }
        }
      ]
    );
    dashData = {vacci, injected};
    res.status(200).json(dashData);
  }
  catch(err) {
    console.log(err);
    res.status(500).end();
  }
};

const getUsed = async(req, res) => {
  try{
    const bottles = await Injections.aggregate(
      [
        {$match: {vaccinationDate: {$lte: req.params.date}}},
        {
          $group:
          {
            _id: { bottle: '$sourceBottle' },
            injections: { $sum: 1 }           
          }
        }
      ]
    );
    res.status(200).json(bottles);
  }
  catch(err) {
    console.log(err);
    res.status(500).end();
  }
};

const getExpired = async (req, res) => {
  const days30 = daysRemove(req.params.date, 30);
  console.log(days30);
  try {
    const expired = await Vaccine.aggregate(
      [
        {$match: {arrived: {$lt: days30}}},
        { 
          $group:
            {
              _id: { vaccine: '$vaccine' },
              injectionsExpired: { $sum: '$injections' },
              ordersExpired: { $sum: 1 }
             
            }
        }
      ]
    );
    console.log(expired);
    res.status(200).json(expired);
  }
  catch(err) {
    console.log(err);
    res.status(500).end();
  }
};

const getGoingExpire = async (req, res) => {
  const days30 = daysRemove(req.params.date, 30);
  const days20p = daysAdd(req.params.date, 20);
  try {
    const goingExp = await Vaccine.aggregate(
      [
        {$match: {arrived: {$gte: days30, $lte: days20p}}},
        {
          
          $group:
            {
              _id: { vaccine: '$vaccine' },
              injections: { $sum: '$injections' },
              orders: { $sum: 1 }
             
            }
        }
      ]
    );
    res.status(200).json(goingExp);
  }
  catch(err) {
    console.log(err);
    res.status(500).end();
  }
};


module.exports = { getDash, getUsed, getExpired, getGoingExpire };