//consts
const Discord = require(`discord.js`)
const client = new Discord.Client();
const prefix = ``
const fs = require(`fs`);
const memberCounter = require(`./counters/member-counter`)

//Handlers
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith(`.js`));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
//AutoRole
client.on(`guildMemberAdd`, guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === `member`);

    guildMember.roles.add(welcomeRole);
    const welcomer = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${guildMember.user.username}`, `${guildMember.user.displayAvatarURL({format: "gif", dynamic: true, size: 1024})}`)
        .setAuthor(`${guildMember.user.username}`, `${guildMember.user.displayAvatarURL({format: "png", dynamic: true, size: 1024})}`)
        .setThumbnail(`${guildMember.user.displayAvatarURL({format: "png", dynamic: true, size: 1024})}`)
        .setDescription(`Salam <@${guildMember.user.id}> Khosh Omadi Be Server Ma Omidvaram Lahazat Khoobi Dashte Bashim Kenar Ham`)
        .setTimestamp()
// guildMember.guild.channels.cache.get(`798986536455897088`).send(`Salam <@${guildMember.user.id}> Khosh Omadi Be Server Ma Omidvaram Lahazat Khoobi Dashte Bashim Kenar Ham`)
guildMember.user.send("سلام دوست عزیز\nجوکر شاپ\nیکی از بهترین فروشگاه های گیفت کارت و بازی\nفعالسازی و تحویل آنی بدون هیج معطلی\nسریع بیا و جوین سرور شو\nhttps://discord.gg/BqUmwrNQV8\nو اگر تو سرور جوین هستی لینک رو به دوستات هم بفرست تا اونا استفاده کنن ازش\n")
    guildMember.guild.channels.cache.get(`798986536455897088`).send(welcomer)
});

//Status
client.on(`ready`, () => {
    console.log(`${client.user.tag} start`)
    memberCounter(client)
    client.user.setActivity("my code", { type: "WATCHING"})
    client.user.setActivity("Help" , {
        type: "PLAYING"
    })
})  
// client.on("ready", () => {
//   function YousamPower() {
//     let STATUS = ["Help" , "Developer MrJoker"]
//     let Power = Math.floor(Math.random() * STATUS.length);
//     client.user.setActivity(STATUS[Power], {type: "PLAYING"});
//   }; setInterval(YousamPower, 3000)
// });
//Commands
client.on(`message`, async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();  
    if (command === `server`){
        client.commands.get(`server`).execute(message, args, Discord);
    }
    if (command === `avatarserver`){
        client.commands.get(`avatarserver`).execute(message, args, Discord);
    }
    if (command === `clear`){
        client.commands.get(`clear`).execute(message, args);
    }
    if (command === `help`){
        client.commands.get(`help`).execute(message, args, Discord);
    }
    if (command === `stop`){
        client.commands.get(`stop`).execute(message, args, Discord);
    }
    if (command === `ping`){
        client.commands.get(`ping`).execute(message, args);
    }
    if (command === `play`){
        client.commands.get(`play`).execute(message, args);
    }
    if (command === `kick`){
        client.commands.get(`kick`).execute(message, args);
    }
    if (command === `ban`){
        client.commands.get(`ban`).execute(message, args);
    }
    if (command === `mute`){
        client.commands.get(`mute`).execute(message, args);
    }
    if (command === `unmute`){
        client.commands.get(`unmute`).execute(message, args);
    }
    if (command === `invite`){
         client.commands.get(`invite`).execute(message, args, Discord);
    }
    if (command === `avatar`){
        let userinfoembed = new Discord.MessageEmbed()
        let userMention = message.mentions.users.first()
        if(userMention){
        userinfoembed.setColor('RANDOM')
        userinfoembed.setAuthor(`Avatar Fard Mored Nazar`)
        userinfoembed.setImage(userMention.displayAvatarURL({format: "gif", dynamic: true, size: 1024}))
        userinfoembed.setImage(userMention.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
        userinfoembed.setTimestamp()
        userinfoembed.setFooter(`${userMention.username}`, `${userMention.displayAvatarURL()}`);
         message.channel.send(userinfoembed);
        }else{
        userinfoembed.setColor('RANDOM')
        userinfoembed.setAuthor(`Avatar Shoma`)
        userinfoembed.setImage(message.author.displayAvatarURL({format: "gif", dynamic: true, size: 1024}))
        userinfoembed.setImage(message.author.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
        userinfoembed.setTimestamp()
        userinfoembed.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`);
         message.channel.send(userinfoembed);
    }}
    if (command === `user`){
        let userinfoembed = new Discord.MessageEmbed()
        let userMention = message.mentions.users.first()
    if(userMention){
        userinfoembed.setColor('RANDOM')
        userinfoembed.setAuthor(`User Info`)
        userinfoembed.setThumbnail(userMention.displayAvatarURL({format: "gif", dynamic: true, size: 1024}))
        userinfoembed.setThumbnail(userMention.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
        userinfoembed.addField("User Name", `${userMention.username}`, true)
        userinfoembed.addField("Tag", `${userMention.discriminator}`, true)
        userinfoembed.addField("ID", `${userMention.id}`, true)
        userinfoembed.setTimestamp()
        userinfoembed.setFooter(`${userMention.username}`, `${userMention.displayAvatarURL()}`);
         message.channel.send(userinfoembed);
    }else{
        userinfoembed.setColor('RANDOM')
        userinfoembed.setAuthor(`User Info`)
        userinfoembed.setThumbnail(message.author.displayAvatarURL({format: "gif", dynamic: true, size: 1024}))
        userinfoembed.setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
        userinfoembed.addField("User Name", `${message.author.username}`, true)
        userinfoembed.addField("Tag", `${message.author.discriminator}`, true)
        userinfoembed.addField("ID", `${message.author.id}`, true)
        userinfoembed.setTimestamp()
        userinfoembed.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`);
         message.channel.send(userinfoembed);
    }
}
})


//Logging in to discord
client.login(`Nzk0MTM0ODY3MDg3OTgyNjAy.X-2Zug.cu2clC3ALXXuYRrHq0hVpLJYRsI`);