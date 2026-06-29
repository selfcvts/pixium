module.exports = {
  name: 'untimeout',
  description: 'Removes timeout from a member',
  async execute(message, args) {
    if (!message.member.permissions.has('ModerateMembers')) return message.reply('❌ No permission.');
    const target = message.mentions.members.first();
    if (!target) return message.reply('❌ Mention a member.');
    await target.timeout(null);
    message.reply(`✅ Removed timeout from **${target.user.username}**`);
  },
};
