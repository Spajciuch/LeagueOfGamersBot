var Discord = require("discord.js");
var config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(message.mentions.members.first()){
    var member = message.mentions.members.first()
    let embed = new Discord.RichEmbed()
    .setAuthor(`Avatar użytkownika ${member.user.tag}`, member.user.avatarURL)
    .setImage(member.user.avatarURL)
    .setColor(config.embed_color)
    message.channel.send(embed)
  } else {
    let embed = new Discord.RichEmbed()
    .setAuthor('Twój avatar', message.author.avatarURL)
    .setImage(message.author.avatarURL)
    .setColor(m=config.embed_color)
    message.channel.send(embed)
  }
}
module.exports.help = {
	name: "avatar",
	category:"util",
  description:"Wyświetla avatar osoby (albo twój, jeśli nikogo nie oznaczysz)",
  use:"log!avatar [niekoniecznie] @osoba"
}
