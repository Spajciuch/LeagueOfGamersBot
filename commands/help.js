const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle(">Lista dostępnych komend")
    .setColor(config.embed_color)
    .addField(">Administarcyjne", client.commands.filter(cmd => cmd.help.category === 'admin').map(cmd => '\ ' +"**>"+ cmd.help.name + "**"+` - ${cmd.help.description}` +'\ ').join("\n"))
    .addField(">Użytkowe", client.commands.filter(cmd => cmd.help.category === 'util').map(cmd => '\ '  +"**>"+ cmd.help.name + "**"+` - ${cmd.help.description}`+ '\ ').join("\n"))
    .setFooter("Komendy",client.user.avatarURL)
    message.channel.send(embed)
}
module.exports.help = {
  name: "help"
}
// if(args[0]){
//   let embed = new Discord.RichEmbed()
//   .setTitle("Informacje o komendzie")
//   .addField("Użycie",client.commands.filter(cmd => cmd.help.name === args[0]).map(cmd => '\ ' + cmd.help.use + '\ '),true)
//   .addField("Opis komendy",client.commands.filter(cmd => cmd.help.name === args[0]).map(cmd => '\ ' + cmd.help.description + '\ '), true)
//   .setColor(config.embed_color)
//     message.channel.send({embed})
//   } else {
//   let pages = [`**Prefix: log!**\nAby uzykać informacje o komendzie: log!help <nazwa komendy>\nLiczba wszystkich komend: ${client.commands.size}`, '**Komendy Administarcyjne**\n'+ client.commands.filter(cmd => cmd.help.category === 'admin').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n"), '**Komendy Użytkowe**\n'+client.commands.filter(cmd => cmd.help.category === 'util').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n")];
//   let page = 1;
//
//   const embed = new Discord.RichEmbed()
//     .setColor(config.embed_color)
//     .setFooter(`Strona ${page} z ${pages.length}`)
//     .setDescription(pages[page-1])
//
//   message.channel.send(embed).then(msg => {
//
//     msg.react('⏪').then( r => {
//       msg.react('⏩')
//
//       const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
//       const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
//
//       const backwards = msg.createReactionCollector(backwardsFilter);
//       const forwards = msg.createReactionCollector(forwardsFilter);
//
//
//       backwards.on('collect', r => {
//         if (page === 1) return;
//         page--;
//         embed.setDescription(pages[page-1]);
//         embed.setFooter(`Strona ${page} z ${pages.length}`);
//         msg.edit(embed)
//       })
//
//       forwards.on('collect', r => {
//         if (page === pages.length) return;
//         page++;
//         embed.setDescription(pages[page-1]);
//         embed.setFooter(`Strona ${page} z ${pages.length}`);
//         msg.edit(embed)
//       })
//
//     })
//
//   })
// }
