const { Client } = require("discord.js");

module.exports = {
    name: `server`,
    description: "you tube website adress",
    execute(message, args, Discord){
        const serverEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Server Info`)
        .setThumbnail(message.guild.iconURL())
        .addField("Server Name", `${message.guild.name}`, true)
        .addField("Server Owner", `${message.guild.owner}`, true)
        .addField("Member Count", `${message.guild.memberCount}`, true)
        .addField("Region", `${message.guild.region}`, true)
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`);
        message.channel.send(serverEmbed);
    }
}
