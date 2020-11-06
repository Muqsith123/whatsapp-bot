const fetch = require('node-fetch');

module.exports = {
    name: 'imgur',
    run: async(client, message, args) => {
        let query = args.join(" ");
        if(!query) return message.channel.send('Please Input The Query !');

        const url = `https://api.imgur.com/3/gallery/search/top/1/?q=${query}&q_type=jpg,jpeg,png`
        const api = process.env.IMGUR;

        fetch(url, {headers: {Authorization: `Client-ID ${api}`}})
        .then(res => res.json())
        .then(async json => {
            let id = Math.floor(Math.random() * json.data.length)
            try {
                await client.sendImage(message.from, json.data[id].images[0].link, 'imgur.jpg', `*Title :* ${json.data[id].title}\n*Link :* ${json.data[id].link}\n*Author :* ${json.data[id].account_url}`);
            } catch(err) {
                return await client.sendText(message.from, `Terjadi Kesalahan : *${err}*\n_Mohon Menggunakan Kata Kunci Lain_`);
            }
    })
    }
}