const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const mongo = require('./mongoConn');
const injectionsRoute = require('./routes/injectionsRoute');
const vaccineRoute = require('./routes/vaccineRoute');
const dashRoute = require('./routes/dashRoute');

morgan.token('body', (req) => { 
  return JSON.stringify(req.body);
});

app.use(cors());  
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.use('/', express.static(`${ __dirname }/static`));
app.use('/injections', injectionsRoute);
app.use('/vaccine', vaccineRoute);
app.use('/dash', dashRoute);

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log('\x1b[32m','Server running on port:' + '\x1b[36m', PORT);
});

process.once('SIGHUP', function () {
  console.log('\x1b[33m', 'Closing...');
  mongo.mongoClose;
  server.close();
});