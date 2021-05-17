const Discord = require('discord.js');
const color = require(`../util/color.json`); //Colors & emojis.
module.exports = {
    //! Error Embed.
    async errorEmbed(client, message, description, footer) {
        if(footer == undefined) footer = ""
        const errorEmbed = new Discord.MessageEmbed()
            .setDescription(`${description}`)
            .setColor(color.red)
            .setFooter(`${footer}`)
        message.channel.send(errorEmbed);
    },
    //! Success Embed.
    async successEmbed(client, message, description) {
        const successEmbed = new Discord.MessageEmbed()
            .setDescription(`${description}`)
            .setColor(color.green)
        message.channel.send(successEmbed);
    }
}
