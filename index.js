const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("error404")

bot.on('ready', function() {
    bot.user.setUsername("error404")
    bot.user.setPresence({ game: { name: 'error404'}, status: 'idle'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
}
)
