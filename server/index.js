const app = require('./app');
require('dotenv').config();
const {mongoClose} = require('./mongoConn');


const PORT = process.env.PORT || 3002;
const server = app.listen(PORT, () => {
  console.log('\x1b[32m','Server running on port:' + '\x1b[36m', PORT);
});

process.once('SIGHUP', function () {
  console.log('\x1b[33m', 'Closing...');
  mongoClose;
  server.close();
});