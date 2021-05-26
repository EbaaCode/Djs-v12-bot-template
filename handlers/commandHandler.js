const fs = require('fs');

module.exports = (client, prefix, Discord) => {
    //! Command Files.
    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        client.commands.set(command.name, command);
    }
    commandFiles.forEach(command => {
        //Log commands that have been loaded.
        console.log(`✅ ${command} loaded.`)
    })

    client.on('message', async message => {
        //! MENTION PREFIX.
        let prefix;
        let mentionRegex = message.content.match(new RegExp(`^<@!?(${client.user.id})>`, 'gi'))
        if (mentionRegex) {
            prefix = `${mentionRegex[0]} `
        } else {
            //! COMMAND PREFIX
            prefix = '!'
        }
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
}