const mongoose = require(`mongoose`)
const mongodbURL = process.env.mongo_db
const { Client, IntentsBitField, ActivityType } = require("discord.js");
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    if(!mongodbURL) return;

    mongoose.set('strictQuery', false);

    await mongoose.connect(mongodbURL || '', {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    

    console.log(`✅ Enabling Mongodb`)

    let servers = await client.guilds.cache.size;
    let users = await client.guilds.cache.reduce(
      (a, b) => a + b.memberCount,
      0
    );

    let status = [
      {
        name: "Vaibhgamer999",
        type: ActivityType.Watching,
      },
      {
        name: `${servers} Servers and ${users} Users`,
        type: ActivityType.Watching,
      }
    ];
    console.log(`✅ Enabling Status`)
    setInterval(() => {
      let random = Math.floor(Math.random() * status.length);
      client.user.setActivity(status[random]);
    }, `5000`)
    console.log('✅ Sucessfully Enabled Status.')
    console.log(`✅ Logged in as ${client.user.tag}.`);
    if(mongoose.connect) {
      console.log("✅ Mongodb Is Ready!")}
  }
}