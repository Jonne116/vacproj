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

vaccineSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Vaccine', vaccineSchema);