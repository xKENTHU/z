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
    .setType('PLAYING')//
    .setState('Est 2020')//
    .setName('Nightmare 🥀')//
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1165517604610392115/1170298078239137792/ezgif-3-e783e81a92.gif?ex=664bc4c4&is=664a7344&hm=c60e09daf14d7b6b93b2966bf61acc7dacf361cf50cde45c4389a20211f52e5f&') // Large Image 
    .setAssetsLargeText('Nightmare Community') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1165517135699771394/1176931203283177543/verified-logo.gif?ex=664c2b59&is=664ad9d9&hm=a1795d93a11bf23480b35809fff54e1572fe84ee56e6a8361cb1d4d376c9a94a&') // Small image
    .setAssetsSmallText('NM') //Text when you hover the Small image
.addButton('JOIN','https://discord.gg/xnightmare');// button 2

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
 // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret); 
