const express = require('express');

const PORT = 4000;

const app = express();

app.get('/', (req,res)=> res.send('<h1>Hello every body, thank you for being her.</h1>') );

app.listen(PORT, ()=> console.log('listening on port: ' + PORT));
