var Discord = require("discord.js");
var ms = require("ms");
var config = require('../config.json')
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie masz uprawnień");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("nie mogę znaleźć tego użytkownika.");
    let muterole = message.guild.roles.find(`name`, "Muted");
    log = message.guild.channels.find("name", "log")
    url = client.users.get(tomute.id)
    console.log(url.avatarURL)
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

    let mutetime = args[1];
    if (!mutetime) return message.reply("Nie ustaliłeś czasu");

    await (tomute.addRole(muterole.id));
    let embed = new Discord.RichEmbed()
    .setAuthor("Mute", url.avatarURL)
    .setColor(config.embed_color)
    .addField("Osoba", tomute, true)
    .addField("Wyciszono na", mutetime, true)
    .addField("Wyciszono przez", message.author, true)
    log.send(embed)
    setTimeout(function() {
        tomute.removeRole(muterole.id);
        let embed = new Discord.RichEmbed()
        .setAuthor("Mute",url.avatarURL)
        .setColor(config.embed_color)
        .addField("Osoba", tomute, true)
        .addField("Był wyciszony na", mutetime, true)
        .addField("Wyciszony przez", message.author, true)
        log.send(embed)
    }, ms(mutetime));
}

module.exports.help = {
    name: "mute",
    category:"admin",
  description:"Mutuje osobe na określony czas",
  use:"log!mute @osoba <czas>"
}
