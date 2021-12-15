const { Client, CommandInteraction, MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");

module.exports = {
    name: "panel",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const embed = new MessageEmbed()
        .setTitle("Tickets")
        .setColor("#FF0000")
        .setDescription("Choose below an option to get help!")
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('Tickets')
                .setPlaceholder('Nothing selected')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: 'Support',
                        description: 'Get support!',
                        value: 'Support',
                        emoji: "💳"
                    },
                    {
                        label: 'Work',
                        description: 'Become an worker!',
                        value: 'Work',
                        emoji: "📝"
                    },
                    {
                        label: 'Report',
                        description: 'Report someone',
                        value: 'Report',
                        emoji: "📢"
                    },
                    {
                        label: 'SOS',
                        description: 'Other question?',
                        value: 'Sos',
                        emoji: "🆘"
                    },                    
                ]),
        );

    await interaction.followUp({ components: [row], embeds: [embed] });
    },
};
