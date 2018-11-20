const Discord = require("discord.js");
const ms = require("ms");
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie masz uprawnień");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("nie mogę znaleźć tego użytkownika.");
    let muterole = message.guild.roles.find(`name`, "Muted");
    log = message.guild.channels.find("name", "log")
    url = client.users.get(tomute.id)
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
tomute.removeRole(muterole.id);
  let embed = new Discord.RichEmbed()
  .setAuthor("Mute", url.avatarURL)
  .setColor(config.embed_color)
  .addField("Osoba", tomute, true)
  .addField("Odciszono przez", message.author, true)
  log.send(embed)

}
module.exports.help = {
    name: "unmute",
    category:"admin",
    description:"Odcisza użytkownika",
    use:"log!unmute @osoba"
}
