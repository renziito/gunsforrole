const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const mentionedUser = message.mentions.users.first() || message.author;
  
  
  let emb = new Discord.RichEmbed()
  .setAuthor("Tenga su "+name)
  .setColor("RANDOM")
  .setImage("");

  message.channel.send(emb)
}
module.exports.help = {
  name: "revive"
}