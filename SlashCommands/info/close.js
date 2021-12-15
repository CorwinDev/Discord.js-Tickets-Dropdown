const { Client, CommandInteraction, MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");



module.exports = {
    name: "close",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        var CloseEmbed = new MessageEmbed()
        .setColor("RED")
        .setDescription("This isn't a ticket!")
        if(interaction.channel.name.includes("│💳・order-" )){
            await interaction.deferReply({ ephemeral: false }).catch(() => {});
            CloseEmbed.setDescription("This ticket will be close soon")
            interaction.followUp({embeds: [CloseEmbed]})
            setTimeout(function () {
                interaction.channel.delete()
            }, 10000);
        }else if(interaction.channel.name.includes("│🎫・report-")){
            await interaction.deferReply({ ephemeral: false }).catch(() => {});
            CloseEmbed.setDescription("This ticket will be close soon")
            interaction.followUp({embeds: [CloseEmbed]})
            setTimeout(function () {
                interaction.channel.delete()
            }, 10000);
        }else if(interaction.channel.name.includes("│🎫・sos-")){
            await interaction.deferReply({ ephemeral: false }).catch(() => {});
            CloseEmbed.setDescription("This ticket will be close soon")
            interaction.followUp({embeds: [CloseEmbed]})
            setTimeout(function () {
                interaction.channel.delete()
            }, 10000);
        } else if(interaction.channel.name.includes("│📝・application-")){
            await interaction.deferReply({ ephemeral: false }).catch(() => {});
            CloseEmbed.setDescription("This ticket will be close soon")
            interaction.followUp({embeds: [CloseEmbed]})
            setTimeout(function () {
                interaction.channel.delete()
            }, 10000);
        }else{
            await interaction.deferReply({ ephemeral: true }).catch(() => {});
            interaction.followUp({embeds: [CloseEmbed]})

        }


    }
}
