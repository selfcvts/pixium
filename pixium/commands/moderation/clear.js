module.exports = {
  name: 'clear',
  description: 'Deletes messages. Usage: ,clear <1-100>',
  async execute(message, args) {
    if (!message.member.permissions.has('ManageMessages')) return message.reply('❌ No permission.');
    const amount = parseInt(args[0]);
    if (!amount || amount < 1 || amount > 100) return message.reply('❌ Provide a number 1–100.');
    await message.channel.bulkDelete(amount + 1, true).catch(() => message.reply('❌ Could not delete (messages may be >14 days old).'));
    const confirm = await message.channel.send(`🧹 Deleted **${amount}** message(s).`);
    setTimeout(() => confirm.delete().catch(() => {}), 3000);
  },
};
