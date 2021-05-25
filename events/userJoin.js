const Discord = require('discord.js');
const color = require(`../util/color.json`); //Colors & emojis.

module.exports = {
    name: "guildMemberAdd",
    execute(member, client) {
        const embed = new Discord.MessageEmbed()
            .setColor(color.darkGreen)
            .setDescription(`${member} joined the server!`)
        client.channels.cache.get('ChannelID').send(embed);
    }
}
