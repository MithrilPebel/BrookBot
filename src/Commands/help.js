const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "help",
    description: "Shows a list of commands",
    async run(message, args, client){

        const embed = new Discord.MessageEmbed();
        embed.setTitle("Brook Commands!");

        message.channel.send({ embeds: [embed] });

    }
});