var Discord = require("discord.js");
var config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie masz uprawnień.");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Nie mogę znaleźć tego użytkownika.");
    let rreason = args.join(" ").slice(22);
    if(!args.join(" ").slice(22)){
      rreason = '`Nie podano powodu`'
    }
    let reportEmbed = new Discord.RichEmbed()
    .setTitle("Zostałeś zgłoszony")
    .setColor(config.embed_color)
    .addField("Na Serwerze", message.guild)
    .addField("Zgłoszono przez", `${message.author}`,true)
    .addField("Na kanale", message.channel,true)
    .addField("O godzinie", message.createdAt.getHours() +1 + ":" + message.createdAt.getMinutes(),true)
    .addField("Powód", rreason,true);
    message.delete().catch(O_o=>{});
    rUser.send(reportEmbed);

}

module.exports.help = {
  name: "warn",
  category:"admin",
  description:"Zgłasza użytkownika (wysyła mu wiadomość na PW)",
  use:"log!report @osoba"
}
