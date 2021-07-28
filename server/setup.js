const fs = require('fs');
const mongo = require('./mongoConn');
const Injections = require('./models/injections');
const Vaccine = require('./models/vaccine');


(function(){ 
  
  fs.readdir('./server/testdata', async (err, files) => {

    if (err) {
      console.log(err);
    }

    try{
      await Injections.deleteMany({});
      await Vaccine.deleteMany({});
      console.log('\x1b[33m', 'Clearing collections...');
    }
    catch(err) {
      console.log('\x1b[31m', 'Failed to clear collections');
    }
   
   
    for (let element of files) {

      try{
        const data = fs.readFileSync(`./server/testdata/${element}`, 'utf8');
     
        const splitted = data.toString().split('\n');
        const mapped = splitted.map(element => {
          return JSON.parse(element);
        });

        if ('vaccine' in mapped[0]) { 
          await Vaccine.insertMany(mapped);
          
          console.log('\x1b[32m',`Added ${element} to database`);
        }
        else if ('vaccination-id' in mapped[0]) {
          await Injections.insertMany(mapped);
          
          console.log('\x1b[32m',`Added ${element} to database`);
        }
        else {
          throw new Error();
        }

      }
      catch(err) {
        console.log('\x1b[31m', `FILE_ERROR: ${element}`);
      }
     
    }
    console.log('\x1b[33m', 'Closing...');
    mongo.mongoClose;
    process.exit();
  });
  
  
})();



