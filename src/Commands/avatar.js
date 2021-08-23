const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "avatar",
    description: "Replies with the users avatar",
    async run(message, args, client){
        const embed = new Discord.MessageEmbed();

        embed 
            .setTitle(`${message.author.username}'s Avatar!`)
            .setColor("#e37b4a")
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setImage(message.author.avatarURL({ "size": 512, "dynamic": true, "format": "png" }))

        message.channel.send({ embeds: [embed] });
    }
})