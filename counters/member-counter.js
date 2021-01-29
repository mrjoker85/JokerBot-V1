module.exports = async (client) =>{
    const guild = client.guilds.cache.get(`781845235931152405`);
setInterval(() =>{
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get(`794284079129296906`);
    channel.setName(`【👥】𝐌𝐞𝐦𝐛𝐞𝐫𝐬 : ${memberCount.toLocaleString()}`);
    console.log(`Updating Member Count`);
    }, 5000);
}