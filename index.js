const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});










const keepAlive = require('./server.js');
keepAlive();



client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1168135681047023657')//
    .setType('STREAMING')//
    .setState('Est 2020 <3')//
    .setName('L')//
    .setDetails(`Nightmare 🥀`)//
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1165517135699771394/1189170428606955540/ezgif-3-e783e81a92.gif?ex=6649e4c3&is=66489343&hm=f5cd0827e2372444a4147e2e67dc93df73306029254195a848f611e645930538&') // Large Image 
    .setAssetsLargeText('Nightmare') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1165517135699771394/1176931203283177543/verified-logo.gif?ex=66498859&is=664836d9&hm=262af5b9add1f029af3b112b7236248527fbbc8fbfb9e68ebd27c147d2367193&') // Small image
    .setAssetsSmallText('NM') //Text when you hover the Small image
.addButton('JOIN','https://discord.gg/xnightmare');// button 2

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
 // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret); 
