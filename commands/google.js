const request = require('node-superfetch');

module.exports = {
    name: 'google',
    run: async(client, message, args) => {
        const googlekey = process.env.GOOGLE_API;
        const csx = '5bc857784fb9d1718';
        let query = args.join(" ");
        let result;

         if (!query) return await client.sendText(message.from, "Please enter the query.");

        href = await search(query);
        if (!href) return await client.sendText(message.from, "Unknown search.");
        try {
            await client.sendImage(message.from, href.pagemap ? href.pagemap.cse_thumbnail[0].src : null, 'google.jpg', `Judul : ${href.title}\n\nDeskripsi : ${href.snippet}\n\nLink : ${href.link}\n\nPowered by Google`)
        } catch(err) {
            await client.sendText(message.from, `Judul : ${href.title}\n\nDeskripsi : ${href.snippet}\n\nLink : ${href.link}\n\nPowered by Google`)
        }
        async function search(query) {
            const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
                key: googlekey, cx: csx, safe: "off", q: query
            });
    
            if (!body.items) return null;
            return body.items[0];
          }
    }
}