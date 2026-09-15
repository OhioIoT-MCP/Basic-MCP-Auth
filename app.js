
const express = require('express');
const app = express();

const log = require('./_admin');
const auth = require('./auth');
const mcp = require('./_mcp');

app.use(express.json());

app.use(log);

app.post('/private', auth, mcp);    // changed so we can keep the no-auth /public alive

app.listen(7020, function() {
    console.log("\n\n\tport 7020 is open for business!\n\n");
});







