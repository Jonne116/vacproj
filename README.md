# Vaccine

Solita dev academy exercise 2021

## Installation

1. Install Node.js

2. Install MongoDB

3. Create Mongo database and a user for database

4. Clone repository `https://github.com/Jonne116/vacproj.git`

5. Create `.env` file to project root directory

6. Write enviroment variables to `.env` file:

* `MONGO_URI=mongodb://username:password@host:port/databasename?retryWrites=true&w=majority` *(Replace username, password, host, port and databasename)*
* *Enviromental variables `PORT`(node) and `PORT_WEBPACK`(webpack) are optional*

7. In project folder, run command:
`npm run setup`

8. To start server:
`npm run start`

## Scripts

`npm run setup` Install modules, add data to database, build frontend and run tests

`npm run start` Start server

`npm run populdb` Add data to database

`npm run client` Start webpack dev-server

`npm run server` Start node.js dev-server

`npm run dev` Start both, webpack and node.js dev-servers concurrently

`npm run build` Build frontend

`npm run test` Run tests