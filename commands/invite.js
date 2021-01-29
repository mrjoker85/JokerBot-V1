const Discord = require(`discord.js`)
const client = new Discord.Client();

module.exports = {
    name: `invite`,
    description: "you tube website adress",
    execute(message, args, Discord){
        const invite = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Invite`)
        .setAuthor(`Ba Link Zir Mitonid Man Ro Be Server Khodeton Add Bezanid`)
        .setURL(`https://discord.com/oauth2/authorize?client_id=794134867087982602&scope=bot&permissions=271613040`)
        .setTimestamp()
        message.channel.send(invite);
    }
}