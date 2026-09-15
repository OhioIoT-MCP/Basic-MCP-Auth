
const express = require('express');
const app = express();

const log = require('./_admin');
const auth = require('./auth');
const mcp = require('./_mcp');

app.use(express.json());

app.use(log);

app.post('/public', auth, mcp);

app.listen(7020, function() {
    console.log("\n\n\tport 7020 is open for business!\n\n");
});







