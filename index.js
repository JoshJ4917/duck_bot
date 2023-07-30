const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "MTEzNTA3NTA2NDY0ODMwMjY2NA.GnGhDn.HKSLkUtv5ELrTFYw4gYk_20SD-YwpSt6VBfPtM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)