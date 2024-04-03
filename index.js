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
    .setApplicationId('1204154123025387573')//
    .setType('STREAMING')//
    .setURL('https://www.youtube.com/watch?v=crT_ySezWhU') //
    .setState('Python <3')//
    .setName('Love u All <3')//
    .setDetails(`Syntax 🥀`)//
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1192431004376387654/1222556417882460241/alcholic.gif?ex=6616a564&is=66043064&hm=db2ce45602e4a18eddc6989272c5b3a50dce41483aca183426a08076f65296c4&=&width=606&height=606') // Large Image 
    .setAssetsLargeText('Cyber Enthusiast') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/771191366121947176.gif') // Small image
    .setAssetsSmallText('BLACK TICK') //Text when you hover the Small image
    .addButton('SUBSCRIBE','https://www.youtube.com/@AuraCodez/')// button 1
.addButton('JOIN','https://discord.gg/hGZHsDT43q');// button 2

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
 // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret); 