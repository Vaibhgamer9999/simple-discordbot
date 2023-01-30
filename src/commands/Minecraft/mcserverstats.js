const { SlashCommandBuilder } = require(`@discordjs/builders`)
const { EmbedBuilder } = require(`discord.js`)
const util = require(`minecraft-server-util`)
const { MinecraftServerListPing, MinecraftQuery } = require("minecraft-status");
module.exports = {
  data: new SlashCommandBuilder()
  .setName(`hypixelstats`)
  .setDescription(`Tells The Stats Of Hypixel`),
  
  async execute(interaction, client) {
    MinecraftServerListPing.ping(4, "play.hypixel.net", 25565, 10000)
.then(response => {
  const version = response.version.name
  const ip = `hypixel.net`
  const onlinepep = response.players.online
  const max = response.players.max
  const des = response.description.text
    const embed = new EmbedBuilder()
  .setColor(`Aqua`)
  .addFields(
		{ name: 'Server Ip', value: ip },
		{ name: 'Version', value: version.toString() },
		{ name: 'Online Players', value: onlinepep.toString(), inline: true },
		{ name: 'Max Players', value: max.toString(), inline: true },
	)
    interaction.reply({ embeds: [embed], ephemeral: true})
  
})
.catch(error => {
  console.log(error)
});
  }
}
                          