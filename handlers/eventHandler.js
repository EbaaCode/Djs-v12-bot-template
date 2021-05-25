const fs = require('fs');

module.exports = (client, prefix, Discord) => {
    const eventFiles = fs.readdirSync(`./events/`).filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
        const event = require(`../events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
    eventFiles.forEach(event => {
        //Log events that have been loaded.
        console.log(`✅ ${event} loaded.`)
    })
}
