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
  name: 'enable',
  description: 'Enables a command. Usage: ,enable <commandname>',
  execute(message, args, client) {
    if (!message.member.permissions.has('ManageGuild')) return message.reply('❌ No permission.');
    const cmdName = args[0]?.toLowerCase();
    if (!cmdName || !client.commands.has(cmdName)) return message.reply('❌ Unknown command.');
    const data = load();
    if (!data[message.guild.id]) data[message.guild.id] = {};
    if (!data[message.guild.id].disabled) data[message.guild.id].disabled = [];
    data[message.guild.id].disabled = data[message.guild.id].disabled.filter(c => c !== cmdName);
    save(data);
    message.reply(`✅ Enabled \`${cmdName}\``);
  },
};
