const Event = require("../Structures/Event.js");

module.exports = new Event("ready", (client) => {
  console.log("BronyBot is Online!");

  client.user.setActivity("b!help for commands!");
});
