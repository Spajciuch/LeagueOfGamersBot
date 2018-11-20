var Discord = require("discord.js");
var config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  message.channel.send(args.join(" "))
  message.delete()
}
module.exports.help = {
	name: "say",
	category:"util",
  description:"Wysyła wiadomość",
  use:"log!say <wiadomość>"
}
