const Command = require("../Structures/Command");
const Discord = require("discord.js");

module.exports = new Command({
    name: "invite",
    description: "gives a bot invite link",
    async run(message, args, client){

        const embed = new Discord.MessageEmbed()
        embed
            .setTitle("Invite Brook Bot")
            .setColor("#e37b4a")
            .setDescription("Thank you for using BrookBot! If you want to invite Brook to one of your servers, you can use the invite link [here](https://discord.com/oauth2/authorize?client_id=878045878227705898&scope=bot&permissions=2956274814)")
            .setThumbnail("https://cdn.discordapp.com/attachments/878094699930456127/879549753019469824/invite.png")
            .setTimestamp()

        message.channel.send({ embeds: [embed] });
    }
});