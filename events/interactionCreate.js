const client = require("../index");
const ordercat = "918221810598838312"
const shopteam = "918761808515432499"
const employee = "918761785983655976"
const { Permissions, MessageButton, MessageActionRow, MessageEmbed } = require("discord.js")


client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand()) {

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction, args);
    }

    // Context Menu Handling
    if (interaction.componentType === "SELECT_MENU") {
        if (interaction.values[0] === "Support") {


            const channel = await interaction.guild.channels.create("│💳・support-" + interaction.user.username, {
                type: "GUILD_TEXT",
            });

            await channel.setParent(ordercat)
            await channel.permissionOverwrites.create(interaction.guild.id, { VIEW_CHANNEL: false });
            await channel.permissionOverwrites.create(interaction.user.id, { VIEW_CHANNEL: true, CREATE_INSTANT_INVITE: true, SEND_MESSAGES: true, ATTACH_FILES: true, CONNECT: true, ADD_REACTIONS: true, READ_MESSAGE_HISTORY: true })
            await channel.permissionOverwrites.create(interaction.guild.roles.cache.find(x => x.id === employee), {
                VIEW_CHANNEL: true,
                CREATE_INSTANT_INVITE: false,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                CONNECT: true,
                ADD_REACTIONS: true,
                READ_MESSAGE_HISTORY: true,
            });


            await interaction.deferReply({ ephemeral: true }).catch(() => { });

            interaction.followUp(`You ticket is made: <#${channel.id}>`);

            var ticketEmbedBestellen = new MessageEmbed()
                .setTitle(`Hi ${interaction.user.username}`)
                .setColor("ORANGE")
                .setDescription("How can you help you?")
                .addField("Reason: Support", "Made with ❤️ by [Corwin](https://corwindev.nl)")
            await channel.send({ content: `<@${interaction.user.id}>`, embeds: [ticketEmbedBestellen] })





        } else if (interaction.values[0] === "Work") {


            const channel = await interaction.guild.channels.create("│📝・application-" + interaction.user.username, {
                type: "GUILD_TEXT",
            });

            await channel.setParent(ordercat)
            await channel.permissionOverwrites.create(interaction.guild.id, { VIEW_CHANNEL: false });
            await channel.permissionOverwrites.create(interaction.user.id, { VIEW_CHANNEL: true, CREATE_INSTANT_INVITE: true, SEND_MESSAGES: true, ATTACH_FILES: true, CONNECT: true, ADD_REACTIONS: true, READ_MESSAGE_HISTORY: true })
            await channel.permissionOverwrites.create(interaction.guild.roles.cache.find(x => x.id === employee), {
                VIEW_CHANNEL: true,
                CREATE_INSTANT_INVITE: false,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                CONNECT: true,
                ADD_REACTIONS: true,
                READ_MESSAGE_HISTORY: true,
            });


            await interaction.deferReply({ ephemeral: true }).catch(() => { });

            interaction.followUp(`You ticket is made: <#${channel.id}>`);
            var ticketEmbedSolliteren = new MessageEmbed()
                .setTitle(`Hi ${interaction.user.username}`)
                .setColor("GREEN")
                .setDescription("For what do you want to apply?")
                .addField("Reason for ticket 📝 • Application", "Made with ❤️ by [Corwin](https://corwindev.nl)")
            channel.send({ content: `<@${interaction.user.id}>`, embeds: [ticketEmbedSolliteren] })


        } else if (interaction.values[0] === "Sos") {


            const channel = await interaction.guild.channels.create("│🎫・sos-" + interaction.user.username, {
                type: "GUILD_TEXT",
            });

            await channel.setParent(ordercat)
            await channel.permissionOverwrites.create(interaction.guild.id, { VIEW_CHANNEL: false });
            await channel.permissionOverwrites.create(interaction.user.id, { VIEW_CHANNEL: true, CREATE_INSTANT_INVITE: true, SEND_MESSAGES: true, ATTACH_FILES: true, CONNECT: true, ADD_REACTIONS: true, READ_MESSAGE_HISTORY: true })
            await channel.permissionOverwrites.create(interaction.guild.roles.cache.find(x => x.id === employee), {
                VIEW_CHANNEL: true,
                CREATE_INSTANT_INVITE: false,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                CONNECT: true,
                ADD_REACTIONS: true,
                READ_MESSAGE_HISTORY: true,
            });


            await interaction.deferReply({ ephemeral: true }).catch(() => { });

            interaction.followUp(`You ticket is made: <#${channel.id}>`);
            var ticketEmbedSolliteren = new MessageEmbed()
                .setTitle(`Hi ${interaction.user.username}`)
                .setColor("GREEN")
                .setDescription("Your question is not in one of our general options, Could you please tell us what your question is? Then one of our employees will help you as soon as possible!")
                .addField("Reason for ticket: SOS ", "Made with ❤️ by [Corwin](https://corwindev.nl)")
            channel.send({ content: `<@${interaction.user.id}>`, embeds: [ticketEmbedSolliteren] })



        } else if (interaction.values[0] === "Report") {


            const channel = await interaction.guild.channels.create("│🎫・report-" + interaction.user.username, {
                type: "GUILD_TEXT",
            });

            await channel.setParent(ordercat)
            await channel.permissionOverwrites.create(interaction.guild.id, { VIEW_CHANNEL: false });
            await channel.permissionOverwrites.create(interaction.user.id, { VIEW_CHANNEL: true, CREATE_INSTANT_INVITE: true, SEND_MESSAGES: true, ATTACH_FILES: true, CONNECT: true, ADD_REACTIONS: true, READ_MESSAGE_HISTORY: true })
            await channel.permissionOverwrites.create(interaction.guild.roles.cache.find(x => x.id === employee), {
                VIEW_CHANNEL: true,
                CREATE_INSTANT_INVITE: false,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                CONNECT: true,
                ADD_REACTIONS: true,
                READ_MESSAGE_HISTORY: true,
            });


            await interaction.deferReply({ ephemeral: true }).catch(() => { });

            interaction.followUp(`You ticket is made: <#${channel.id}>`);
            var ticketEmbedSolliteren = new MessageEmbed()
                .setTitle(`Hi ${interaction.user.username}`)
                .setColor("GREEN")
                .setDescription("Please say your reason and who you want to report")
                .addField("Reason for ticket Report", "Made with ❤️ by [Corwin](https://corwindev.nl)")
            channel.send({ content: `<@${interaction.user.id}>`, embeds: [ticketEmbedSolliteren] })



        } else {
            console.log(interaction)
        }

    }
});
