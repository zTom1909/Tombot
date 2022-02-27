const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const db = require("megadb");

const setPrefix = new db.crearDB("setPrefix")


module.exports = {

	data: new SlashCommandBuilder()
		.setName('config')
		.setDescription('Muestra las opciones de configuracion'),
	async execute(interaction) {

        let prefix;
        if(setPrefix.has(interaction.guild.id)) prefix = await setPrefix.get(interaction.guild.id)
		else prefix = "*"


		const EmbedOlimpocoin = new MessageEmbed()

			.setColor('#757575')
			.setTitle('Guia de configuracion del bot')
			.setAuthor({ name: '༻༺ 🪐 Ωlım₱o 🪐 ༻༺'})
			.setDescription('> Uso: '+prefix+'config <subcomando>')
			.setThumbnail('https://i.imgur.com/EKBLLjC.jpg')
			.addFields(
				{ name: 'Prefix', value: '- **'+prefix+'config setPrefix** `<prefix>` ➔ Cambia el prefix del bot' },
				{ name: 'Misiones', value: '- **'+prefix+'config setMision** `<mision>` `<recompensa>` `<reto>` ➔ Cambia las misiones del comando `/misiones`' },
				{ name: 'Canal Reportes', value: '- **'+prefix+'config setReport** `<canal>` ➔ Especifica el canal de reportes' },
				{ name: 'Limpiar Reportes', value: '- **'+prefix+'config clearReports** `<mencion>` ➔ Limpia los reportes de un usuario' },
				{ name: 'Ver Reportes', value: '- **'+prefix+'config viewReports** `<mencion>` ➔ Ve los reportes de un usuario'}
			)
			.setImage('https://i.imgur.com/SJQVLgD.png')
			.setFooter({ text: 'Necesitas permisos de admin para usarlos!'});

		interaction.reply({ embeds: [EmbedOlimpocoin] });
	},
};