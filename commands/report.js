var Discord = require("discord.js");
var config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Nie mogę znaleźć tego użytkownika.");
    let rreason = args.join(" ").slice(22);
    if(!args.join(" ").slice(22)){
      rreason = '`Nie podano powodu`'
    }
    let reportEmbed = new Discord.RichEmbed()
    .setTitle("Zgłoszono użytkownika")
    .setColor(config.embed_color)
    .addField("Zgłoszony użytkownik", `${rUser}`)
    .addField("Zgłoszono przez", `${message.author}`,true)
    .addField("Na kanale", message.channel,true)
    .addField("O godzinie", message.createdAt.getHours() +1 + ":" + message.createdAt.getMinutes(),true)
    .addField("Powód", rreason,true);

    let reportschannel = message.guild.channels.find(`name`, "log");
    if(!reportschannel) return message.channel.send("Nie mogę znaleć kanału `log`");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report",
  category:"util",
  description:"Zgłasza użytkownika",
  use:"log!report @osoba"
}
