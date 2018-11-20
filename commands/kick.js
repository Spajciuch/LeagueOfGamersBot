const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Nie masz uprawnień.");
      let member = message.mentions.members.first();
      if (!member)
        return message.reply("Oznacz właściwą osobę");
      if (!member.kickable)
        return message.reply("Nie mogę wywalić tej osoby, czy mam wszystkie uprawnienia");


      let reason = args.slice(1).join(' ');
      if(!reason) reason = " `Nie podano powodu`";

      await member.kick(reason)
        .catch(error => message.reply(`${message.author} Nie mogłem wykopać usera, powód: ${error}`));
      let embed = new Discord.RichEmbed()
      .setTitle('Kick')
      .addField("Osoba",member.user.username, true)
      .addField("Wywalono przez", message.auhor.username, true)
      .addField("Powód", reason, true)
      .setColor(config.embed_color)
      message.channel.send(embed)
}
module.exports.help = {
	name: "kick",
  category:"admin",
  description:"Kickuje osobę",
  use:"log!kick @osoba"
}
