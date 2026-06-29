const fs = require('fs');
const path = require('path');
const warnFile = path.join(__dirname, '../../data/warnings.json');

function loadWarns() {
  if (!fs.existsSync(warnFile)) return {};
  return JSON.parse(fs.readFileSync(warnFile, 'utf8'));
}

function saveWarns(data) {
  fs.writeFileSync(warnFile, JSON.stringify(data, null, 2));
}

module.exports = {
  name: 'warn',
  description: 'Warns a member. Usage: ,warn @user [reason]',
  async execute(message, args) {
    if (!message.member.permissions.has('ModerateMembers')) return message.reply('❌ No permission.');
    const target = message.mentions.members.first();
    if (!target) return message.reply('❌ Mention a member.');
    const reason = args.slice(1).join(' ') || 'No reason';
    const data = loadWarns();
    const key = `${message.guild.id}_${target.id}`;
    if (!data[key]) data[key] = [];
    data[key].push({ reason, by: message.author.id, at: Date.now() });
    saveWarns(data);
    message.reply(`⚠️ Warned **${target.user.username}** (${data[key].length} total) | ${reason}`);
  },
};
