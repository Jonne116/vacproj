const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URI;

console.log('\x1b[33m','Connecting to MongoDB...');

mongoose.connect(url, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true, 
})
  .then(() => {    
    console.log('\x1b[32m','Connected to MongoDB');
  })
  .catch((error) => {    
    console.log('\x1b[31m','Error connecting to MongoDB:', error.message);  
  });

const mongoClose = () => {
  mongoose.connection.close();
};

exports.mongoClose = mongoClose;