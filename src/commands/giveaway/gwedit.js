const { SlashCommandBuilder } = require(`@discordjs/builders`);
const ms = require('ms');

module.exports = {
    data:new SlashCommandBuilder()
    .setName(`gwedit`)
    .setDescription(`Edits A Giveaway`)
    .addStringOption(option =>
        option
            .setName('message_id')
            .setDescription('The Message id For Giveaway')
            .setRequired(true))
    .addStringOption(option =>
        option
            .setName('time')
            .setDescription('The duration of the giveaway In Milliseconds')
            .setRequired(true))
            .addIntegerOption(option =>
                option
                    .setName('winners')
                    .setDescription('The Amount Of Winners')
                    .setRequired(true))
            .addStringOption(option =>
                option
                    .setName('prize')
                    .setDescription('The prize For The Giveaway')
                    .setRequired(true)),

                    async execute(interaction, client) {
                        const newprize = interaction.options.getString('prize');
                        const newduration = interaction.options.getString('time');
                        const newwinners = interaction.options.getInteger('winners');
                        const messageId = interaction.options.getString('message_id');
                        client.giveawaysManager
            .edit(messageId, {
                addTime: ms(newduration),
                newWinnerCount: newwinners,
                newPrize: newprize
            })
            .then(() => {
                interaction.reply('Success! Giveaway updated!');
            })
            .catch((err) => {
                interaction.reply(`An error has occurred, please check and try again.\n\`${err}\``);
            });
                    }

}