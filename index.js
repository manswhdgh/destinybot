const Discord = require("discord.js");
const intent_list = new Discord.Intents(["GUILD_MEMBERS", "GUILD_MESSAGES", "GUILDS", "GUILD_INVITES"]);
const client = new Discord.Client({ ws: { intents: intent_list } });
const token = process.env.token;

client.on("ready", () => {
    console.log("켰다.")
})

client.on("message", (message) => {
    if (message.content === "&레이드목록") {
        message.reply("pong")
    }
})

client.login(token)