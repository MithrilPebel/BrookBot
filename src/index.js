console.clear();

const Client = require("./Structures/Client");
const Command = require("./Structures/Command");

const config = require("./Data/config.json");

const client = new Client();

const fs = require("fs");

fs.readdirSync("./src/Commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
        /**
         * @type {Command}
         */
        const command = require(`./Commands/${file}`);
        client.commands.set(command.name, command);
})

client.on("ready", () => {
    console.log("BronyBot is Online!");

    client.user.setActivity("b!help for commands");
});

client.on("messageCreate", message => {

    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.substring(config.prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return message.reply(`${args[0]} is not a valid command!`);

    command.run(message, args, client);

})

client.login(config.token);