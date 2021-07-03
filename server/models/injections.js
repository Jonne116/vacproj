const mongoose = require('mongoose');

const injectionsSchema = new mongoose.Schema({
  'vaccination-id': { type: String },
  gender: { type: String },
  sourceBottle: { type: String },
  vaccinationDate: { type: Date }
});

injectionsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Injections', injectionsSchema);
