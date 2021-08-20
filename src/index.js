console.clear();

const Client = require("./Structures/Client");

const config = require("./Data/config.json");

const client = new Client();

client.start(config.token);
