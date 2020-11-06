const axios = require('axios')

module.exports = {
    name: 'corona',
    run: async(client, message, args) => {
      let negara = args.join(" ");
      if(!negara) return await client.sendText(message.from, 'Mohon Masukkan Negara Nya !');
      try{
        let hasil = await axios.get(`https://disease.sh/v3/covid-19/countries/${negara}`).then(x => x.data)
      await client.sendImage(message.from, hasil.countryInfo.flag , 'bendera.jpg', `*Negara :* ${hasil.country}\n*Terkonfirmasi :* ${hasil.cases.toLocaleString()}\n*Selamat :* ${hasil.recovered.toLocaleString()}\n*Meninggoy :* ${hasil.deaths.toLocaleString()}`);
      }catch(err) {
        return await client.sendText(message.from, `Terjadi Kesalahan : *${err}*\n_Mohon Masukkan Negara Yang Tersedia !_`);
      }
    }
}