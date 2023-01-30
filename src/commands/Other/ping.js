const { SlashCommandBuilder } = require(`@discordjs/builders`)

module.exports = {
  data: new SlashCommandBuilder()
  .setName(`ping`)
  .setDescription(`Tells The Current Ping Of The Bot`),

  async execute(interaction, client) {
    await interaction.reply({ content: `Current Bot Latency is <a:ping:1068810696969695242> ${client.ws.ping}`, ephemeral: true})
  }
}