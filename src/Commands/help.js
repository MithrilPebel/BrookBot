const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "help",
    description: "Shows a list of commands",
    async run(message, args, client){

        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setLabel("Support Server")
            .setURL("https://discord.gg/c9G3MjpPYj")
            .setStyle("LINK")
            
        )

        const embed = new Discord.MessageEmbed();
        embed
            .setTitle("Brook Commands!")
            .setColor("#e37b4a")
            .setThumbnail(client.user.avatarURL({ dynamic: true, "size": 256, "format": "png" }))
            .setDescription("For more help, use `b!help [command-name]` for more information about each command.")
            .addFields(
                { name: 'Server/Core', value: '`invite` `ping` `support` `prefix` `help` `server`', inline: true },
                { name: 'Moderation', value: '`clear` `mute` `kick` `ban` `warn` `warnings`', inline: true },
                { name: 'Fun', value: '`avatar` `8ball` `say` `hello` `rate` `animal` `meme`', inline: true },
                { name: 'Music', value: '`play` `leave` `pause` `resume` `queue` `skip` `voteskip` `loop`', inline: true },
                { name: 'MLP', value: '`pony` `mlp-quote` `mlp-art` `mlp-meme`', inline: true },
                { name: 'Pony Town', value: '`pt-help` `pt-v` `map` `pt-toys` `pt-staff` `pt-links`', inline: true }
            )
            

        message.channel.send({ embeds: [embed], components: [row] });

    }
});