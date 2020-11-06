const Shopee = require("shopee");
const shopee = new Shopee(Shopee.BASE_URL.INDONESIA);

module.exports = {
    name: 'shopee',
    run: async(client, message, args) => {
        let jumlah = parseInt(args[0]);
        if(!jumlah) return await client.sendText(message.from, 'Mohon Masukkan Jumlah Hasil, *BAKA* !');
        let query = args.slice(1).join(" ");
        if(!query) return await client.sendText(message.from, 'Mohon Masukkan Pencarian, *BAKA !*');
        let produk = await shopee.search({
            query: query,
            orderBy: Shopee.SEARCH.ORDER_BY.PRICE,
            orderType: Shopee.SEARCH.ORDER_TYPE.ASC,
            limit: jumlah
        });
        console.log(produk)
        let nama = "";
        for(let i = 0;i < produk.length; i++) {
            nama += `${i+1}. ${produk[i].name}\n`
            if(i === produk.length-1) await client.sendText(message.from, nama)
        }
    }
}