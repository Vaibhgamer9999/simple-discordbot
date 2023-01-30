const { SlashCommandBuilder } = require(`@discordjs/builders`);
const ms = require('ms');

module.exports = {
    data:new SlashCommandBuilder()
    .setName(`gwreroll`)
    .setDescription(`Rerolls A Giveaway`)
    .addStringOption(option =>
        option
            .setName('message_id')
            .setDescription('The Message id Of the Giveaway')
            .setRequired(true)),
            
                    async execute(interaction, client) {
                        const query = interaction.options.getString('query');
const giveaway =
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.prize === query) ||
    // Search with messageId
    client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === query);

// If no giveaway was found
if (!giveaway) return interaction.reply(`Unable to find a giveaway for \`${query}\`.`);
const messageId = interaction.options.getString('query');
        client.giveawaysManager
            .reroll(messageId)
            .then(() => {
                interaction.reply('Success! Giveaway rerolled!');
            })
            .catch((err) => {
                interaction.reply(`An error has occurred, please check and try again.\n\`${err}\``);
            });
                    }

}