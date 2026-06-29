const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'serverinfo',
  description: 'Shows server info',
  async execute(message) {
    const g = message.guild;
    await g.fetch();
    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle(g.name)
      .setThumbnail(g.iconURL({ size: 256 }))
      .addFields(
        { name: 'ID', value: g.id, inline: true },
        { name: 'Owner', value: `<@${g.ownerId}>`, inline: true },
        { name: 'Members', value: `${g.memberCount}`, inline: true },
        { name: 'Channels', value: `${g.channels.cache.size}`, inline: true },
        { name: 'Roles', value: `${g.roles.cache.size}`, inline: true },
        { name: 'Boost Level', value: `${g.premiumTier}`, inline: true },
        { name: 'Created', value: `<t:${Math.floor(g.createdTimestamp / 1000)}:R>` },
      );
    message.reply({ embeds: [embed] });
  },
};
