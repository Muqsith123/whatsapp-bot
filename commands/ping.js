module.exports = {
    name: 'ping',
    run: async(client, message, args) => {
        let ping = await m.createdTimestamp - message.createdTimestamp
        await client.sendText(message.from, `*Ping :* ${ping}ms`);
    }
}