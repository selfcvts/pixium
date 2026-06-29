module.exports = {
  name: 'ban',
  description: 'Bans a member',
  async execute(message, args) {
    if (!message.member.permissions.has('BanMembers')) return message.reply('❌ No permission.');
    const target = message.mentions.members.first();
    if (!target) return message.reply('❌ Mention a member.');
    if (!target.bannable) return message.reply('❌ Cannot ban that member.');
    const reason = args.slice(1).join(' ') || 'No reason';
    await target.ban({ reason, deleteMessageSeconds: 86400 });
    message.reply(`✅ Banned **${target.user.username}** | ${reason}`);
  },
};
