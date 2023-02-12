const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`invites`)
    .setDescription(`Tells The Invites Of A Person`)
    .addUserOption(option => option
        .setName(`target`)
        .setDescription(`The Target User To Get Invites Of`)
        .setRequired(true)),

        async execute(interaction, message) {
            const inviteop = interaction.options.getUser(`target`);
            const invites = await interaction.guild.invites.fetch();
            let userInv = invites.filter(u => u.inviter && u.inviter.id === inviteop.id);

            let i = 0;

            userInv.forEach(inv => i += inv.uses);

            const embed = new EmbedBuilder()
            .setColor(`Blurple`)    
            .setDescription(`${inviteop.tag} has ${i} Invites.`)

            await interaction.reply({ embeds: [embed], ephemeral:true})
        }
}
