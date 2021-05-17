const Discord = require('discord.js');
const client = new Discord.Client({
  ws: {
    intent: ['GUILDS', 'GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILD_BANS']
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER']
});

const fs = require('fs');
//! USE THIS FILE OR THE HOST ENV.
require('dotenv').config(); 
//const config = require('./config.json');
client.commands = new Discord.Collection();
//! BOT COMMAND PREFIX.
const prefix = "!" 
//! EVENT FILES.
const userJoin = require('./events/misc/userJoin.js')

//Log the bot is online and set status.
client.once('ready', async () => {
  console.log('Bot is online!');
  //! BOT STATUS.
  client.user.setActivity('ACTIVITY', { type: 'PLAYING' });
  commandFiles.forEach(command => {
    //Log commands that have been loaded.
    console.log(`✅ ${command} loaded.`) 
  })
  //! EVENTS.
  userJoin(client);
});

//! Command Files.
//! FILE TO LOAD THE COMMANDS.
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); 
for (const file of commandFiles) {
  const command = require(`./commands/${file}`); 
  client.commands.set(command.name, command);
}

client.on('message', async message => {
  //Check if the command was run by the bot / If the command was sent in DM's.
  if (message.author.bot) { return };
  if (message.channel.type === 'dm') { return };
  //! Command handler.
  if (message.content.startsWith(prefix)) {
    let args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
      || client.commands.find(command => command.aliases && command.aliases.includes(commandName))
    if (!command) return;
    try {
      command.run(client, message, args, prefix);
    } catch (error) {
      console.error(error);
    }
  }
});
//! CHANGE BOT TOKEN IN THE .ENV FILE. 
client.login(process.env.BOT_TOKEN);


