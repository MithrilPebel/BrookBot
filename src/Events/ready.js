const Event = require("../Structures/Event.js");

module.exports = new Event("ready", (client) => {
  console.log("Brook is Online!");

  client.user.setActivity("b!help for commands!");
});
