const { Client } = require("discord.js");

module.exports = {
    name: `avatarserver`,
    description: "Namayesh Avatar Server",
    execute(message, args, Discord){
        const avatarserverEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Avatar Server`)
        .setImage(message.guild.iconURL({format: "gif", dynamic: true, size: 2048}))
        .setImage(message.guild.iconURL({format: "png", dynamic: true, size: 2048}))
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`);
        message.channel.send(avatarserverEmbed);
    }
}
