const wa = require('@open-wa/wa-automate');
const fs = require('fs');

wa.create().then(client => start(client));

const prefix = 'v!'

function start(client) {
  let commands = new Map()
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
  const commandFile = require(`./commands/${file}`)
  commands.set(commandFile.name, commandFile);
}
console.log(commands)
  client.onMessage(async message => {
    if(!message.body.toLowerCase().startsWith(prefix)) return;
    if(message.from === '6285607347186@c.us') return await client.sendText(message.from, 'Nice Bro GG, Lo Udh Di Blacklist GBLK !');
    else if(message.author && message.author === '6285607347186@c.us') return await client.sendText(message.from, 'Nice Bro GG, Lo Udh Di Blacklist GBLK !');
    const args = message.body.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift()
    let command = commands.get(cmd)
    if(!command) return;
        try {
          command.run(client, message, args);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
    })
  }
