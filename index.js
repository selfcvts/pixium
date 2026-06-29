require('dotenv').config();
const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel],
});

client.commands = new Collection();
client.prefix = process.env.PREFIX || ',';

// Load commands
const categories = ['utility', 'moderation', 'admin', 'fun'];
for (const category of categories) {
  const dir = path.join(__dirname, 'commands', category);
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) {
    const cmd = require(path.join(dir, file));
    if (cmd.name) client.commands.set(cmd.name, cmd);
  }
}

client.once('ready', () => {
  console.log(`[Pixium] Logged in as ${client.user.tag}`);
  console.log(`[Pixium] ${client.commands.size} commands loaded`);
  client.user.setActivity(`${client.prefix}help`, { type: 0 });
});

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.content.startsWith(client.prefix)) return;
  if (!message.guild) return;

  const args = message.content.slice(client.prefix.length).trim().split(/\s+/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);
  if (!command) return;

  // Check if command is disabled in this guild
  try {
    const fs = require('fs');
    const cfgPath = path.join(__dirname, 'data/config.json');
    if (fs.existsSync(cfgPath)) {
      const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
      const disabled = cfg[message.guild.id]?.disabled || [];
      if (disabled.includes(commandName)) return;
    }
  } catch {}

  try {
    await command.execute(message, args, client);
  } catch (err) {
    console.error(`[Error] ${commandName}:`, err.message);
    message.reply('❌ An error occurred.').catch(() => {});
  }
});

client.on('error', (err) => console.error('[Client Error]', err.message));
process.on('unhandledRejection', (err) => console.error('[Unhandled]', err?.message));

client.login(process.env.TOKEN);
