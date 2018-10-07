const Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("loltutobottest, !help");
    console.log("le bot a bient ete connecter");


});

bot.login('NDk3NjM4NTg4OTA1Njg0OTkz.DptUfQ.2-3TJdbr8xNHMDNYhyGJp_oJZ9I');
