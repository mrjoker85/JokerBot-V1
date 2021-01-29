const ytdl = require(`ytdl-core`);
const ytSearch = require(`yt-search`);

module.exports = {
    name: `play`,
    description: "you tube website adress",
    async execute(message, args){
        let channel = message.member.voice.channel;

        if(!channel) return message.channel.send(`شما باید در یک ویس چنل حضور داشته باشید`)
        const permission = channel.permissionsFor(message.client.user);
        if (!permission.has(`SPEAK`)) return message.channel.send(`من دسترسی برای صحبت کردن ندارم`)
        if (!permission.has(`CONNECT`)) return message.channel.send(`من دسترسی برای وصل شدن به ویس چنل شما را ندارم`)
        if (!args.length) return message.channel.send(`You need to send the second argument!`);
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\s+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            }  else {
                return true;
            }
        }
        if(validURL(args[0])){
            message.channel.send(`yek url dorost vared konid`)
            const connection = await channel.join();
            const stream = ytdl(video.url, {filter: `audioonly`})
            connection.play(stream, {seek: 0, volume: 1})
            .on(`finish`, () =>{
                channel.leave();
                message.channel.send(`Leaving Channel`)
            });
            await message.reply(`Now Playing ***Your Link!***`)
            return
        }
        const connection = await channel.join();
            const videoFinder = async (query) => {
                const videoResult = await ytSearch(query);

                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

            }

            const video = await videoFinder(args.join(` `));

            if(video){
                const stream = ytdl(video.url, {filter: `audioonly`})
                connection.play(stream, {seek: 0, volume: 1})

                await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
            } else{
                message.channel.send(`No Video result found`);
            
            }
    }
}