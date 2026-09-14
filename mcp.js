

const { McpServer } = require('@modelcontextprotocol/sdk/server/mcp.js');
const { StreamableHTTPServerTransport } = require('@modelcontextprotocol/sdk/server/streamableHttp.js');

const tools = require('./tools');

module.exports = async function(req,res) {

    const server = new McpServer({ name: 'demo_mcp', version: '0.1.0' });
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });

    tools.forEach(function(tool) {
        server.registerTool(tool.name, tool.config, tool.handler);
    });

    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);

};