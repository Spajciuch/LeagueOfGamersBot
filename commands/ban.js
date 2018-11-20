const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Nie masz uprawnień.");
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("oznacz osobę do zbanowania.");
  if(!member.bannable)
    return message.reply("Nie mogę go zbanować, przesuń moją rolę na samą górę i upewnij się, że mam wszystkie uprawnienia");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = " `Nie podano powodu`";

  await member.ban(reason)
  let embed = new Discord.RichEmbed()
  .setTitle("Ban")
  .addField("Osoba",member.user.username, true)
  .addField("Banujący", message.author.username, true)
  .addField("Powód",reason, true)
  .setColor(config.embed_color)
  message.channel.send({ embed })
}
module.exports.help = {
	name: "ban",
  category:"admin",
  description:"Banuje osobę, którą oznaczysz",
  use:"log!ban <osoba>"
}
