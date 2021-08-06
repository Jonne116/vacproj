const mongoose = require('mongoose');

const injectionsSchema = new mongoose.Schema({
  'vaccination-id': { type: String },
  gender: { type: String },
  sourceBottle: { type: String },
  vaccinationDate: { type: Date }
});

module.exports = mongoose.model('Injections', injectionsSchema);