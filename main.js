const Discord = require('discord.js');
const client = new Discord.Client({
  ws: {
    intent: ['GUILDS', 'GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILD_BANS']
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER']
});

//! USE THIS FILE OR THE HOST ENV.
require('dotenv').config();
//! COMMAND / EVENT HANDLERS.
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
let handlers = ['commandHandler.js', 'eventHandler.js']
handlers.forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})
//! CHANGE BOT TOKEN IN THE .ENV FILE. 
client.login(process.env.BOT_TOKEN);


