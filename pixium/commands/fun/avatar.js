const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'Shows a user\'s avatar. Usage: ,avatar [@user]',
  execute(message, args) {
    const target = message.mentions.users.first() || message.author;
    const url = target.displayAvatarURL({ size: 512, extension: 'png' });
    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle(`${target.username}'s Avatar`)
      .setImage(url)
      .setFooter({ text: `ID: ${target.id}` });
    message.reply({ embeds: [embed] });
  },
};
