const express = require('express');

const app = express();

// middle ware
const fileServerMiddleware = express.static('public')
// mounting middleware
app.use('/',fileServerMiddleware)

// creating a port to listen to
app.listen(3000,() => console.log('listening at port 300'))