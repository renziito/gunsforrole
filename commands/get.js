const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!args) return message.reply("Debes ingresar el nombre del arma");
  let guns = JSON.parse("/assets.json");
  
  console.log(args);
  console.log(guns);
  
  let emb = new Discord.RichEmbed()
  .setAuthor("Tenga su "+args[1])
  .setColor("RANDOM")
  .setImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Ffuera.jpg?v=1564153257875")

  message.channel.send(emb)
}
module.exports.help = {
  name: "get"
}