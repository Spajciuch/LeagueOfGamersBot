var Discord = require('discord.js')
var client = new Discord.Client({disableEveryone: true})
var firebase = require('firebase')
var config = require('./config.json')
var fs = require('fs')
client.commands = new Discord.Collection()
var fireconfig = {
  apiKey: "AIzaSyCqu0RMFW9jc61taWyL9YME36YvngEE8Yo",
  authDomain: "leagueoofgamers.firebaseapp.com",
  databaseURL: "https://leagueoofgamers.firebaseio.com",
  projectId: "leagueoofgamers",
  storageBucket: "leagueoofgamers.appspot.com",
  messagingSenderId: "434427616443"
};
firebase.initializeApp(fireconfig);
var database = firebase.database()

client.on('ready', () => {
  console.log(`[client] Gotowy do działania`)
  console.log(`[client] Zalogowano jako ${client.user.tag}`)
})
fs.readdir(`./commands/`,(err, files)=>{
  if(err) console.log(err)
  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if(jsfile.length <= 0){
    console.log("Nie znaleziono komend!")
  }
  jsfile.forEach((f,i)=> {
    let props = require(`./commands/${f}`)
    console.log(`[Załadowano] ${f}`)
    client.commands.set(props.help.name, props)
  })
})
client.on("message", message => {
    let messageArray = message.content.split(" ");
    let prefix = config.prefix
    let cmd = messageArray[0];
    var args = message.content.slice(prefix.length).trim().split(/ +/g);;
    var command = args.shift().toLowerCase();
    var embd = new Discord.RichEmbed()
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client, message, args);
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    if(message.author.bot) return;
})
client.on("guildMemberAdd", member => {
  member.send(":star: Witaj na serwerze **League Of Gamers** :star: \n:zap: Tematyka serwera to gry komputerowe.\n:zap: Właścicielem serwera jest **TechDaniel**.\n:zap: Przeczytaj kanał #regulamin! \n:zap: Na kanale #role-4fun i #role-gry znajdują się rangi, które można sobie dodać.\n:zap: Oficjalny Link Serwera Discord: https://discord.gg/cjDuCF6")
})
const Music = require('discord.js-musicbot-addon-v2-pl');
const music = new Music(client, {

  prefix: config.prefix,
  youtubeKey: config.yt,
  embedColor: 65290,
  enableQueueStat: true,
  botAdmins: [316226442721755137, 367390191721381890],
  clearOnLeave: true,
  disableVolume: true,
  djRole: "@everyone"

});
client.login(config.token)
