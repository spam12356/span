const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("521043155798196225")
setInterval(function() {
channel.send(`Halim_GBHalim_GBHalim_GBHalim_GBHalim_GBHalim_GBHalim_GBHalim_GBHalim_GB`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
