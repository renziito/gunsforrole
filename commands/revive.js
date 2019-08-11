const Discord = require('discord.js');
const { loadImage } = require("canvas");

module.exports.run = async (bot, message, args) => {
  const mentionedUser = message.mentions.users.first();
  
  if(typeof(mentionedUser)=="undefined") return message.reply("Debes mencionar a alguien");
  
  let emb = new Discord.RichEmbed()
  .setAuthor(mentionedUser.username + " ha sido reanimado")
  .setColor("RANDOM")
  .setImage("https://cdn.glitch.com/8001c8ec-f31b-4e99-a0f8-d2b02a0c3fb2%2F12.jpg?v=1565488589862");

  message.channel.send(emb)
}
module.exports.help = {
  name: "revive"
}