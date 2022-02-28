const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const db = require("megadb");

const setPrefix = new db.crearDB("setPrefix")


module.exports = {

	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Muestra un menu de ayuda'),
	async execute(interaction) {

        let prefix;
        if(setPrefix.has(interaction.guild.id)) prefix = await setPrefix.get(interaction.guild.id)
		else prefix = "*"


		const EmbedHelp = new MessageEmbed()

			.setColor('#757575')
			.setTitle('Guia de ayuda del bot')
			.setAuthor({ name: '༻༺ 🪐 Ωlım₱o 🪐 ༻༺'})
			.setDescription('> Uso: '+prefix+'comando <subcomando> ➔ [Permiso] Explicacion')
			.setThumbnail('https://i.imgur.com/EKBLLjC.jpg')
			.addFields(
				{ name: 'Clear', value: '- **'+prefix+'clear** `<cantidad>` ➔ [BORRAR MENSAJES] Borra hasta 100 mensajes a la vez' },
				{ name: 'Config', value: '- **'+prefix+'config** `<help>` ➔ [ADMINISTRADOR] Ve el menu de configuracion' },
				{ name: 'Decrypt', value: '- **'+prefix+'decrypt** `<mensaje>` ➔ Desencripta un mensaje encriptado por el bot' },
				{ name: 'Encrypt', value: '- **'+prefix+'encrypt** `<mensaje>` ➔ Encripta un mensaje' },
				{ name: 'Remindme', value: '- **'+prefix+'remindme** `<dias>` `<evento>` ➔ [ADMINISTRADOR] Notifica de un evento'},
                { name: 'Report', value: '- **'+prefix+'report** `usuario` `razon` ➔ Reporta a un usuario que incumpla las reglas' }
            )
			.setImage('https://i.imgur.com/SJQVLgD.png')
			.setFooter({ text: 'Recuerda que tambien hay slash commands!'});

		interaction.reply({ embeds: [EmbedHelp] });
	},
};