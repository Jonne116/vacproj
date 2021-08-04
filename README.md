<h1>Vaccine exercise 2021</h1>

<h2>Installation</h2>
<ol>
<li>Install Node.js</li>
<li>Install MongoDB</li>
<li>Create Mongo database and a user for database</li>
<p>Helpfull mongo CLI commands: </br>
<code>use vaccinedb</code> </br>
<code>db.createUser(
   {
     user: "vaccineuser",
     pwd: passwordPrompt(),
     roles: [ "readWrite", "dbAdmin" ]
   }
)
</code>
</p>
<li>Clone repository <code>https://github.com/Jonne116/vacproj.git</code></li>
<li>Create <code>.env</code> file to project root directory</li>
<li>Write enviroment variables to <code>.env</code> file: </br>
<code>
MONGO_URI=mongodb://username:password@host:port/database?retryWrites=true&w=majority </code></br>
<em>Replace username, password, host, port and database</em></br>
<code>PORT=3002</code><em>(Optional node port, defaults to 3002)</em></br>
<code>PORT_WEBPACK=2003</code><em>(Optional webpack dev-server port, defaults to 3003)</em></br>
<li>In project folder, run command:</br> 
<code>npm run setup</code></br>
</li>
<li>To start server:</br><code>npm run start</code><em>(Defaults to port 3002)</em></li>
</ol>

<h2>Scripts</h2>
<div>
<code>npm run setup</code><p>Install modules, add data to database, build frontend and run tests</p>
<code>npm run start</code><p>Start server</p>
<code>npm run client</code><p>Start webpack dev-server</p>
<code>npm run server</code><p>Start node.js dev-server</p>
<code>npm run dev</code><p>Start both, webpack and node.js dev-servers concurrently</p>
<code>npm run build</code><p>Build frontend <em>(./server/static/)</em></p>
<code>npm run test</code><p>Run tests</p>
</div>