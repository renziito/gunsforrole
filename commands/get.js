const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply("Debes ingresar el nombre del arma");
  let guns = JSON.parse(fs.readFileSync("./assets.json"));
  let gun = args[0];
  console.log(gun);
  let name = guns[gun].name;
  let image = guns[gun].image;
  
  let emb = new Discord.RichEmbed()
  .setAuthor("Tenga su "+name)
  .setColor("RANDOM")
  .setImage(image)

  message.channel.send(emb)
}
module.exports.help = {
  name: "get"
}