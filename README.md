# Pixium

A fast, minimal Discord bot with prefix commands, moderation, and utility tools.


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
