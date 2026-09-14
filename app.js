

const express = require('express');
const app = express();


const mcp = require('./mcp');

app.use(express.json());
app.post('/public',  mcp);

app.listen(7020, function() {
    console.log("\tport 7020 is open for business!");
});

