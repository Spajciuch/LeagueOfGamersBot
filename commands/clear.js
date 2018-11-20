const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie masz uprawnień.");
  if(!args[0]) return message.channel.send("Podaj liczbę wiadomości do usunięcia.");
  // if(Number(args[0])>100){
  //   var a = Number(args[0])
  //   var b = Math.floor((a / 100) % 10);
  //   var d = b*100
  //   var e = a - d
  //   console.log(a)
  //   console.log(Number(b))
  //   // console.log(c)
  //   console.log(d)
  //   console.log(e)
  //   for(i=0;i<Number(b);i++){
  //     message.channel.bulkDelete(100)
  //     console.log("Usuwam 100")
  //   }
  //   message.channel.bulkDelete(e).then(del => message.channel.send("Usunięto " + args[0] + " wiadomości").then(msg => msg.delete(2000)))
  // } else {
    message.channel.bulkDelete(Number(args[0]))
    message.channel.send("Usunięto " + args[0] + " wiadomości").then(msg => msg.delete(2000))
  }
module.exports.help = {
  name: "clear",
  category:"admin",
  description:"Czyści wiadomości ",
  use:"log!clear <liczba>"
}
