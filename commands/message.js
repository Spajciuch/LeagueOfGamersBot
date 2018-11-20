var Discord = require("discord.js");
var config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setColor(config.embed_color)
  .setDescription(args.join(" "))
  message.channel.send(embed)
}
module.exports.help = {
	name: "msg",
	category:"util",
  description:"Wysyła wiadomość w embed",
  use:"log!msg <wiadomość>"
}
