const express = require('express'); 
const app = express(); 
//const fs= require("fs")
app.listen(3000)

    console.log('Server is listening on port 3000'); 

  app.get('/', (req, res)=> res.sendFile(__dirname+"/index.html"));
