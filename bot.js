const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.Njg4OTk2NjE4NTczMzE2MDk2.Xm9DHw.Zs140AzB94CrUcAqO_VzSLC9TUw);//where BOT_TOKEN is the token of our bot 
