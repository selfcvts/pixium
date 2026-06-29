const fs = require('fs');
const path = require('path');
const configFile = path.join(__dirname, '../../data/config.json');

function load() {
  if (!fs.existsSync(configFile)) return {};
  return JSON.parse(fs.readFileSync(configFile, 'utf8'));
}
function save(data) {
  fs.writeFileSync(configFile, JSON.stringify(data, null, 2));
}

module.exports = {
  name: 'setlogchannel',
  description: 'Sets the log channel. Usage: ,setlogchannel #channel',
  execute(message, args) {
    if (!message.member.permissions.has('ManageGuild')) return message.reply('❌ No permission.');
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('❌ Mention a channel.');
    const data = load();
    if (!data[message.guild.id]) data[message.guild.id] = {};
    data[message.guild.id].logChannel = channel.id;
    save(data);
    message.reply(`✅ Log channel set to ${channel}`);
  },
};
