const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'userinfo',
  description: 'Shows info about a user',
  async execute(message, args) {
    const target = message.mentions.members.first() || message.member;
    const user = target.user;
    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle(`${user.username}`)
      .setThumbnail(user.displayAvatarURL({ size: 256 }))
      .addFields(
        { name: 'ID', value: user.id, inline: true },
        { name: 'Nickname', value: target.nickname || 'None', inline: true },
        { name: 'Account Created', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: false },
        { name: 'Joined Server', value: `<t:${Math.floor(target.joinedTimestamp / 1000)}:R>`, inline: false },
        { name: 'Roles', value: target.roles.cache.filter(r => r.id !== message.guild.id).map(r => r.toString()).join(', ') || 'None' },
      )
      .setFooter({ text: `Requested by ${message.author.username}` });
    message.reply({ embeds: [embed] });
  },
};
