const Discord = require("discord.js");
const config = require(`../config.json`)
const ms = require('ms')
module.exports.run = async (client, message, args) => {
var d = new Date()
var hour = d.getHours() +2
var minute = d.getMinutes()
var minute = `${minute}`.padStart(2, 0)
var time = hour + ":" + minute
	   const sys = require('computer-info')
   let info = new Discord.RichEmbed()
   	.setAuthor("Informacje o bocie")
   	.setColor(config.embed_color)
   	.addField("Informacje o systemie", `**Bot działa na:** ${sys().name}\n**System:** ${sys().osystem}\n**Procesor:** ${sys().cpu} (${sys().arch}) \n**Pamięć RAM:** ${sys().ram} GB (wolna: ${sys().freeram} GB)\n**Node:** ${sys().node}`)
   	.addField("Informacje o czasie",`**Czas Działania:** ${ms(client.uptime)}`)
   message.channel.send({embed: info})
}
module.exports.help = {
  category:"info",
	name: "status",
  description:"Przedstawia informacje o bocie",
  use:"log!info"
}
