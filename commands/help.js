const { Client } = require("discord.js");

module.exports = {
    name: `help`,
    description: "you tube website adress",
    execute(message, args, Discord){
        const avatarserverEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Command Haye Bot Dar Zir Be Shoma Namayesh Dade Mishavad`)
        .addField("AvatarServer", `نمایش آواتار سرور`, true)
        .addField("Avatar", `نمایش آواتار شما یا فرد مورد نظر`, true)
        .addField("Server", `دریافت اطلاعات سرور`, true)
        .addField("User", `دریافت اطلاعات خود یا شخص مورد نظر`, true)
        .addField("stop", `متوقف کردن موزیک پخش شده`, true)
        .addField("play", `پخش موزیک دلخواه`, true)
        .addField("ping", `دریافت پینگ`, true)
        .setThumbnail(message.guild.iconURL({format: "gif", dynamic: true, size: 1024}))
        .setThumbnail(message.guild.iconURL({format: "png", dynamic: true, size: 1024}))
        .setTimestamp()
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`);
        message.channel.send(avatarserverEmbed);
    }
}