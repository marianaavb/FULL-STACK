const express = require('express');
const app = express();
const http = require('http');

app.use(express.static('public'));

let server = http.createServer(app);
server.listen(3000);

