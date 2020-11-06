module.exports = {
    name: 'eval',
    run: async(client, message, args) => {
        function clean(string) {
            if (typeof text === "string") {
              return string.replace(/`/g, "`" + String.fromCharCode(8203))
              .replace(/@/g, "@" + String.fromCharCode(8203))
            } else {
              return string;
            }
        }
        if(message.author && message.author != '6285156177517@c.us') return await client.sendText(message.from, 'Hanya Muqsith Yang Bisa Akses Command Ini !');
        else if(!message.author) return await client.sendText(message.from, 'Mohon Menggunakan Command Ini Di Grup !');

        let code = args.join(" ");
        if(!code) return await client.sendText(message.from, 'Masukkan Code, *BAKA !*');
        let evaled;

        try{
            if(code.includes('process.env')) {
                evaled = 'Kamu Ingin Liatin Rahasiamu ?, *BAKA*'
            } else {
                evaled = await eval(code);
            }
            if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});
            
            let output = clean(evaled);
            return await client.sendText(message.from, `*Input :*\n${code}\n*Output :*\n${output}`);
        } catch(err) {
            let error = clean(err);
            return await client.sendText(message.from, `*Input :*\n${code}\n*Output :*\n${error}`) ;
        }
    }
}