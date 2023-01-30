const { SlashCommandBuilder } = require(`@discordjs/builders`);
const ms = require('ms');

module.exports = {
    data:new SlashCommandBuilder()
    .setName(`gwend`)
    .setDescription(`Ends A Giveaway`)
    .addStringOption(option =>
        option
            .setName('message_id')
            .setDescription('The Message id For Giveaway')
            .setRequired(true)),

                    async execute(interaction, client) {

                        const messageId = interaction.options.getString('message_id');
                        client.giveawaysManager
            .end(messageId)
            .then(() => {
                interaction.reply('Success! Giveaway ended!');
            })
            .catch((err) => {
                interaction.reply(`An error has occurred, please check and try again.\n\`${err}\``);
            });

                    }

}