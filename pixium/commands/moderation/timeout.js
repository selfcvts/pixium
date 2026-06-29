module.exports = {
  name: 'timeout',
  description: 'Times out a member. Usage: ,timeout @user <minutes> [reason]',
  async execute(message, args) {
    if (!message.member.permissions.has('ModerateMembers')) return message.reply('❌ No permission.');
    const target = message.mentions.members.first();
    if (!target) return message.reply('❌ Mention a member.');
    const minutes = parseInt(args[1]);
    if (!minutes || minutes < 1) return message.reply('❌ Provide minutes (e.g. ,timeout @user 10).');
    const reason = args.slice(2).join(' ') || 'No reason';
    await target.timeout(minutes * 60 * 1000, reason);
    message.reply(`✅ Timed out **${target.user.username}** for **${minutes}m** | ${reason}`);
  },
};
