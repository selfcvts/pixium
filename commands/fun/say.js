module.exports = {
  name: 'say',
  description: 'Makes the bot say something. Usage: ,say <text>',
  async execute(message, args) {
    if (!message.member.permissions.has('ManageMessages')) return message.reply('❌ No permission.');
    if (!args.length) return message.reply('❌ Provide text.');
    await message.delete().catch(() => {});
    message.channel.send(args.join(' '));
  },
};
