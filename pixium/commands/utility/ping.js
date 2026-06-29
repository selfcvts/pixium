module.exports = {
  name: 'ping',
  description: 'Shows bot latency',
  execute(message) {
    const start = Date.now();
    message.channel.send('🏓 Pinging...').then(msg => {
      msg.edit(`🏓 Pong! Latency: **${Date.now() - start}ms** | API: **${message.client.ws.ping}ms**`);
    });
  },
};
