module.exports = {
  name: 'kick',
  description: 'Kicks a member',
  async execute(message, args) {
    if (!message.member.permissions.has('KickMembers')) return message.reply('❌ No permission.');
    const target = message.mentions.members.first();
    if (!target) return message.reply('❌ Mention a member.');
    if (!target.kickable) return message.reply('❌ Cannot kick that member.');
    const reason = args.slice(1).join(' ') || 'No reason';
    await target.kick(reason);
    message.reply(`✅ Kicked **${target.user.username}** | ${reason}`);
  },
};
