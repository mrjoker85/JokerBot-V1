module.exports = {
    name: `stop`,
        description: "you tube website adress",
    async execute(message, args){
    let channel = message.member.voice.channel;
    if (!channel) return message.channel.send("شما باید داخل ویس باشید تا بتوانید موزیک را قطع کنید")
    await channel.leave();
    await message.channel.send(`درحال خارج شدن از ویس`)
    }
    }