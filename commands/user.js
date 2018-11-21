var Discord = require("discord.js");
var config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  var moment = require('moment')
  var ms = require('ms')
  var member = message.mentions.members.first()
  var user = client.users.get(member.id)
  var status = user.presence.status
  let embed = new Discord.RichEmbed()
      .setAuthor(`Informacje o ${user.tag}`, user.displayAvatarURL)
      .setColor(config.embed_color)
      .setFooter(`Informacje z dnia ${moment(new Date).format("DD.MM.YY")}`)
  		.addField("Nick:", `${member.nickname !== null ? `${member.nickname}` : 'Brak'}`, true)
  		.addField("Dołączył na Discord:", `${moment.utc(user.createdAt).format('DD.MM.YY')}`, true)
  		.addField("Dołączył na serwer:", `${moment.utc(member.joinedAt).format('DD.MM.YY')}`, true)
  		.addField("Bot(?):", `${user.bot}`, true)
  		.addField("Status:", `${user.presence.status.replace("dnd", "Don't disturb")}`, true)
  		.addField("Gra w:", `${user.presence.game ? user.presence.game.name : 'Nic'}`, true)
      .addField("ID:", `${user.id}`, true)
  		.addField("Role:", member.roles.map(roles => `${roles.name}`).join(', '))


  message.channel.send(embed)

}
module.exports.help = {
	name: "info",
	category:"info",
  description:"Wyświetla informacje na temat danego Gracza.",
  use:"log!info @osoba"
}
