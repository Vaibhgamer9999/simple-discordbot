const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { EmbedBuilder, PermissionsBitField, Embed } = require(`discord.js`);
 
module.exports = {
    data:new SlashCommandBuilder()
    .setName(`purge`)
    .setDescription(`Purges A Certain Amount Of Messages In A Channel`)
    .addIntegerOption(option => option
        .setName(`amount`)
        .setDescription(`Amount Of Messages To Deleted`)
        .setMinValue(1)
        .setMaxValue(100)
        .setRequired(true)),

        async execute(interaction) {
            if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({ content: "You Don't have Permissions To Execute This Command", ephemeral: true})

            let amount = interaction.options.getInteger(`amount`);

            const embed = new EmbedBuilder()
            .setColor(`Blurple`)
            .setDescription(`✅ Deleted ${amount} Messages`)

            await interaction.channel.bulkDelete(amount)

            await interaction.reply({ embeds: [embed], ephemeral: true})
        }
}