var Discord = require("discord.js");
var config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie masz uprawnień.");
  message.channel.send(args.join(" "))
  message.delete()
}
module.exports.help = {
	name: "admin",
	category:"util",
  description:"Wysyła wiadomość",
  use:"log!say <wiadomość>"
}
