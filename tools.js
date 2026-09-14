

const { get_data, get_devices, get_messages } = require('./interfaces');

module.exports = [
    {
        name: "get_data",
        config: {
            description: "This dataset has historical data from several IoT sensors attached to our system.  Individual devices can publish several different data points.  The type and unit for each data point are provided.",
            annotations: {
                readOnlyHint: true,
                openWorldHint: false
            },
        },
        handler: async function() {
            const response = await get_data();
            return { content: [{ type: 'text', text: JSON.stringify(response) }] }
        }
    },
        {
        name: "get_devices",
        config: {
            description: "This dataset represents the digital twins for the various devices attached to our IoT system.",
            annotations: {
                readOnlyHint: true,
                openWorldHint: false
            },
        },
        handler: async function() {
            const response = await get_devices();
            return { content: [{ type: 'text', text: JSON.stringify(response) }] }
        }
    },
        {
        name: "get_messages",
        config: {
            description: "This tool returns a list of messages current stored against our IoT system.  It should represent a history of activity on the account.",
            annotations: {
                readOnlyHint: true,
                openWorldHint: false
            },
        },
        handler: async function() {
            const response = await get_messages();
            return { content: [{ type: 'text', text: JSON.stringify(response) }] }
        }
    }
];