const { SlashCommandBuilder } = require(`@discordjs/builders`);
const ms = require('ms');

module.exports = {
    data:new SlashCommandBuilder()
    .setName(`gwstart`)
    .setDescription(`Starts A Giveaway`)
    .addStringOption(option =>
        option
            .setName('duration')
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
                    .setRequired(true))
                    .addStringOption(option =>
                        option
                            .setName('content')
                            .setDescription('The content of The Giveaway')
                            .setRequired(true)),

                    async execute(interaction, client) {

                        await interaction.reply({ content: `Starting Giveaway`, ephemeral: true})
                        const duration = interaction.options.getString('duration');
        const winnerCount = interaction.options.getInteger('winners');
        const prize = interaction.options.getString('prize');
        const content = interaction.options.getString(`content`);
                        client.giveawaysManager
            .start(interaction.channel, {
                duration: ms(duration),
                winnerCount,
                prize,
                lastChance: {
                    enabled: true,
                    content: content,
                    threshold: 10_000,
                    embedColor: '#00FFFF'
                }
            }),
            interaction.editReply({ content:`Giveaway Started`, ephemeral: true })
                    }

}