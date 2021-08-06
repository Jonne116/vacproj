const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./mongoConn');
const dashRoute = require('./routes/dashRoute');


morgan.token('body', (req) => { 
  return JSON.stringify(req.body);
});

app.use(cors());

app.use(morgan(
  ':method :url :status :res[content-length] - :response-time ms :body', 
  { skip: () => process.env.NODE_ENV === 'test' }
));

app.use('/', express.static(`${ __dirname }/static`));
app.use('/dash', dashRoute);

module.exports= app;