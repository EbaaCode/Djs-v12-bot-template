const Discord = require('discord.js');

module.exports = {
    name: "ready",
    once: "true",
        //Log the bot is online and set status.
        execute(client) {
        console.log(`${client.user.username} is online!`);
        //! BOT STATUS.
        // Type: PLAYING / WATCHING / LISTENING / STREAMING
        client.user.setActivity('STATUS', { type: 'PLAYING' });
    }
}
