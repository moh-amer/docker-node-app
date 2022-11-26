const express = require('express');

const PORT = 4000;

const app = express();

app.get('/', (req,res)=> res.send('<h1>Hello from node app, My name is Mohamed.</h1>') );

app.listen(PORT, ()=> console.log('listening on port: ' + PORT));
