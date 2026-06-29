const { EmbedBuilder } = require('discord.js');

const commands = {
  '🔧 Utility': [
    ',ping — Bot latency',
    ',uptime — Bot uptime',
    ',userinfo [@user] — User info',
    ',serverinfo — Server info',
    ',avatar [@user] — Show avatar',
  ],
  '🛡 Moderation': [
    ',kick @user [reason] — Kick member',
    ',ban @user [reason] — Ban member',
    ',timeout @user <min> [reason] — Timeout member',
    ',untimeout @user — Remove timeout',
    ',warn @user [reason] — Warn member',
    ',clear <1-100> — Bulk delete messages',
  ],
  '⚙️ Admin': [
    ',setlogchannel #channel — Set log channel',
    ',enable <cmd> — Enable a command',
    ',disable <cmd> — Disable a command',
  ],
  '🎉 Fun': [
    ',say <text> — Bot repeats text',
    ',roll [sides] — Roll a dice',
  ],
};

module.exports = {
  name: 'help',
  description: 'Lists all commands',
  execute(message, args, client) {
    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle('Pixium — Command List')
      .setFooter({ text: `Prefix: ${client.prefix}` });

    for (const [cat, cmds] of Object.entries(commands)) {
      embed.addFields({ name: cat, value: cmds.join('\n') });
    }

    message.reply({ embeds: [embed] });
  },
};
