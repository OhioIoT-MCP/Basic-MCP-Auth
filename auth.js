

module.exports = function(req,res,next) {

    if (!process.env.MCP_KEY) {
        console.log("auth key must be provided");
        process.exit(1);
    }

    if (req.get('x-api-key') !== process.env.MCP_KEY) {
        console.log("-- rejected:", new Date().toLocaleString());
        return res.sendStatus(401);
    }

    next();

}