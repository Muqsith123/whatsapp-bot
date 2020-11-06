const kagApi = require('@kagchi/kag-api');

module.exports = {
    name: 'waifu',
    run: async(client, message, args) => {
        let waifumu = args.join(" ");
        if(!waifumu) return await client.sendText(message.from, 'Please Input Your Waifu Name !');
      
        let waifu;
        if(waifumu === 'zero two') waifu = await kagApi.waifu.zerotwo()
        else if(waifumu === 'megumin') waifu = await kagApi.waifu.megumin()
        else if(waifumu === 'nezuko') waifu = await kagApi.waifu.nezuko()
        else if(waifumu === 'rem') waifu = await kagApi.waifu.rem()
        else if(waifumu === 'bunnygirl') waifu = await kagApi.waifu.bunnygirl()
        else if(waifumu === 'chika') waifu = await kagApi.waifu.chika()
        else if(waifumu === 'hayasaka') waifu = await kagApi.waifu.hayasaka()
        else return await client.sendText(message.from, 'Maaf Waifu Tidak Tersedia Di Command Ini !')

        await client.sendImage(message.from, waifu, 'waifu.jpg', 'This Is Your Waifu !')
    }
}