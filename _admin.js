

process.on('SIGTERM', function() {
    console.log("\n\texiting...");
    process.exit(0);
})


module.exports = function(req,res,next) {
    let str = new Date().toLocaleString();
    str += "  "+req.method;
    str += "  "+req.url;

    if (req.body?.method) str += "  METHOD: "+req.body.method;
    if (req.body?.params?.clientInfo?.name) {
        str += "    CLIENT: ";
        str += req.body.params.clientInfo.name;
    }
    if (req.body?.method == "tools/call" && req.body?.params) {
        str += "    PARAMS";
        str += JSON.stringify(req.body.params);
    }
    console.log(str);
    next();
}