const Discord = require('discord.js');

module.exports = {
    name: "ready",
    once: "true",
        //Log the bot is online and set status.
        execute(client) {
        console.log('Bot is online!');
        //! BOT STATUS.
        client.user.setActivity('ACTIVITY', { type: 'PLAYING' });
    }
}
