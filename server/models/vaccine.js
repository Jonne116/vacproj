const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
  id: { type: String },
  orderNumber: { type: Number },
  responsiblePerson: { type: String },
  healthCareDistrict: { type: String },
  vaccine: { type: String },
  injections: { type: Number },
  arrived: { type: Date }
});

module.exports = mongoose.model('Vaccine', vaccineSchema);