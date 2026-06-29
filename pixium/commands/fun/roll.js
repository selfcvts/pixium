module.exports = {
  name: 'roll',
  description: 'Rolls a dice. Usage: ,roll [sides] (default d6)',
  execute(message, args) {
    const sides = parseInt(args[0]) || 6;
    if (sides < 2 || sides > 10000) return message.reply('❌ Enter 2–10000 sides.');
    const result = Math.floor(Math.random() * sides) + 1;
    message.reply(`🎲 Rolled a **d${sides}** → **${result}**`);
  },
};
