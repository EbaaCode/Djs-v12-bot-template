const Discord = require('discord.js');
const color = require(`../util/color.json`); //Colors & emojis.
const embeds = require(`../util/embed.js`); //Embeds.

//! Ping Command.
module.exports = {
    name: "example",
    aliases: ["example", "test"],
    description: "example command",
    async run(client, message, args) {
        let footer = `Usage: !example`;
        let description = (color.redTick + ' Error example.')
        embeds.errorEmbed(client, message, description, footer)
        description = (color.greenTick + ' Success example.')
        embeds.successEmbed(client, message, description)
        return;
    }
}
