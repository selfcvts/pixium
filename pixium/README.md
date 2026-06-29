# Pixium

A fast, minimal Discord bot with prefix commands, moderation, and utility tools.

## Requirements
- Node.js v18+
- A Discord bot token

## Installation

```bash
git clone <your-repo>
cd pixium
npm install
cp .env.example .env
# Edit .env and paste your bot token
```

## Setup

**`.env`**
```
TOKEN=your_bot_token_here
PREFIX=,
```

## Run

```bash
node index.js
# or
npm start
```

## Discord Developer Portal

1. Go to https://discord.com/developers/applications
2. Create or open your bot application
3. Under **Bot** → enable these **Privileged Gateway Intents**:
   - ✅ Server Members Intent
   - ✅ Message Content Intent
4. Under **OAuth2 → URL Generator**, select:
   - Scopes: `bot`
   - Permissions: `Administrator` (or fine-tune as needed)
5. Use the generated URL to invite the bot

## Folder Structure

```
pixium/
├── index.js
├── package.json
├── .env.example
├── data/               ← auto-created (warnings, config)
└── commands/
    ├── utility/        ping, uptime, userinfo, serverinfo, avatar, help
    ├── moderation/     kick, ban, timeout, untimeout, warn, clear
    ├── admin/          setlogchannel, enable, disable
    └── fun/            say, roll
```

## Command Reference

| Command | Permission | Description |
|---|---|---|
| `,ping` | Everyone | Bot latency |
| `,uptime` | Everyone | Bot uptime |
| `,userinfo [@user]` | Everyone | User info |
| `,serverinfo` | Everyone | Server info |
| `,avatar [@user]` | Everyone | Avatar |
| `,help` | Everyone | Command list |
| `,kick @user [reason]` | Kick Members | Kick |
| `,ban @user [reason]` | Ban Members | Ban |
| `,timeout @user <min> [reason]` | Moderate Members | Timeout |
| `,untimeout @user` | Moderate Members | Remove timeout |
| `,warn @user [reason]` | Moderate Members | Warn |
| `,clear <1-100>` | Manage Messages | Bulk delete |
| `,setlogchannel #ch` | Manage Guild | Set log channel |
| `,enable <cmd>` | Manage Guild | Enable command |
| `,disable <cmd>` | Manage Guild | Disable command |
| `,say <text>` | Manage Messages | Bot speaks |
| `,roll [sides]` | Everyone | Roll dice |

## Notes

- Warnings are stored in `data/warnings.json`
- Config (log channel, disabled commands) in `data/config.json`
- Both files are created automatically on first use
- Bot ignores messages from other bots
- Messages older than 14 days cannot be bulk deleted (Discord limit)
