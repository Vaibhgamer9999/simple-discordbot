const { SlashCommandBuilder } = require(`@discordjs/builders`)
const { EmbedBuilder } = require(`discord.js`)
const mcsrvstat = require('mcsrvstat-wrapper')

module.exports = {
    data:new SlashCommandBuilder()
    .setName(`util`)
    .setDescription(`test`)
    .addStringOption(option => option.setName(`ip`).setDescription(`ip`).setRequired(false)),

    async execute(interaction, client) {
        const ip = interaction.options.getString(`ip`)
        const url = `https://api.mcsrvstat.us/2/${ip}`
        const data = await fetch(url).then(response => response.json())
        const statusofserver = data.online
        console.log(statusofserver)
         await interaction.reply({content: `testingdone`, ephemeral: true})
    }
}