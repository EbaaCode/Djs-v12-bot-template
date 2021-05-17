const Discord = require('discord.js');
const color = require(`../../util/color.json`); //Colors & emojis.

module.exports = (client) => {
    client.on('guildMemberAdd', async (member) => {
        const embed = new Discord.MessageEmbed()
            .setColor(color.darkGreen)
            .setDescription(`${member} joined the server!`)
        client.channels.cache.get('ChannelID').send(embed);
    })
}
