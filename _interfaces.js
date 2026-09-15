

const { data, devices, messages } = require('./_data');

module.exports = {

    get_data: function() {
        return data;
    },

    get_devices: function() {
        return devices;
    },

    get_messages: function() {
        return messages;
    }

}

