const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "clear",
    description: "clears an ampunt of messages",
    permission: "MANAGE_MESSAGES",
    async run(message, args, client){

        const amount = args[1];

        if(!amount) return message.reply("You must have a number of messages to clear!");
        if(isNaN(amount)) return message.reply(`${amount} is not a valid number!`);

        const amountParsed = parseInt(amount);

        if (amountParsed > 100) return message.reply("You cannot clear more than 100 messages!");

        message.channel.bulkDelete(amountParsed);

        const msg = await message.channel.send(`Cleared ${amountParsed} messages!`);

        setTimeout(() => msg.delete(), 5000);

    }
});