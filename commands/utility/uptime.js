module.exports = {
  name: 'uptime',
  description: 'Shows bot uptime',
  execute(message, args, client) {
    const s = Math.floor(client.uptime / 1000);
    const [d, h, m, sec] = [
      Math.floor(s / 86400),
      Math.floor((s % 86400) / 3600),
      Math.floor((s % 3600) / 60),
      s % 60,
    ];
    message.reply(`⏱ Uptime: **${d}d ${h}h ${m}m ${sec}s**`);
  },
};
