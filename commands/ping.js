const Discord = require('discord.js');
const color = require(`../util/color.json`); //Colors & emojis.

//! Ping Command.
module.exports = {
    name: "ping",
    aliases: ["pong", "ping"],
    description: "ping command",
    async run(client, message, args) {
        const embedPing = new Discord.MessageEmbed()
            .setColor(color.green)
            .setDescription("Calculating ping...")
        message.channel.send(embedPing).then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            const embed = new Discord.MessageEmbed()
                .setColor(color.green)
                .setDescription(color.greenTick + " Pong!\n`" + `${ping}ms\``)
            resultMessage.edit(embed)
        })
    }
}
